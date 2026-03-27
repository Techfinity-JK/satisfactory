import {
  Document,
  ImageRun,
  Packer,
  Paragraph,
  Table,
  TableRow,
  TableCell,
  TextRun,
  WidthType,
  AlignmentType,
  BorderStyle,
  VerticalAlign,
  convertInchesToTwip,
  UnderlineType,
  HeightRule,
} from "docx";
import * as fs from "fs";
import * as path from "path";

// Returns { width, height } in pixels from a PNG or JPEG file buffer, or null if unreadable.
function getImageDimensions(buf: Buffer): { width: number; height: number } | null {
  // PNG: signature 8 bytes, then IHDR chunk: 4 len + 4 "IHDR" + 4 width + 4 height
  if (buf.length >= 24 && buf.readUInt32BE(0) === 0x89504e47) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }
  // JPEG: scan for SOF0/SOF2 markers (0xFFC0, 0xFFC2)
  if (buf.length >= 4 && buf[0] === 0xff && buf[1] === 0xd8) {
    let offset = 2;
    while (offset + 8 < buf.length) {
      if (buf[offset] !== 0xff) break;
      const marker = buf[offset + 1];
      const segLen = buf.readUInt16BE(offset + 2);
      if ((marker === 0xc0 || marker === 0xc2) && offset + 8 < buf.length) {
        return { width: buf.readUInt16BE(offset + 7), height: buf.readUInt16BE(offset + 5) };
      }
      offset += 2 + segLen;
    }
  }
  return null;
}

// Per-icon max size overrides (filename → max px). Default is 80.
const ICON_MAX_SIZE: { [filename: string]: number } = {
  "door-exit-metal-square.jpg": 50,
  "rps.png": 50,
  "ebg.png": 50,
  "small-push-button.jpg": 50,
  "k1.png": 50,
  "emergency-key-switch.png": 50,
  "tmd01.png": 50,
  "proximity-card.png": 50,
};

function getIconMaxSize(imagePath: string): number {
  const filename = path.basename(imagePath);
  return ICON_MAX_SIZE[filename] ?? 80;
}

// Scale dimensions to fit within maxSize x maxSize while preserving aspect ratio.
function fitInBox(w: number, h: number, maxSize: number): { width: number; height: number } {
  if (w <= maxSize && h <= maxSize) return { width: w, height: h };
  const scale = Math.min(maxSize / w, maxSize / h);
  return { width: Math.round(w * scale), height: Math.round(h * scale) };
}

// Table colors
const HEADER_COLOR = "0070C0";
const BORDER_COLOR = "000000";

// Font settings
const FONT_FAMILY = "Century Gothic";
const FONT_SIZE = 18; // 9pt = 18 half-points

export interface QuotationItem {
  productId: string;
  name: string;
  brand: string;
  category: string;
  description?: string;
  dimension?: string;
  specs?: string[];
  imagePath?: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  promoPrice: number;
  totalPrice: number;
  warrantyMonths?: number;
}

export interface QuotationGroup {
  id: string;
  name: string;
  items: QuotationItem[];
}
//I hope Andrey achieves all of her dreams
export interface QuotationData {
  quoteRefNo: string;
  companyName: string;
  companyAddress?: string;
  contactPerson?: string;
  contactNumber?: string;
  emailAddress?: string;
  brochureOnly?: boolean;
  vatInclusive?: boolean;
  discount?: number;
  installationCost?: number;
  items: QuotationItem[];
  groups?: QuotationGroup[];
  sixColumnMode?: boolean;
  showPesoSign?: boolean;
  agent?: string;
  notes?: string;
}

export async function generateQuotation(
  data: QuotationData,
  outputPath: string
): Promise<void> {
  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: FONT_FAMILY,
            size: FONT_SIZE,
          },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: convertInchesToTwip(0.5),
              bottom: convertInchesToTwip(0.5),
              left: convertInchesToTwip(0.5),
              right: convertInchesToTwip(0.5),
            },
          },
        },
        children: [
          new Paragraph({
            children: [
              new ImageRun({
                data: fs.readFileSync(`src/assets/header/header_${data.agent ?? "jk"}.png`),
                transformation: { width: 700, height: 248 },
              }),
            ],
            spacing: { before: 0, after: 300 },
          }),

          // Quote Reference Number
          new Paragraph({
            children: [
              new TextRun({
                text: `Quote Ref No: ${data.quoteRefNo}`,
                font: FONT_FAMILY,
                bold: true,
                size: FONT_SIZE,
              }),
            ],
            spacing: { after: 120 },
          }),

          // Customer Info Table
          createCustomerInfoTable(data),

          // Thank you message
          new Paragraph({
            children: [
              new TextRun({
                text: "Thank you for your interest in our products; we will assist you with selecting the best systems & solutions that would fit your requirements.",
                font: FONT_FAMILY,
                size: FONT_SIZE,
              }),
            ],
            spacing: { before: 300, after: 300 },
          }),

          // Products
          ...createProductSections(data.items, data.groups, data.brochureOnly, data.vatInclusive, data.discount, data.sixColumnMode, data.showPesoSign, data.installationCost),

          // Notes
          ...(data.notes
            ? [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "Notes:",
                      font: FONT_FAMILY,
                      bold: true,
                      size: FONT_SIZE,
                    }),
                  ],
                  spacing: { before: 300 },
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: data.notes,
                      font: FONT_FAMILY,
                      size: FONT_SIZE,
                    }),
                  ],
                }),
              ]
            : []),

          // Remarks & Conforme
          ...createRemarksSection(),

          // Terms and Conditions
          ...createTermsAndConditions(data.vatInclusive, data.installationCost, getMaxWarrantyMonths(data)),

          // Signature
          ...createSignatureSection(),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outputPath, buffer);
}

function createCustomerInfoTable(data: QuotationData): Table {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const borderStyle = {
    style: BorderStyle.SINGLE,
    size: 8,
    color: BORDER_COLOR,
  };

  const borders = {
    top: borderStyle,
    bottom: borderStyle,
    left: borderStyle,
    right: borderStyle,
  };

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [
          createInfoLabelCell("Date", 10, borders),
          createInfoValueCell(today, 40, borders),
          createInfoLabelCell("Contact Person", 10, borders),
          createInfoValueCell(data.contactPerson || "", 40, borders),
        ],
      }),
      new TableRow({
        children: [
          createInfoLabelCell("Client", 10, borders),
          createInfoValueCell(data.companyName, 40, borders),
          createInfoLabelCell("Contact Number", 15, borders),
          createInfoValueCell(data.contactNumber || "", 35, borders),
        ],
      }),
      new TableRow({
        children: [
          createInfoLabelCell("Address", 15, borders),
          createInfoValueCell(data.companyAddress || "", 35, borders),
          createInfoLabelCell("Email", 15, borders),
          createInfoValueCell(data.emailAddress || "", 35, borders),
        ],
      }),
    ],
  });
}

function createInfoLabelCell(text: string, cellWidth: number, borders: object): TableCell {
  return new TableCell({
    children: [
      new Paragraph({
        children: [
          new TextRun({
            text: ` ${text}`,
            font: FONT_FAMILY,
            bold: true,
            size: FONT_SIZE,
          }),
        ],
      }),
    ],
    width: { size: cellWidth, type: WidthType.PERCENTAGE },
    borders,
    verticalAlign: VerticalAlign.CENTER,
  });
}

function createInfoValueCell(text: string, cellWidth: number, borders: object): TableCell {
  return new TableCell({
    children: [
      new Paragraph({
        children: [
          new TextRun({
            text: ` ${text}`,
            font: FONT_FAMILY,
            size: FONT_SIZE,
          }),
        ],
      }),
    ],
    width: { size: cellWidth, type: WidthType.PERCENTAGE },
    borders,
    verticalAlign: VerticalAlign.CENTER,
  });
}

function createProductSections(items: QuotationItem[], groups?: QuotationGroup[], brochureOnly?: boolean, vatInclusive?: boolean, discount?: number, sixColumnMode?: boolean, showPesoSign?: boolean, installationCost?: number): (Paragraph | Table)[] {
  const sections: (Paragraph | Table)[] = [];
  const curr = showPesoSign ? "₱" : "";

  // Helper to render items as a single table and return subtotal
  const renderItemsSection = (sectionItems: QuotationItem[], groupName?: string): number => {
    if (sectionItems.length === 0) return 0;

    let subtotal = sectionItems.reduce((sum, item) => sum + item.totalPrice, 0);

    // Add group header if this is a group
    if (groupName) {
      sections.push(
        new Paragraph({
          children: [
            new TextRun({
              text: groupName,
              font: FONT_FAMILY,
              bold: true,
              size: 22, // Slightly larger for group headers
            }),
          ],
          spacing: { before: 300, after: 150 },
        })
      );
    }

    // Create a single table containing all items
    sections.push(createGroupedTable(sectionItems, sixColumnMode, showPesoSign));

    // Add group subtotal if this is a group
    if (groupName && !brochureOnly) {
      sections.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${groupName} Subtotal = ${curr}${subtotal.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
              font: FONT_FAMILY,
              bold: true,
              size: FONT_SIZE,
              italics: true,
            }),
          ],
          alignment: AlignmentType.RIGHT,
          spacing: { before: 150, after: 200 },
        })
      );
    }

    return subtotal;
  };

  // Render ungrouped items first
  let totalEquipmentCost = 0;
  if (items.length > 0) {
    totalEquipmentCost += renderItemsSection(items);
  }

  // Render each group
  if (groups && groups.length > 0) {
    groups.forEach((group) => {
      totalEquipmentCost += renderItemsSection(group.items, group.name);
    });
  }

  // Totals section (only show if not brochure only mode)
  if (!brochureOnly) {
    const discountAmount = discount || 0;
    const installationAmount = installationCost || 0;

    const totalAfterDiscount = totalEquipmentCost - discountAmount;

    // Group 1: EQUIPMENT PRICE [+ LESS DISCOUNT + TOTAL EQUIPMENT COST] — soft line breaks, no space between
    const priceGroupChildren: TextRun[] = [
      new TextRun({
        text: `EQUIPMENT PRICE = ${curr}${totalEquipmentCost.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
        font: FONT_FAMILY,
        bold: true,
        size: FONT_SIZE,
      }),
    ];
    if (discountAmount > 0) {
      priceGroupChildren.push(new TextRun({ break: 1 }));
      priceGroupChildren.push(
        new TextRun({
          text: `LESS DISCOUNT = ${curr}${discountAmount.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
          font: FONT_FAMILY,
          bold: true,
          size: FONT_SIZE,
        })
      );
      priceGroupChildren.push(new TextRun({ break: 1 }));
      priceGroupChildren.push(
        new TextRun({
          text: `TOTAL EQUIPMENT COST = ${curr}${totalAfterDiscount.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
          font: FONT_FAMILY,
          bold: true,
          size: FONT_SIZE,
        })
      );
    }
    sections.push(
      new Paragraph({
        children: priceGroupChildren,
        alignment: AlignmentType.RIGHT,
        spacing: { before: 300, after: 100 },
      })
    );

    // Calculate subtotal before VAT
    const subtotal = totalAfterDiscount + installationAmount;

    // Group 2: INSTALLATION COST + PLUS 12% VAT — soft line breaks, no space between
    let vatAmount = 0;
    if (vatInclusive) {
      vatAmount = subtotal * 0.12;
    }
    if (installationAmount > 0 || vatAmount > 0) {
      const extraGroupChildren: TextRun[] = [];
      if (installationAmount > 0) {
        extraGroupChildren.push(
          new TextRun({
            text: `INSTALLATION COST = ${curr}${installationAmount.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
            font: FONT_FAMILY,
            bold: true,
            size: FONT_SIZE,
          })
        );
      }
      if (vatAmount > 0) {
        if (extraGroupChildren.length > 0) extraGroupChildren.push(new TextRun({ break: 1 }));
        extraGroupChildren.push(
          new TextRun({
            text: `PLUS 12% VAT = ${curr}${vatAmount.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
            font: FONT_FAMILY,
            bold: true,
            size: FONT_SIZE,
          })
        );
      }
      sections.push(
        new Paragraph({
          children: extraGroupChildren,
          alignment: AlignmentType.RIGHT,
          spacing: { after: 100 },
        })
      );
    }

    // TOTAL INVESTMENT COST (bold, underlined, highlighted)
    const totalInvestment = subtotal + vatAmount;
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `TOTAL INVESTMENT COST = ${curr}${totalInvestment.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
            font: FONT_FAMILY,
            bold: true,
            underline: {},
            highlight: "yellow",
            size: FONT_SIZE,
          }),
        ],
        alignment: AlignmentType.RIGHT,
        spacing: { before: 100, after: 150 },
      })
    );

    // 6. MANDATORY NOTES
    const vatText = vatInclusive ? "VAT INCLUSIVE PRICE" : "VAT EXCLUSIVE PRICE";
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "NOTES:",
            font: FONT_FAMILY,
            bold: true,
            size: FONT_SIZE,
            highlight: "yellow",
          }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { before: 100, after: 50 },
      })
    );
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "1. INSTALLATION SERVICE NOT YET INCLUDED (NEED SITE SURVEY)",
            font: FONT_FAMILY,
            bold: true,
            size: FONT_SIZE,
            highlight: "yellow",
          }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 50 },
      })
    );
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `2. ${vatText}`,
            font: FONT_FAMILY,
            bold: true,
            size: FONT_SIZE,
            highlight: "yellow",
          }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 50 },
      })
    );
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "3. USER ORIENTATION HOW TO USE DEVICE VIA VIRTUAL GOOGLE MEET",
            font: FONT_FAMILY,
            bold: true,
            size: FONT_SIZE,
            highlight: "yellow",
          }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 200 },
      })
    );
  }

  return sections;
}

// Create a single table containing multiple products
function createGroupedTable(items: QuotationItem[], sixColumnMode?: boolean, showPesoSign?: boolean): Table {
  const curr = showPesoSign ? "₱" : "";
  const borderStyle = {
    style: BorderStyle.SINGLE,
    size: 6,
    color: BORDER_COLOR,
  };

  const borders = {
    top: borderStyle,
    bottom: borderStyle,
    left: borderStyle,
    right: borderStyle,
  };

  // Column widths: redistribute promo column (13%) across remaining cols when in 6-col mode
  const w = sixColumnMode
    ? { model: 20, desc: 46, qty: 5, unit: 5, unitPrice: 12, amount: 12 }
    : { model: 20, desc: 33, qty: 5, unit: 5, unitPrice: 12, promo: 13, amount: 12 };

  // Header row
  const headerChildren = [
    createProductHeaderCell("Model", w.model, borders),
    createProductHeaderCell("Item Description", w.desc, borders),
    createProductHeaderCell("Qty", w.qty, borders),
    createProductHeaderCell("Unit", w.unit, borders),
    createProductHeaderCell("Unit Price", w.unitPrice, borders),
    ...(!sixColumnMode ? [createProductHeaderCell("PROMO\nAMOUNT", w.promo!, borders)] : []),
    createProductHeaderCell("AMOUNT", w.amount, borders),
  ];

  const headerRow = new TableRow({
    children: headerChildren,
    height: { value: 480, rule: HeightRule.ATLEAST },
  });

  const allRows: TableRow[] = [headerRow];

  // Only biometric items get software/USB freebies
  const biometricQuantity = items
    .filter((item) => item.category === "Biometrics")
    .reduce((sum, item) => sum + item.quantity, 0);

  // Add rows for each item
  items.forEach((item) => {

    // Build item description: description lines → specs (incl. dimension → warranty)
    const descriptionParagraphs: Paragraph[] = [];

    // 1. Product description (split on \n into separate paragraphs)
    if (item.description) {
      item.description.split("\n").forEach((line) => {
        const trimmed = line.trim();
        if (trimmed) {
          descriptionParagraphs.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: trimmed,
                  font: FONT_FAMILY,
                  size: FONT_SIZE,
                }),
              ],
            })
          );
        }
      });
    }

    // 2. Specs (capacity, connectivity, ADMS, dimension, warranty — built in renderer)
    if (item.specs && item.specs.length > 0) {
      item.specs.forEach((spec) => {
        const isWarranty = spec.includes("WARRANTY") || spec.includes("ADMS");
        descriptionParagraphs.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `~ ${spec}`,
                font: FONT_FAMILY,
                size: FONT_SIZE,
                bold: isWarranty,
              }),
            ],
          })
        );
      });
    }

    // Build model cell content with image
    const modelCellChildren: Paragraph[] = [];

    // Add image if path exists
    if (item.imagePath) {
      const absoluteImagePath = path.resolve(process.cwd(), item.imagePath);
      if (fs.existsSync(absoluteImagePath)) {
        const imgBuf = fs.readFileSync(absoluteImagePath);
        const dims = getImageDimensions(imgBuf);
        const iconMax = getIconMaxSize(absoluteImagePath);
        const { width: imgW, height: imgH } = dims ? fitInBox(dims.width, dims.height, iconMax) : { width: iconMax, height: iconMax };
        modelCellChildren.push(
          new Paragraph({
            children: [
              new ImageRun({
                data: imgBuf,
                transformation: { width: imgW, height: imgH },
              }),
            ],
            alignment: AlignmentType.CENTER,
          })
        );
      }
    }

    // Add model name
    modelCellChildren.push(
      new Paragraph({
        children: [
          new TextRun({
            text: item.name,
            font: FONT_FAMILY,
            bold: true,
            size: FONT_SIZE,
          }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { before: 100 },
      })
    );

    // Product data row
    const dataRowChildren = [
      new TableCell({ children: modelCellChildren, borders, verticalAlign: VerticalAlign.CENTER }),
      new TableCell({ children: descriptionParagraphs, borders, verticalAlign: VerticalAlign.CENTER }),
      new TableCell({
        children: [new Paragraph({ children: [new TextRun({ text: item.quantity.toString(), font: FONT_FAMILY, size: FONT_SIZE })], alignment: AlignmentType.CENTER })],
        borders, verticalAlign: VerticalAlign.CENTER,
      }),
      new TableCell({
        children: [new Paragraph({ children: [new TextRun({ text: item.unit, font: FONT_FAMILY, size: FONT_SIZE })], alignment: AlignmentType.CENTER })],
        borders, verticalAlign: VerticalAlign.CENTER,
      }),
      new TableCell({
        children: [new Paragraph({ children: [new TextRun({ text: `${curr}${item.unitPrice.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`, font: FONT_FAMILY, size: FONT_SIZE })], alignment: AlignmentType.CENTER })],
        borders, verticalAlign: VerticalAlign.CENTER,
      }),
      ...(!sixColumnMode ? [new TableCell({
        children: [new Paragraph({ children: [new TextRun({ text: `${curr}${item.promoPrice.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`, font: FONT_FAMILY, size: FONT_SIZE })], alignment: AlignmentType.CENTER })],
        borders, verticalAlign: VerticalAlign.CENTER,
      })] : []),
      new TableCell({
        children: [new Paragraph({ children: [new TextRun({ text: `${curr}${item.totalPrice.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`, font: FONT_FAMILY, bold: true, size: FONT_SIZE })], alignment: AlignmentType.CENTER })],
        borders, verticalAlign: VerticalAlign.CENTER,
      }),
    ];

    allRows.push(new TableRow({ children: dataRowChildren }));
  });

  // Only add freebie rows if there are biometric items
  if (biometricQuantity > 0) {
    const makeFreebieRow = (model: string, description: string, unit: string): TableRow =>
      new TableRow({
        children: [
          new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: model, font: FONT_FAMILY, size: FONT_SIZE })], alignment: AlignmentType.CENTER })], borders, verticalAlign: VerticalAlign.CENTER }),
          new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: description, font: FONT_FAMILY, size: FONT_SIZE })] })], borders, verticalAlign: VerticalAlign.CENTER }),
          new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: biometricQuantity.toString(), font: FONT_FAMILY, size: FONT_SIZE })], alignment: AlignmentType.CENTER })], borders, verticalAlign: VerticalAlign.CENTER }),
          new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: unit, font: FONT_FAMILY, size: FONT_SIZE })], alignment: AlignmentType.CENTER })], borders, verticalAlign: VerticalAlign.CENTER }),
          new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Free", font: FONT_FAMILY, size: FONT_SIZE })], alignment: AlignmentType.CENTER })], borders, verticalAlign: VerticalAlign.CENTER }),
          ...(!sixColumnMode ? [new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Free", font: FONT_FAMILY, size: FONT_SIZE })], alignment: AlignmentType.CENTER })], borders, verticalAlign: VerticalAlign.CENTER })] : []),
          new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Free", font: FONT_FAMILY, bold: true, size: FONT_SIZE })], alignment: AlignmentType.CENTER })], borders, verticalAlign: VerticalAlign.CENTER }),
        ],
      });

    allRows.push(makeFreebieRow("Software", "ZkTeco Attendance Management", "License"));
    allRows.push(makeFreebieRow("", "16GB USB FLASH DISK DRIVE", "pc"));
  }

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: allRows,
  });
}

function createProductTable(item: QuotationItem): Table {
  const borderStyle = {
    style: BorderStyle.SINGLE,
    size: 6,
    color: BORDER_COLOR,
  };

  const borders = {
    top: borderStyle,
    bottom: borderStyle,
    left: borderStyle,
    right: borderStyle,
  };

  // Header row
  const headerRow = new TableRow({
    children: [
      createProductHeaderCell("Model", 15, borders),
      createProductHeaderCell("Item Description", 30, borders),
      createProductHeaderCell("Qty", 7, borders),
      createProductHeaderCell("Unit", 8, borders),
      createProductHeaderCell("Unit Price", 13, borders),
      createProductHeaderCell("PROMO\nAMOUNT", 13, borders),
      createProductHeaderCell("TOTAL\nAMOUNT", 14, borders),
    ],
  });

  // Build item description with specs
  const descriptionParagraphs: Paragraph[] = [];
  if (item.specs && item.specs.length > 0) {
    item.specs.forEach((spec) => {
      descriptionParagraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `~ ${spec}`,
              font: FONT_FAMILY,
              size: FONT_SIZE,
            }),
          ],
        })
      );
    });
  }

  // Build model cell content with image
  const modelCellChildren: Paragraph[] = [];

  // Add image if path exists
  if (item.imagePath) {
    const absoluteImagePath = path.resolve(process.cwd(), item.imagePath);
    if (fs.existsSync(absoluteImagePath)) {
      const imgBuf = fs.readFileSync(absoluteImagePath);
      const dims = getImageDimensions(imgBuf);
      const { width: imgW, height: imgH } = dims ? fitInBox(dims.width, dims.height, 80) : { width: 80, height: 80 };
      modelCellChildren.push(
        new Paragraph({
          children: [
            new ImageRun({
              data: imgBuf,
              transformation: { width: imgW, height: imgH },
            }),
          ],
          alignment: AlignmentType.CENTER,
        })
      );
    }
  }

  // Add model name
  modelCellChildren.push(
    new Paragraph({
      children: [
        new TextRun({
          text: item.name,
          font: FONT_FAMILY,
          bold: true,
          size: FONT_SIZE,
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { before: 100 },
    })
  );

  // Data row
  const dataRow = new TableRow({
    children: [
      // Model cell with image and name
      new TableCell({
        children: modelCellChildren,
        borders,
        verticalAlign: VerticalAlign.CENTER,
      }),
      // Item Description
      new TableCell({
        children:
          descriptionParagraphs.length > 0
            ? descriptionParagraphs
            : [
                new Paragraph({
                  children: [new TextRun({ text: "-", font: FONT_FAMILY, size: FONT_SIZE })],
                }),
              ],
        borders,
        verticalAlign: VerticalAlign.CENTER,
      }),
      // Qty
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: item.quantity.toString(),
                font: FONT_FAMILY,
                size: FONT_SIZE,
              }),
            ],
            alignment: AlignmentType.CENTER,
          }),
        ],
        borders,
        verticalAlign: VerticalAlign.CENTER,
      }),
      // Unit
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: item.unit,
                font: FONT_FAMILY,
                size: FONT_SIZE,
              }),
            ],
            alignment: AlignmentType.CENTER,
          }),
        ],
        borders,
        verticalAlign: VerticalAlign.CENTER,
      }),
      // Unit Price
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: `₱${item.unitPrice.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
                font: FONT_FAMILY,
                size: FONT_SIZE,
              }),
            ],
            alignment: AlignmentType.CENTER,
          }),
        ],
        borders,
        verticalAlign: VerticalAlign.CENTER,
      }),
      // Promo Amount
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: `₱${item.promoPrice.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
                font: FONT_FAMILY,
                size: FONT_SIZE,
              }),
            ],
            alignment: AlignmentType.CENTER,
          }),
        ],
        borders,
        verticalAlign: VerticalAlign.CENTER,
      }),
      // Total Amount
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: `₱${item.totalPrice.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
                font: FONT_FAMILY,
                bold: true,
                size: FONT_SIZE,
              }),
            ],
            alignment: AlignmentType.CENTER,
          }),
        ],
        borders,
        verticalAlign: VerticalAlign.CENTER,
      }),
    ],
  });

  // Freebie row 1: Software
  const softwareRow = new TableRow({
    children: [
      // Model cell - "Software"
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "Software",
                font: FONT_FAMILY,
                size: FONT_SIZE,
              }),
            ],
            alignment: AlignmentType.CENTER,
          }),
        ],
        borders,
        verticalAlign: VerticalAlign.CENTER,
      }),
      // Item Description - "ZkTeco Attendance Management"
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "ZkTeco Attendance Management",
                font: FONT_FAMILY,
                size: FONT_SIZE,
              }),
            ],
          }),
        ],
        borders,
        verticalAlign: VerticalAlign.CENTER,
      }),
      // Qty - same as device quantity
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: item.quantity.toString(),
                font: FONT_FAMILY,
                size: FONT_SIZE,
              }),
            ],
            alignment: AlignmentType.CENTER,
          }),
        ],
        borders,
        verticalAlign: VerticalAlign.CENTER,
      }),
      // Unit - "License"
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "License",
                font: FONT_FAMILY,
                size: FONT_SIZE,
              }),
            ],
            alignment: AlignmentType.CENTER,
          }),
        ],
        borders,
        verticalAlign: VerticalAlign.CENTER,
      }),
      // Unit Price - "Free"
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "Free",
                font: FONT_FAMILY,
                size: FONT_SIZE,
              }),
            ],
            alignment: AlignmentType.CENTER,
          }),
        ],
        borders,
        verticalAlign: VerticalAlign.CENTER,
      }),
      // Promo Amount - "Free"
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "Free",
                font: FONT_FAMILY,
                size: FONT_SIZE,
              }),
            ],
            alignment: AlignmentType.CENTER,
          }),
        ],
        borders,
        verticalAlign: VerticalAlign.CENTER,
      }),
      // Total Amount - "Free"
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "Free",
                font: FONT_FAMILY,
                bold: true,
                size: FONT_SIZE,
              }),
            ],
            alignment: AlignmentType.CENTER,
          }),
        ],
        borders,
        verticalAlign: VerticalAlign.CENTER,
      }),
    ],
  });

  // Freebie row 2: USB Flash Drive
  const usbRow = new TableRow({
    children: [
      // Model cell - empty
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "",
                font: FONT_FAMILY,
                size: FONT_SIZE,
              }),
            ],
          }),
        ],
        borders,
        verticalAlign: VerticalAlign.CENTER,
      }),
      // Item Description - "16GB USB FLASH DISK DRIVE"
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "16GB USB FLASH DISK DRIVE",
                font: FONT_FAMILY,
                size: FONT_SIZE,
              }),
            ],
          }),
        ],
        borders,
        verticalAlign: VerticalAlign.CENTER,
      }),
      // Qty - same as device quantity
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: item.quantity.toString(),
                font: FONT_FAMILY,
                size: FONT_SIZE,
              }),
            ],
            alignment: AlignmentType.CENTER,
          }),
        ],
        borders,
        verticalAlign: VerticalAlign.CENTER,
      }),
      // Unit - "pc"
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "pc",
                font: FONT_FAMILY,
                size: FONT_SIZE,
              }),
            ],
            alignment: AlignmentType.CENTER,
          }),
        ],
        borders,
        verticalAlign: VerticalAlign.CENTER,
      }),
      // Unit Price - "Free"
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "Free",
                font: FONT_FAMILY,
                size: FONT_SIZE,
              }),
            ],
            alignment: AlignmentType.CENTER,
          }),
        ],
        borders,
        verticalAlign: VerticalAlign.CENTER,
      }),
      // Promo Amount - "Free"
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "Free",
                font: FONT_FAMILY,
                size: FONT_SIZE,
              }),
            ],
            alignment: AlignmentType.CENTER,
          }),
        ],
        borders,
        verticalAlign: VerticalAlign.CENTER,
      }),
      // Total Amount - "Free"
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "Free",
                font: FONT_FAMILY,
                bold: true,
                size: FONT_SIZE,
              }),
            ],
            alignment: AlignmentType.CENTER,
          }),
        ],
        borders,
        verticalAlign: VerticalAlign.CENTER,
      }),
    ],
  });

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [headerRow, dataRow, softwareRow, usbRow],
  });
}

function createProductHeaderCell(
  text: string,
  widthPercent: number,
  borders: object
): TableCell {
  return new TableCell({
    children: [
      new Paragraph({
        children: [
          new TextRun({
            text,
            font: FONT_FAMILY,
            bold: true,
            color: "FFFFFF",
            size: FONT_SIZE,
          }),
        ],
        alignment: AlignmentType.CENTER,
      }),
    ],
    width: { size: widthPercent, type: WidthType.PERCENTAGE },
    shading: { fill: HEADER_COLOR },
    borders,
    verticalAlign: VerticalAlign.CENTER,
  });
}

function getMaxWarrantyMonths(data: QuotationData): number {
  const allItems = [
    ...data.items,
    ...(data.groups ?? []).flatMap((g) => g.items),
  ];
  return allItems.reduce((max, item) => Math.max(max, item.warrantyMonths ?? 0), 0);
}

function warrantyToText(months: number): string {
  if (months <= 0) return "one (1) year";
  if (months % 12 === 0) {
    const years = months / 12;
    const words: Record<number, string> = { 1: "one", 2: "two", 3: "three", 4: "four", 5: "five" };
    const word = words[years] ?? `${years}`;
    return `${word} (${years}) ${years === 1 ? "year" : "years"}`;
  }
  const words: Record<number, string> = { 6: "six", 18: "eighteen" };
  const word = words[months] ?? `${months}`;
  return `${word} (${months}) months`;
}

function createTermsAndConditions(vatInclusive?: boolean, installationCost?: number, maxWarrantyMonths?: number): (Paragraph | Table)[] {
  const borderStyle = {
    style: BorderStyle.SINGLE,
    size: 6,
    color: "000000",
  };

  const borders = {
    top: borderStyle,
    bottom: borderStyle,
    left: borderStyle,
    right: borderStyle,
  };

  const termEntries: { text: string; highlight?: string; bold?: string; rest?: string }[] = [];

  if ((installationCost ?? 0) > 0) {
    termEntries.push({ text: "INSTALLATION SERVICE & COST INCLUDED" });
  }

  termEntries.push(
    {
      text: "Prices quoted above are ",
      highlight: vatInclusive ? "VAT Inclusive" : "VAT Exclusive",
      rest: ". Email or fax certification if your company is vat exempt and zero rated for billing preparation.",
    },
    { text: "Prices are subject to change without prior notice. Validity for this quotation is 15 days from the date stated above." },
    { text: "Payment terms is Fifty Percent (50%) upon P.O. or signing of this CONFORME. Remaining balance shall be paid upon receive of items or after the installation." },
    {
      text: "Payment will be accepted in COD, CASH, and Dated check or thru Bank Transfer payable to ",
      bold: "TECHFINITY SECURITY DEVICE TRADING",
      rest: ".",
    },
    { text: "FREE DELIVERY for purchases above Php10,000 within Metro Manila." },
    { text: "Cancelled orders are subject to a cancellation charge of Fifty Percent (50%)." },
    { text: `Up to ${warrantyToText(maxWarrantyMonths ?? 0)} limited warranty in service and parts will be given for main equipment from date of purchase/delivery/installation. Accessories such as power supply, adaptor, magnetic lock, exit button have six (6) months warranty. The warranty covers the parts cause of factory defect not including upgrades and relocation. Unauthorized repair will void its warranty. Warranty claims is strictly carry in basis, client must send the item to our office for repair. For those with installation, we will do the onsite checking and troubleshooting for free within metro manila, for outside metro manila client will pay for the mobilization/demobilization cost.` },
    { text: "Should client will require service unit while defective device is under repair; client must pay a service unit fee but depends on the availability of the service unit." },
    { text: "After sales support is from Monday – Friday 8:30 – 5:30 pm" }
  );

  const terms = termEntries.map((entry, i) => ({ num: `${i + 1}.)`, ...entry }));

  const termsParagraphs: Paragraph[] = [];

  // Header
  termsParagraphs.push(
    new Paragraph({
      children: [
        new TextRun({
          text: "TERMS & CONDITIONS:",
          font: FONT_FAMILY,
          bold: true,
          size: FONT_SIZE,
        }),
      ],
    })
  );

  // Each term
  terms.forEach((term) => {
    const children: TextRun[] = [
      new TextRun({
        text: `${term.num} `,
        font: FONT_FAMILY,
        size: FONT_SIZE,
      }),
    ];

    if (term.highlight) {
      children.push(
        new TextRun({
          text: term.text,
          font: FONT_FAMILY,
          size: FONT_SIZE,
        }),
        new TextRun({
          text: term.highlight,
          font: FONT_FAMILY,
          size: FONT_SIZE,
          highlight: "yellow",
        }),
        new TextRun({
          text: term.rest || "",
          font: FONT_FAMILY,
          size: FONT_SIZE,
        })
      );
    } else if (term.bold) {
      children.push(
        new TextRun({
          text: term.text,
          font: FONT_FAMILY,
          size: FONT_SIZE,
        }),
        new TextRun({
          text: term.bold,
          font: FONT_FAMILY,
          size: FONT_SIZE,
          bold: true,
        }),
        new TextRun({
          text: term.rest || "",
          font: FONT_FAMILY,
          size: FONT_SIZE,
        })
      );
    } else {
      children.push(
        new TextRun({
          text: term.text,
          font: FONT_FAMILY,
          size: FONT_SIZE,
        })
      );
    }

    termsParagraphs.push(
      new Paragraph({
        children,
      })
    );
  });

  // Wrap in table cell
  const termsTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: termsParagraphs,
            borders,
          }),
        ],
      }),
    ],
  });

  return [
    new Paragraph({ spacing: { before: 300 } }),
    termsTable,
  ];
}

function createRemarksSection(): (Paragraph | Table)[] {
  const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
  const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };
  const boxBorder = { style: BorderStyle.SINGLE, size: 8, color: "000000" };
  const allBoxBorders = { top: boxBorder, bottom: boxBorder, left: boxBorder, right: boxBorder };
  const sigLineBorder = { style: BorderStyle.SINGLE, size: 4, color: "000000" };

  // Left nested table: REMARKS label + bordered text box
  const leftTable = new Table({
    width: { size: 0, type: WidthType.AUTO },
    columnWidths: [30, 4869],
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 30, type: WidthType.DXA },
            borders: noBorders,
            children: [new Paragraph({ children: [] })],
          }),
          new TableCell({
            width: { size: 4869, type: WidthType.DXA },
            borders: noBorders,
            verticalAlign: VerticalAlign.CENTER,
            children: [
              new Paragraph({
                children: [new TextRun({ text: "REMARKS", font: FONT_FAMILY, size: FONT_SIZE })],
              }),
            ],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            columnSpan: 2,
            width: { size: 4899, type: WidthType.DXA },
            borders: allBoxBorders,
            verticalAlign: VerticalAlign.CENTER,
            children: [
              new Paragraph({
                children: [
                  new TextRun({ text: " ", font: FONT_FAMILY, size: FONT_SIZE }),
                  new TextRun({
                    text: "Prices of labor and material costs such as supply/installation conduit, coaxial cable, power cable, connectors, metal plates and any other hardware necessary to complete the system installation is not part of the package",
                    font: FONT_FAMILY,
                    size: FONT_SIZE,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });

  // Right nested table: CONFORME / BY + signature line / label
  const rightTable = new Table({
    width: { size: 0, type: WidthType.AUTO },
    columnWidths: [387, 3437],
    rows: [
      // CONFORME
      new TableRow({
        children: [
          new TableCell({
            columnSpan: 2,
            width: { size: 3824, type: WidthType.DXA },
            borders: noBorders,
            verticalAlign: VerticalAlign.CENTER,
            children: [
              new Paragraph({
                children: [new TextRun({ text: "CONFORME", font: FONT_FAMILY, size: FONT_SIZE })],
              }),
            ],
          }),
        ],
      }),
      // Empty spacer rows (3 total for spacing below CONFORME)
      new TableRow({
        children: [
          new TableCell({
            columnSpan: 2,
            width: { size: 3824, type: WidthType.DXA },
            borders: noBorders,
            children: [new Paragraph({ children: [] })],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            columnSpan: 2,
            width: { size: 3824, type: WidthType.DXA },
            borders: noBorders,
            children: [new Paragraph({ children: [] })],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            columnSpan: 2,
            width: { size: 3824, type: WidthType.DXA },
            borders: noBorders,
            children: [new Paragraph({ children: [] })],
          }),
        ],
      }),
      // BY | signature underline
      new TableRow({
        children: [
          new TableCell({
            width: { size: 387, type: WidthType.DXA },
            borders: noBorders,
            verticalAlign: VerticalAlign.CENTER,
            children: [
              new Paragraph({
                children: [new TextRun({ text: "BY", font: FONT_FAMILY, size: FONT_SIZE })],
              }),
            ],
          }),
          new TableCell({
            width: { size: 3437, type: WidthType.DXA },
            borders: { top: noBorder, left: noBorder, right: noBorder, bottom: sigLineBorder },
            verticalAlign: VerticalAlign.CENTER,
            children: [new Paragraph({ children: [new TextRun({ text: " ", font: FONT_FAMILY, size: FONT_SIZE })] })],
          }),
        ],
      }),
      // Signature Over Printed Name/Date — centered
      new TableRow({
        children: [
          new TableCell({
            columnSpan: 2,
            width: { size: 3824, type: WidthType.DXA },
            borders: noBorders,
            verticalAlign: VerticalAlign.CENTER,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: "Signature Over Printed Name/Date",
                    font: FONT_FAMILY,
                    size: FONT_SIZE,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });

  // Outer table: left (REMARKS) | spacer | right (CONFORME)
  return [
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 4899, type: WidthType.DXA },
              borders: noBorders,
              verticalAlign: VerticalAlign.CENTER,
              children: [leftTable, new Paragraph({ children: [] })],
            }),
            new TableCell({
              width: { size: 300, type: WidthType.DXA },
              borders: noBorders,
              children: [new Paragraph({ children: [new TextRun({ text: " ", font: FONT_FAMILY, size: FONT_SIZE })] })],
            }),
            new TableCell({
              width: { size: 4799, type: WidthType.DXA },
              borders: noBorders,
              verticalAlign: VerticalAlign.CENTER,
              children: [rightTable, new Paragraph({ children: [] })],
            }),
          ],
        }),
      ],
    }),
  ];
}

function createSignatureSection(): Paragraph[] {
  return [
    new Paragraph({
      children: [
        new TextRun({
          text: "Best Regards",
          font: FONT_FAMILY,
          bold: true,
          size: FONT_SIZE,
        }),
      ],
      spacing: { before: 300 },
    }),
    new Paragraph({
      spacing: { before: 200 },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: "JOHN KARL NOLASCO",
          font: FONT_FAMILY,
          bold: true,
          underline: { type: UnderlineType.SINGLE },
          size: FONT_SIZE,
        }),
      ],
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: "Sales Account Officer",
          font: FONT_FAMILY,
          size: FONT_SIZE,
        }),
      ],
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: "09484263778",
          font: FONT_FAMILY,
          size: FONT_SIZE,
        }),
      ],
    }),
  ];
}
