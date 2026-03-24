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
} from "docx";
import * as fs from "fs";
import * as path from "path";

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
  specs?: string[];
  imagePath?: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  promoPrice: number;
  totalPrice: number;
}

export interface ServiceItem {
  name: string;
  price: number;
}

export interface QuotationGroup {
  id: string;
  name: string;
  items: QuotationItem[];
}

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
  items: QuotationItem[];
  groups?: QuotationGroup[];
  services?: ServiceItem[];
  sixColumnMode?: boolean;
  showPesoSign?: boolean;
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
                data: fs.readFileSync("src/assets/header/header.PNG"),
                transformation: {
                  width: 690,
                  height: 220,
                },
              }),
            ],
            spacing: { after: 400 },
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
          ...createProductSections(data.items, data.groups, data.brochureOnly, data.vatInclusive, data.discount, data.services, data.sixColumnMode, data.showPesoSign),

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

          // Terms and Conditions
          ...createTermsAndConditions(data.vatInclusive),

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
            text,
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
            text,
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

function createProductSections(items: QuotationItem[], groups?: QuotationGroup[], brochureOnly?: boolean, vatInclusive?: boolean, discount?: number, services?: ServiceItem[], sixColumnMode?: boolean, showPesoSign?: boolean): (Paragraph | Table)[] {
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
    // 1. TOTAL EQUIPMENT COST
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `TOTAL EQUIPMENT COST = ${curr}${totalEquipmentCost.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
            font: FONT_FAMILY,
            bold: true,
            size: FONT_SIZE,
          }),
        ],
        alignment: AlignmentType.RIGHT,
        spacing: { before: 300, after: 100 },
      })
    );

    // 2. LESS DISCOUNT (if any)
    const discountAmount = discount || 0;
    if (discountAmount > 0) {
      sections.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `LESS DISCOUNT = ${curr}${discountAmount.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
              font: FONT_FAMILY,
              bold: true,
              size: FONT_SIZE,
            }),
          ],
          alignment: AlignmentType.RIGHT,
          spacing: { after: 100 },
        })
      );
    }

    // 3. INSTALLATION COST (services)
    let installationCost = 0;
    if (services && services.length > 0) {
      installationCost = services.reduce((sum, s) => sum + s.price, 0);
      sections.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `INSTALLATION COST = ${curr}${installationCost.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
              font: FONT_FAMILY,
              bold: true,
              size: FONT_SIZE,
            }),
          ],
          alignment: AlignmentType.RIGHT,
          spacing: { after: 100 },
        })
      );
    }

    // Calculate subtotal before VAT
    const subtotal = totalEquipmentCost - discountAmount + installationCost;

    // 4. PLUS 12% VAT (if inclusive)
    let vatAmount = 0;
    if (vatInclusive) {
      vatAmount = subtotal * 0.12;
      sections.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `PLUS 12% VAT = ${curr}${vatAmount.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
              font: FONT_FAMILY,
              bold: true,
              size: FONT_SIZE,
            }),
          ],
          alignment: AlignmentType.RIGHT,
          spacing: { after: 100 },
        })
      );
    }

    // 5. TOTAL INVESTMENT COST
    const totalInvestment = subtotal + vatAmount;
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `TOTAL INVESTMENT COST = ${curr}${totalInvestment.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
            font: FONT_FAMILY,
            bold: true,
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
    ? { model: 15, desc: 43, qty: 5, unit: 5, unitPrice: 14, amount: 18 }
    : { model: 15, desc: 35, qty: 5, unit: 5, unitPrice: 13, promo: 13, amount: 14 };

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

  const headerRow = new TableRow({ children: headerChildren });

  const allRows: TableRow[] = [headerRow];

  // Only biometric items get software/USB freebies
  const biometricQuantity = items
    .filter((item) => item.category === "Biometrics")
    .reduce((sum, item) => sum + item.quantity, 0);

  // Add rows for each item
  items.forEach((item) => {

    // Build item description with specs
    const descriptionParagraphs: Paragraph[] = [];

    // Add product description if present
    if (item.description) {
      descriptionParagraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: item.description,
              font: FONT_FAMILY,
              size: FONT_SIZE,
            }),
          ],
        })
      );
    }

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
        modelCellChildren.push(
          new Paragraph({
            children: [
              new ImageRun({
                data: fs.readFileSync(absoluteImagePath),
                transformation: {
                  width: 80,
                  height: 80,
                },
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
      modelCellChildren.push(
        new Paragraph({
          children: [
            new ImageRun({
              data: fs.readFileSync(absoluteImagePath),
              transformation: {
                width: 80,
                height: 80,
              },
              //type: "png",
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

function createTermsAndConditions(vatInclusive?: boolean): (Paragraph | Table)[] {
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

  const terms = [
    {
      num: "1.)",
      text: "Prices quoted above are ",
      highlight: vatInclusive ? "VAT Inclusive" : "VAT Exclusive",
      rest: ". Email or fax certification if your company is vat exempt and zero rated for billing preparation.",
    },
    {
      num: "2.)",
      text: "Prices are subject to change without prior notice. Validity for this quotation is 15 days from the date stated above.",
    },
    {
      num: "3.)",
      text: "Payment terms is Fifty Percent (50%) upon P.O. or signing of this CONFORME. Remaining balance shall be paid upon receive of items or after the installation.",
    },
    {
      num: "4.)",
      text: "Payment will be accepted in COD, CASH, and Dated check or thru Bank Transfer payable to ",
      bold: "TECHFINITY SECURITY DEVICE TRADING",
      rest: ".",
    },
    {
      num: "5.)",
      text: "FREE DELIVERY for purchases above Php10,000 within Metro Manila.",
    },
    {
      num: "6.)",
      text: "Cancelled orders are subject to a cancellation charge of Fifty Percent (50%).",
    },
    {
      num: "7.)",
      text: "Up to three (3) years limited warranty in service and parts will be given for main equipment from date of purchase/delivery/installation. Accessories such as power supply, adaptor, magnetic lock, exit button have six (6) months warranty. The warranty covers the parts cause of factory defect not including upgrades and relocation. Unauthorized repair will void its warranty. Warranty claims is strictly carry in basis, client must send the item to our office for repair. For those with installation, we will do the onsite checking and troubleshooting for free within metro manila, for outside metro manila client will pay for the mobilization/demobilization cost.",
    },
    {
      num: "8.)",
      text: "Should client will require service unit while defective device is under repair; client must pay a service unit fee but depends on the availability of the service unit.",
    },
    {
      num: "9.)",
      text: "After sales support is from Monday – Friday 8:30 – 5:30 pm",
    },
  ];

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
