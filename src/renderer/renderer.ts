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
  customPrice?: number;
}

interface Service {
  id: string;
  name: string;
  price: number;
}

interface SelectedService {
  service: Service;
  customPrice?: number;
}

interface QuotationData {
  quoteRefNo: string;
  companyName: string;
  companyAddress?: string;
  contactPerson?: string;
  contactNumber?: string;
  emailAddress?: string;
  brochureOnly?: boolean;
  vatInclusive?: boolean;
  items: {
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
  }[];
  services?: {
    name: string;
    price: number;
  }[];
  notes?: string;
}

// Map product names to icon filenames
const productIconMap: { [key: string]: string } = {
  "LX50": "lx50.png",
  "TX628": "tx628.png",
  "SC700": "sc700.png",
  "T8": "t8.png",
  "FA1000": "fa1000.png",
  "BK100": "bk100.png",
  "MB10": "mb10.png",
  "FA110": "fa110.png",
  "F22": "f22.png",
  "SF200": "sf200.png",
  "IFACE3": "iface3.png",
  "MB460": "mb460.png",
  "FA210": "fa210.png",
  "FA210w": "fa210.png",
  "XFACE100": "xface100.png",
  "UFACE800": "uface800.png",
  "SPEEDFACEV3L": "speedfacev3l.png",
};

function getProductImagePath(productName: string): string | undefined {
  const iconFile = productIconMap[productName];
  if (iconFile) {
    // Use __dirname equivalent for renderer - path relative to app
    return `src/assets/icons/${iconFile}`;
  }
  return undefined;
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
    name: "SPEEDFACEV3L",
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

// Services data
const services: Service[] = [
  { id: "mounting", name: "Biometrics Mounting", price: 1500 },
  { id: "orientation", name: "On-Site User Orientation", price: 2500 },
  { id: "installation", name: "Installation Cost", price: 0 },
  { id: "delivery", name: "Delivery Fee", price: 500 },
  { id: "others", name: "Others", price: 0 },
];

// State
const selectedItems: Map<string, SelectedItem> = new Map();
const selectedServicesMap: Map<string, SelectedService> = new Map();

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
const brochureOnlyEl = document.getElementById("brochureOnly") as HTMLInputElement;
const vatInclusiveEl = document.getElementById("vatInclusive") as HTMLInputElement;
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

  // Render product items
  selectedItems.forEach((item, productId) => {
    const unitPrice = item.customPrice !== undefined ? item.customPrice : item.product.price.amount;
    const total = unitPrice * item.quantity;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.product.brand}</td>
      <td>${item.product.name}</td>
      <td>
        <input type="number" class="price-input" value="${unitPrice}" min="0" data-product-id="${productId}">
      </td>
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

  // Render service items
  selectedServicesMap.forEach((selectedService, serviceId) => {
    const unitPrice = selectedService.customPrice !== undefined ? selectedService.customPrice : selectedService.service.price;

    const row = document.createElement("tr");
    row.className = "service-row";
    row.innerHTML = `
      <td>SERVICE</td>
      <td>${selectedService.service.name}</td>
      <td>
        <input type="number" class="price-input service-price-input" value="${unitPrice}" min="0" data-service-id="${serviceId}">
      </td>
      <td>1</td>
      <td>PHP ${unitPrice.toLocaleString()}</td>
      <td>
        <button class="btn-remove service-remove" data-service-id="${serviceId}">Remove</button>
      </td>
    `;

    selectedItemsBodyEl.appendChild(row);
  });

  // Add event listeners for product price inputs
  document.querySelectorAll(".price-input:not(.service-price-input)").forEach((input) => {
    input.addEventListener("change", (e) => {
      const target = e.target as HTMLInputElement;
      const productId = target.dataset.productId!;
      const newPrice = parseInt(target.value, 10);

      if (newPrice >= 0 && selectedItems.has(productId)) {
        const item = selectedItems.get(productId)!;
        // Only set custom price if different from default
        if (newPrice !== item.product.price.amount) {
          item.customPrice = newPrice;
        } else {
          item.customPrice = undefined;
        }
        renderSelectedItems();
      }
    });
  });

  // Add event listeners for service price inputs
  document.querySelectorAll(".service-price-input").forEach((input) => {
    input.addEventListener("change", (e) => {
      const target = e.target as HTMLInputElement;
      const serviceId = target.dataset.serviceId!;
      const newPrice = parseInt(target.value, 10);

      if (newPrice >= 0 && selectedServicesMap.has(serviceId)) {
        const selectedService = selectedServicesMap.get(serviceId)!;
        // Only set custom price if different from default
        if (newPrice !== selectedService.service.price) {
          selectedService.customPrice = newPrice;
        } else {
          selectedService.customPrice = undefined;
        }
        renderSelectedItems();
      }
    });
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

  // Add event listeners for product remove buttons
  document.querySelectorAll(".btn-remove:not(.service-remove)").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const target = e.target as HTMLButtonElement;
      const productId = target.dataset.productId!;
      selectedItems.delete(productId);
      renderProducts();
      renderSelectedItems();
    });
  });

  // Add event listeners for service remove buttons
  document.querySelectorAll(".service-remove").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const target = e.target as HTMLButtonElement;
      const serviceId = target.dataset.serviceId!;
      selectedServicesMap.delete(serviceId);
      // Update the UI card
      const serviceCard = document.querySelector(`.service-card[data-service-id="${serviceId}"]`);
      if (serviceCard) {
        serviceCard.classList.remove("selected");
      }
      renderSelectedItems();
    });
  });

  updateGrandTotal();
}

// Update grand total
function updateGrandTotal(): void {
  let subtotal = 0;
  // Sum product prices
  selectedItems.forEach((item) => {
    const unitPrice = item.customPrice !== undefined ? item.customPrice : item.product.price.amount;
    subtotal += unitPrice * item.quantity;
  });
  // Sum service prices
  selectedServicesMap.forEach((selectedService) => {
    const unitPrice = selectedService.customPrice !== undefined ? selectedService.customPrice : selectedService.service.price;
    subtotal += unitPrice;
  });

  // Calculate VAT if inclusive
  if (vatInclusiveEl.checked) {
    const vatAmount = subtotal * 0.12;
    const total = subtotal + vatAmount;
    grandTotalEl.innerHTML = `PHP ${total.toLocaleString()}<br><span class="vat-note">(VAT Inclusive)</span>`;
  } else {
    grandTotalEl.innerHTML = `PHP ${subtotal.toLocaleString()}<br><span class="vat-note vat-exclusive">(VAT Exclusive)</span>`;
  }
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

  const items = Array.from(selectedItems.values()).map((item) => {
    const promoPrice = item.customPrice !== undefined ? item.customPrice : item.product.price.amount;
    return {
      productId: item.product.id,
      name: item.product.name,
      brand: item.product.brand,
      description: item.product.category,
      specs: buildProductSpecs(item.product),
      imagePath: getProductImagePath(item.product.name),
      quantity: item.quantity,
      unit: "pc",
      unitPrice: item.product.price.fakeAmount,
      promoPrice: promoPrice,
      totalPrice: promoPrice * item.quantity,
    };
  });

  // Get selected services with custom prices
  const selectedServicesList = Array.from(selectedServicesMap.values()).map((selectedService) => {
    const price = selectedService.customPrice !== undefined ? selectedService.customPrice : selectedService.service.price;
    return { name: selectedService.service.name, price: price };
  });

  const data: QuotationData = {
    quoteRefNo,
    companyName,
    companyAddress: companyAddressEl.value.trim() || undefined,
    contactPerson: contactPersonEl.value.trim() || undefined,
    contactNumber: contactNumberEl.value.trim() || undefined,
    emailAddress: emailAddressEl.value.trim() || undefined,
    brochureOnly: brochureOnlyEl.checked,
    vatInclusive: vatInclusiveEl.checked,
    items,
    services: selectedServicesList.length > 0 ? selectedServicesList : undefined,
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
  selectedServicesMap.clear();
  quoteRefNoEl.value = "";
  companyNameEl.value = "";
  companyAddressEl.value = "";
  contactPersonEl.value = "";
  contactNumberEl.value = "";
  emailAddressEl.value = "";
  notesEl.value = "";
  brochureOnlyEl.checked = false;
  vatInclusiveEl.checked = false;
  // Clear service card selections
  document.querySelectorAll(".service-card").forEach((card) => {
    card.classList.remove("selected");
  });
  renderProducts();
  renderSelectedItems();
}

// Event listeners
generateBtnEl.addEventListener("click", generateQuotation);
clearBtnEl.addEventListener("click", clearAll);

// VAT checkbox listener - update totals when changed
vatInclusiveEl.addEventListener("change", () => {
  updateGrandTotal();
});

// Settings Modal
const settingsBtnEl = document.getElementById("settingsBtn") as HTMLButtonElement;
const settingsModalEl = document.getElementById("settingsModal") as HTMLDivElement;
const closeSettingsBtnEl = document.getElementById("closeSettingsBtn") as HTMLButtonElement;
const themeCircles = document.querySelectorAll(".theme-circle");

function openSettings(): void {
  settingsModalEl.classList.remove("hidden");
}

function closeSettings(): void {
  settingsModalEl.classList.add("hidden");
}

function setTheme(themeName: string): void {
  // Remove active class from all circles
  themeCircles.forEach((circle) => circle.classList.remove("active"));

  // Add active class to selected circle
  const selectedCircle = document.querySelector(`[data-theme="${themeName}"]`);
  if (selectedCircle) {
    selectedCircle.classList.add("active");
  }

  // Apply theme to document
  if (themeName === "night") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", themeName);
  }

  // Save preference
  localStorage.setItem("theme", themeName);
}

function loadSavedTheme(): void {
  const savedTheme = localStorage.getItem("theme") || "night";
  setTheme(savedTheme);
}

// Settings event listeners
settingsBtnEl.addEventListener("click", openSettings);
closeSettingsBtnEl.addEventListener("click", closeSettings);

// Close modal when clicking outside
settingsModalEl.addEventListener("click", (e) => {
  if (e.target === settingsModalEl) {
    closeSettings();
  }
});

// Theme selection
themeCircles.forEach((circle) => {
  circle.addEventListener("click", () => {
    const theme = (circle as HTMLElement).dataset.theme;
    if (theme) {
      setTheme(theme);
    }
  });
});

// Service card selection
const serviceCards = document.querySelectorAll(".service-card");
serviceCards.forEach((card) => {
  card.addEventListener("click", () => {
    const serviceId = (card as HTMLElement).dataset.serviceId;
    if (serviceId) {
      if (selectedServicesMap.has(serviceId)) {
        selectedServicesMap.delete(serviceId);
        card.classList.remove("selected");
      } else {
        const service = services.find((s) => s.id === serviceId);
        if (service) {
          selectedServicesMap.set(serviceId, { service });
          card.classList.add("selected");
        }
      }
      renderSelectedItems();
    }
  });
});

// Initial render
loadSavedTheme();
renderProducts();
renderSelectedItems();
