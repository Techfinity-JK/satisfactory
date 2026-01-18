// Type definitions
interface Product {
  id: string;
  brand: string;
  name: string;
  category: string;
  description?: string;
  capacity: {
    fingerprint: number;
    card: number;
    face: number;
    transaction: number;
  };
  download: {
    lan: boolean;
    usb: boolean;
    wifi: boolean;
  };
  price: {
    fakeAmount: number;
    amount: number;
    currency: "PHP" | "USD" | "EUR";
  };
  withADMS: boolean;
  warranty?: {
    duration: number;
    unit: "months" | "years";
  };
  isActive: boolean;
}

interface SelectedItem {
  product: Product;
  quantity: number;
}

interface QuotationData {
  quoteRefNo: string;
  companyName: string;
  companyAddress?: string;
  contactPerson?: string;
  contactNumber?: string;
  emailAddress?: string;
  items: {
    productId: string;
    name: string;
    brand: string;
    description?: string;
    specs?: string[];
    quantity: number;
    unit: string;
    unitPrice: number;
    promoPrice: number;
    totalPrice: number;
  }[];
  notes?: string;
}

// Products data (embedded from products.ts)
const products: Product[] = [
  {
    id: "zk-lx50",
    brand: "ZKTECO",
    name: "LX50",
    category: "Biometrics",
    description: "Dimension: 106x60x42mm",
    capacity: { fingerprint: 500, card: 0, face: 0, transaction: 50000 },
    download: { lan: false, usb: true, wifi: false },
    price: { fakeAmount: 10900, amount: 5700, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 18, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-tx628",
    brand: "ZKTECO",
    name: "TX628",
    category: "Biometrics",
    description: "Dimension: 180x135x37mm",
    capacity: { fingerprint: 3200, card: 3200, face: 0, transaction: 120000 },
    download: { lan: true, usb: true, wifi: false },
    price: { fakeAmount: 14900, amount: 8900, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-sc700",
    brand: "ZKTECO",
    name: "SC700",
    category: "Biometrics",
    description: "Dimension: 106x104x36mm",
    capacity: { fingerprint: 0, card: 30000, face: 0, transaction: 100000 },
    download: { lan: true, usb: true, wifi: false },
    price: { fakeAmount: 13500, amount: 9500, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 18, unit: "months" },
    isActive: true,
  },
  {
    id: "gt-t8",
    brand: "GRANDING",
    name: "T8",
    category: "Biometrics",
    description: "Dimension: 108x140x30mm",
    capacity: { fingerprint: 3000, card: 3000, face: 0, transaction: 100000 },
    download: { lan: true, usb: true, wifi: false },
    price: { fakeAmount: 15900, amount: 11200, currency: "PHP" },
    withADMS: true,
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "gt-fa1000",
    brand: "GRANDING",
    name: "FA1000",
    category: "Biometrics",
    description: "to do",
    capacity: { fingerprint: 0, card: 1000, face: 500, transaction: 150000 },
    download: { lan: true, usb: false, wifi: true },
    price: { fakeAmount: 13200, amount: 9200, currency: "PHP" },
    withADMS: true,
    warranty: { duration: 18, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-bk100",
    brand: "ZKTECO",
    name: "BK100",
    category: "Biometrics",
    description: "161x93x152mm",
    capacity: { fingerprint: 3000, card: 0, face: 800, transaction: 250000 },
    download: { lan: true, usb: true, wifi: false },
    price: { fakeAmount: 16500, amount: 9200, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-mb10",
    brand: "ZKTECO",
    name: "MB10",
    category: "Biometrics",
    description: "to do",
    capacity: { fingerprint: 500, card: 0, face: 100, transaction: 50000 },
    download: { lan: true, usb: true, wifi: true },
    price: { fakeAmount: 17900, amount: 10900, currency: "PHP" },
    withADMS: true,
    warranty: { duration: 18, unit: "months" },
    isActive: true,
  },
  {
    id: "gt-fa110",
    brand: "GRANDING",
    name: "FA110",
    category: "Biometrics",
    description: "161x93x152mm",
    capacity: { fingerprint: 500, card: 500, face: 500, transaction: 50000 },
    download: { lan: true, usb: true, wifi: true },
    price: { fakeAmount: 17900, amount: 9700, currency: "PHP" },
    withADMS: true,
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-f22",
    brand: "ZKTECO",
    name: "F22",
    category: "Biometrics",
    description: "78x158.5x41mm",
    capacity: { fingerprint: 3000, card: 5000, face: 0, transaction: 50000 },
    download: { lan: true, usb: true, wifi: true },
    price: { fakeAmount: 19800, amount: 14700, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-sf200",
    brand: "ZKTECO",
    name: "SF200",
    category: "Biometrics",
    description: "to do",
    capacity: { fingerprint: 2000, card: 5000, face: 0, transaction: 100000 },
    download: { lan: true, usb: false, wifi: true },
    price: { fakeAmount: 15700, amount: 11500, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-iface3",
    brand: "ZKTECO",
    name: "IFACE3",
    category: "Biometrics",
    description: "to do",
    capacity: { fingerprint: 4000, card: 5000, face: 1500, transaction: 100000 },
    download: { lan: true, usb: true, wifi: false },
    price: { fakeAmount: 19400, amount: 14000, currency: "PHP" },
    withADMS: true,
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-mb460",
    brand: "ZKTECO",
    name: "MB460",
    category: "Biometrics",
    description: "to do",
    capacity: { fingerprint: 2000, card: 5000, face: 1500, transaction: 100000 },
    download: { lan: true, usb: true, wifi: false },
    price: { fakeAmount: 21200, amount: 14800, currency: "PHP" },
    withADMS: true,
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "gt-fa210",
    brand: "GRANDING",
    name: "FA210",
    category: "Biometrics",
    description: "to do",
    capacity: { fingerprint: 2000, card: 2000, face: 1500, transaction: 100000 },
    download: { lan: true, usb: true, wifi: false },
    price: { fakeAmount: 22500, amount: 14800, currency: "PHP" },
    withADMS: true,
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "gt-fa210w",
    brand: "GRANDING",
    name: "FA210w",
    category: "Biometrics",
    description: "to do",
    capacity: { fingerprint: 2000, card: 2000, face: 1500, transaction: 100000 },
    download: { lan: true, usb: true, wifi: true },
    price: { fakeAmount: 24000, amount: 17000, currency: "PHP" },
    withADMS: true,
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-xface100",
    brand: "ZKTECO",
    name: "XFACE100",
    category: "Biometrics",
    description: "to do",
    capacity: { fingerprint: 2000, card: 0, face: 1500, transaction: 100000 },
    download: { lan: true, usb: true, wifi: true },
    price: { fakeAmount: 27000, amount: 18900, currency: "PHP" },
    withADMS: true,
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-uface800",
    brand: "ZKTECO",
    name: "UFACE800",
    category: "Biometrics",
    description: "194x156x86mm",
    capacity: { fingerprint: 4000, card: 0, face: 3000, transaction: 120000 },
    download: { lan: true, usb: true, wifi: true },
    price: { fakeAmount: 32900, amount: 22800, currency: "PHP" },
    withADMS: true,
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-speedfacev3l",
    brand: "ZKTECO",
    name: "SPEEDFACE V3L",
    category: "Biometrics",
    description: "185x59x20mm",
    capacity: { fingerprint: 3000, card: 3000, face: 3000, transaction: 200000 },
    download: { lan: true, usb: false, wifi: true },
    price: { fakeAmount: 18500, amount: 12900, currency: "PHP" },
    withADMS: true,
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
];

// State
const selectedItems: Map<string, SelectedItem> = new Map();

// DOM Elements
const productListEl = document.getElementById("productList") as HTMLDivElement;
const selectedItemsBodyEl = document.getElementById("selectedItemsBody") as HTMLTableSectionElement;
const grandTotalEl = document.getElementById("grandTotal") as HTMLTableCellElement;
const quoteRefNoEl = document.getElementById("quoteRefNo") as HTMLInputElement;
const companyNameEl = document.getElementById("companyName") as HTMLInputElement;
const companyAddressEl = document.getElementById("companyAddress") as HTMLTextAreaElement;
const contactPersonEl = document.getElementById("contactPerson") as HTMLInputElement;
const contactNumberEl = document.getElementById("contactNumber") as HTMLInputElement;
const emailAddressEl = document.getElementById("emailAddress") as HTMLInputElement;
const notesEl = document.getElementById("notes") as HTMLTextAreaElement;
const generateBtnEl = document.getElementById("generateBtn") as HTMLButtonElement;
const clearBtnEl = document.getElementById("clearBtn") as HTMLButtonElement;

// Render products
function renderProducts(): void {
  productListEl.innerHTML = "";

  const activeProducts = products.filter((p) => p.isActive);

  activeProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.productId = product.id;

    if (selectedItems.has(product.id)) {
      card.classList.add("selected");
    }

    card.innerHTML = `
      <div class="brand">${product.brand}</div>
      <div class="name">${product.name}</div>
      <div class="original-price">PHP ${product.price.fakeAmount.toLocaleString()}</div>
      <div class="price">PHP ${product.price.amount.toLocaleString()}</div>
    `;

    card.addEventListener("click", () => toggleProduct(product));
    productListEl.appendChild(card);
  });
}

// Toggle product selection
function toggleProduct(product: Product): void {
  if (selectedItems.has(product.id)) {
    selectedItems.delete(product.id);
  } else {
    selectedItems.set(product.id, { product, quantity: 1 });
  }
  renderProducts();
  renderSelectedItems();
}

// Render selected items table
function renderSelectedItems(): void {
  selectedItemsBodyEl.innerHTML = "";

  selectedItems.forEach((item, productId) => {
    const row = document.createElement("tr");
    const total = item.product.price.amount * item.quantity;

    row.innerHTML = `
      <td>${item.product.brand}</td>
      <td>${item.product.name}</td>
      <td>PHP ${item.product.price.amount.toLocaleString()}</td>
      <td>
        <input type="number" class="qty-input" value="${item.quantity}" min="1" data-product-id="${productId}">
      </td>
      <td>PHP ${total.toLocaleString()}</td>
      <td>
        <button class="btn-remove" data-product-id="${productId}">Remove</button>
      </td>
    `;

    selectedItemsBodyEl.appendChild(row);
  });

  // Add event listeners for quantity inputs
  document.querySelectorAll(".qty-input").forEach((input) => {
    input.addEventListener("change", (e) => {
      const target = e.target as HTMLInputElement;
      const productId = target.dataset.productId!;
      const newQty = parseInt(target.value, 10);

      if (newQty > 0 && selectedItems.has(productId)) {
        selectedItems.get(productId)!.quantity = newQty;
        renderSelectedItems();
      }
    });
  });

  // Add event listeners for remove buttons
  document.querySelectorAll(".btn-remove").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const target = e.target as HTMLButtonElement;
      const productId = target.dataset.productId!;
      selectedItems.delete(productId);
      renderProducts();
      renderSelectedItems();
    });
  });

  updateGrandTotal();
}

// Update grand total
function updateGrandTotal(): void {
  let total = 0;
  selectedItems.forEach((item) => {
    total += item.product.price.amount * item.quantity;
  });
  grandTotalEl.textContent = `PHP ${total.toLocaleString()}`;
}

// Build product specs from product data
function buildProductSpecs(product: Product): string[] {
  const specs: string[] = [];

  // Capacity specs
  if (product.capacity.face > 0) {
    specs.push(`${product.capacity.face.toLocaleString()} Face Capacity`);
  }
  if (product.capacity.fingerprint > 0) {
    specs.push(`${product.capacity.fingerprint.toLocaleString()} Fingerprint Capacity`);
  }
  if (product.capacity.card > 0) {
    specs.push(`${product.capacity.card.toLocaleString()} Card Capacity`);
  }
  if (product.capacity.transaction > 0) {
    specs.push(`${product.capacity.transaction.toLocaleString()} Transaction Logs`);
  }

  // Download/connectivity options
  const connectivity: string[] = [];
  if (product.download.lan) connectivity.push("LAN");
  if (product.download.usb) connectivity.push("USB");
  if (product.download.wifi) connectivity.push("WiFi");
  if (connectivity.length > 0) {
    specs.push(`Connectivity: ${connectivity.join(" / ")}`);
  }

  // ADMS
  if (product.withADMS) {
    specs.push("ADMS Supported");
  }

  // Warranty
  if (product.warranty) {
    specs.push(`${product.warranty.duration} ${product.warranty.unit.toUpperCase()} WARRANTY`);
  }

  return specs;
}

// Generate quotation
async function generateQuotation(): Promise<void> {
  const quoteRefNo = quoteRefNoEl.value.trim();
  const companyName = companyNameEl.value.trim();

  if (!quoteRefNo) {
    alert("Please enter Quote Ref No");
    return;
  }

  if (!companyName) {
    alert("Please enter company name");
    return;
  }

  if (selectedItems.size === 0) {
    alert("Please select at least one product");
    return;
  }

  const items = Array.from(selectedItems.values()).map((item) => ({
    productId: item.product.id,
    name: item.product.name,
    brand: item.product.brand,
    description: item.product.category,
    specs: buildProductSpecs(item.product),
    quantity: item.quantity,
    unit: "pc",
    unitPrice: item.product.price.fakeAmount,
    promoPrice: item.product.price.amount,
    totalPrice: item.product.price.amount * item.quantity,
  }));

  const data: QuotationData = {
    quoteRefNo,
    companyName,
    companyAddress: companyAddressEl.value.trim() || undefined,
    contactPerson: contactPersonEl.value.trim() || undefined,
    contactNumber: contactNumberEl.value.trim() || undefined,
    emailAddress: emailAddressEl.value.trim() || undefined,
    items,
    notes: notesEl.value.trim() || undefined,
  };

  generateBtnEl.disabled = true;
  generateBtnEl.textContent = "Generating...";

  try {
    const result = await window.electronAPI.generateQuotation(data);

    if (result.success) {
      alert(`Quotation saved to: ${result.filePath}`);
    } else if (result.cancelled) {
      // User cancelled, do nothing
    } else {
      alert(`Error generating quotation: ${result.error}`);
    }
  } catch (error) {
    alert(`Error: ${error}`);
  } finally {
    generateBtnEl.disabled = false;
    generateBtnEl.textContent = "Generate Quotation";
  }
}

// Clear all
function clearAll(): void {
  selectedItems.clear();
  quoteRefNoEl.value = "";
  companyNameEl.value = "";
  companyAddressEl.value = "";
  contactPersonEl.value = "";
  contactNumberEl.value = "";
  emailAddressEl.value = "";
  notesEl.value = "";
  renderProducts();
  renderSelectedItems();
}

// Event listeners
generateBtnEl.addEventListener("click", generateQuotation);
clearBtnEl.addEventListener("click", clearAll);

// Initial render
renderProducts();
renderSelectedItems();
