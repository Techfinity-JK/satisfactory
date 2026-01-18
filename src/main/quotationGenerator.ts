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

// Dark teal/blue color from the template
const HEADER_COLOR = "1F4E79";
const BORDER_COLOR = "1F4E79";

// Font settings
const FONT_FAMILY = "Century Gothic";
const FONT_SIZE = 18; // 9pt = 18 half-points

export interface QuotationItem {
  productId: string;
  name: string;
  brand: string;
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

export interface QuotationData {
  quoteRefNo: string;
  companyName: string;
  companyAddress?: string;
  contactPerson?: string;
  contactNumber?: string;
  emailAddress?: string;
  brochureOnly?: boolean;
  items: QuotationItem[];
  services?: ServiceItem[];
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
          ...createProductSections(data.items, data.brochureOnly, data.services),

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
          ...createTermsAndConditions(),

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

function createProductSections(items: QuotationItem[], brochureOnly?: boolean, services?: ServiceItem[]): (Paragraph | Table)[] {
  const sections: (Paragraph | Table)[] = [];

  items.forEach((item) => {
    // Product header bullet point
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `•    ${item.brand} - ${item.name}${item.description ? ` - ${item.description}` : ""}`,
            font: FONT_FAMILY,
            bold: true,
            size: FONT_SIZE,
          }),
        ],
        spacing: { before: 200, after: 120 },
      })
    );

    // Product table
    sections.push(createProductTable(item));
  });

  // Equipment cost and services (only show if not brochure only mode)
  if (!brochureOnly) {
    const equipmentCost = items.reduce((sum, item) => sum + item.totalPrice, 0);
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `EQUIPMENT COST = ₱${equipmentCost.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
            font: FONT_FAMILY,
            bold: true,
            size: 20,
          }),
        ],
        alignment: AlignmentType.RIGHT,
        spacing: { before: 300, after: 100 },
      })
    );

    // Add services if any
    if (services && services.length > 0) {
      services.forEach((service) => {
        sections.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `${service.name} = ₱${service.price.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
                font: FONT_FAMILY,
                bold: true,
                size: 20,
              }),
            ],
            alignment: AlignmentType.RIGHT,
            spacing: { after: 100 },
          })
        );
      });

      // Grand total (equipment + services)
      const servicesTotal = services.reduce((sum, s) => sum + s.price, 0);
      const grandTotal = equipmentCost + servicesTotal;
      sections.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `GRAND TOTAL = ₱${grandTotal.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
              font: FONT_FAMILY,
              bold: true,
              size: 22,
            }),
          ],
          alignment: AlignmentType.RIGHT,
          spacing: { before: 100, after: 200 },
        })
      );
    }
  }

  return sections;
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
        verticalAlign: VerticalAlign.TOP,
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

function createTermsAndConditions(): (Paragraph | Table)[] {
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
      highlight: "VAT Exclusive",
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
