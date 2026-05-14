// Type definitions
interface Product {
  id: string;
  brand: string;
  name: string;
  category: string;
  description?: string;
  capacity?: {
    fingerprint: number;
    card: number;
    face: number;
    transaction: number;
  };
  download?: {
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
  withExtras?: boolean;
  dimension?: string;
  specifications?: {
    pixel_mp: number;
    lens_mm: number;
    ir_m: number;
    material: string;
  };
  warranty?: {
    duration: number;
    unit: "months" | "years";
  };
  isActive: boolean;
  isDeprecated?: boolean;
  uiName?: string;
}

interface SelectedItem {
  product: Product;
  quantity: number;
  customPrice?: number;
  excludeFromDiscount?: boolean;
}

interface Service {
  id: string;
  name: string;
  description?: string;
  price: number;
}

interface ItemGroup {
  id: string;
  name: string;
}

interface QuotationItem {
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
  withExtras?: boolean;
}

interface QuotationGroup {
  id: string;
  name: string;
  items: QuotationItem[];
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
  discount?: number;
  installationCost?: number;
  items: QuotationItem[];
  groups?: QuotationGroup[];
  sixColumnMode?: boolean;
  showPesoSign?: boolean;
  agent?: string;
  notes?: string;
  customNotes?: string[];
  longDateFormat?: boolean;
  onSiteOrientation?: boolean;
  optionalAccessories?: "none" | "biometrics" | "door-access" | "smart-lock";
}

interface TabSnapshot {
  quoteRefSeq: string;
  agent: string;
  companyName: string;
  companyAddress: string;
  contactPerson: string;
  contactNumber: string;
  emailAddress: string;
  brochureOnly: boolean;
  vatInclusive: boolean;
  discount: number;
  installationCost: number;
  sixColumnMode: boolean;
  optionalAccessories: string;
  customNotes: string[];
  savedItems: Array<{
    instanceId: string;
    productId: string;
    quantity: number;
    customPrice?: number;
    excludeFromDiscount?: boolean;
  }>;
  ungroupedOrder: string[];
  groups: Array<{
    id: string;
    name: string;
    itemOrder: string[];
  }>;
  productInstanceCounter: number;
  groupIdCounter: number;
  currentCategory: string;
}

interface TabState extends TabSnapshot {
  id: string;
  label: string;
}

interface SavedQuotationEntry {
  id: string;
  savedAt: string;
  quoteRefSeq: string;
  agent: string;
  companyName: string;
  companyAddress: string;
  contactPerson: string;
  contactNumber: string;
  emailAddress: string;
  brochureOnly: boolean;
  vatInclusive: boolean;
  discount: number;
  installationCost: number;
  sixColumnMode: boolean;
  optionalAccessories: string;
  customNotes: string[];
  savedItems: Array<{
    instanceId: string;
    productId: string;
    quantity: number;
    customPrice?: number;
    excludeFromDiscount?: boolean;
  }>;
  ungroupedOrder: string[];
  groups: Array<{
    id: string;
    name: string;
    itemOrder: string[];
  }>;
}

// Map product names to icon filenames
const productIconMap: { [key: string]: string } = {
  // Biometrics
  "LX50": "lx50.png",
  "TX628": "tx628.png",
  "SC700": "sc700.png",
  "T8": "t8.png",
  "FA1000": "fa1000.png",
  "BK100": "bk100.png",
  "MB10": "mb10.png",
  "FA110": "fa110.png",
  "K40": "k40.png",
  "F22": "f22.png",
  "SF200": "sf200.png",
  "SF400": "sf400.png",
  "IFACE3": "iface3.png",
  "MB460": "mb460.png",
  "FA210": "fa210.png",
  "FA210w": "fa210.png",
  "F04": "f04.png",
  "TF1700": "tf1700.png",
  "FACEPRO 4": "facepro4.png",
  "SenseFace 2A": "senseface2a.png",
  "XFACE100": "xface100.png",
  "UFACE800": "uface800.png",
  "SPEEDFACE V3L": "speedfacev3l.png",
  "SPEEDFACE V5L": "speedfacev5l.png",
  // Door Access
  "M06": "m06.png",
  "X6": "x6.png",
  "Door Exit Metal Square": "door-exit-metal-square.jpg",
  "AL-280": "al-280.png",
  "AL-280PZ/PL": "al-280-pzpl.png",
  "RPS": "rps.png",
  "EBG": "ebg.png",
  "Small Push Button": "small-push-button.png",
  "Slim Push Button": "slim-push-button.png",
  "TMD01": "tmd01.png",
  "TMD95E": "tmd95e.png",
  "LCD Intercom": "intercom.png",
  "Proximity Card": "proximity-card.png",
  "U-Bracket": "u-bracket.png",
  "Dropbolt**": "dropboltxx.png",
  "Aluminum U-Bracket**": "al-u-bracket.png",
  "Drop Bolt": "drop-bolt.png",
  "RPS w/ BB": "rps-bb.png",
  "RPS deviceless": "rps-deviceless.png",
  "FR1200": "fr1200.png",
  "K1": "k1.png",
  "MB560VL": "mb560vl.png",
  "Wireless Remote": "wireless-remote.png",
  "Emergency Key Switch": "emergency-key-switch.png",
  "Door Buzzer": "door-buzzer.png",
  "Battery": "battery.png",
  // Smart Locks
  "Card Encoder": "cardencoder.png",
  "Customizable Hotel Card": "cuztomizablehotelcard.png",
  "RFID Bracelet": "rfidbracelet.png",
  "RFID Card": "rfidcardloock.png",
  "TTLock Gateway": "ttlockgateway.png",
  "Power Saver": "powersaver.png",
  "A-01": "a01.png",
  "A-12": "a12.png",
  "B-03": "b03.png",
  "B-11": "b11.png",
  "F-11": "f11.png",
  "F-14": "f14.png",
  "F-21": "f21.png",
  "G-01": "g01.png",
  "G-04": "g04.png",
  "G-06B": "g06b.png",
  "G-11": "g11.png",
  "G-16": "g16.png",
  "G-24B": "g24b.png",
  "G-24C": "g24c.png",
  "G-28": "g28.png",
  "S-11": "s11.png",
  "S-12": "s12.png",
  "SB-45": "sb45.png",
  "SC-01": "sc01.png",
  "Mini UPS": "mini-ups.png",
};

// Returns the icon path relative to src/assets/icons/.
// CCTV (Dahua analog) icons are organized as src/assets/icons/dahua/analog/<id>.png and
// resolved by product id; everything else uses the name-keyed productIconMap.
function resolveProductIcon(product: Product): string | undefined {
  if (product.category === "CCTV" && product.id.startsWith("dahua-a-")) {
    return `dahua/analog/${product.id}.png`;
  }
  return productIconMap[product.name];
}

function getProductImagePath(product: Product): string | undefined {
  const iconFile = resolveProductIcon(product);
  if (iconFile) {
    return `src/assets/icons/${iconFile}`;
  }
  return undefined;
}

// Products: combined from src/data/products.ts (baseProducts) and src/data/cctv.ts (cctvProducts).
// Both data files are loaded as classic scripts before renderer.js — see index.html.
const products: Product[] = [...baseProducts, ...cctvProducts];

// Services data
const services: Service[] = [
  { id: "mounting", name: "Biometrics Mounting", description: "Mounting of biometric device on wall or post", price: 1500 },
  { id: "orientation", name: "On-Site User Orientation", description: "On-site training and orientation for end users on how to use the device", price: 2500 },
  { id: "delivery", name: "Delivery Fee", description: "Delivery of equipment to client location", price: 500 },
  { id: "others", name: "Others", description: "Miscellaneous service fee", price: 0 },
];

// State
const selectedItems: Map<string, SelectedItem> = new Map(); // instanceId -> SelectedItem
const itemGroups: Map<string, ItemGroup> = new Map();
const itemToGroup: Map<string, string> = new Map(); // itemId -> groupId
let groupIdCounter = 0;
let productInstanceCounter = 0; // Counter for unique product instances
let currentCategory = "Biometrics"; // Current product category tab
let hideDeprecated = false;

// Tab state
let tabs: TabState[] = [];
let activeTabId = "";
let tabCounter = 0;

// Order tracking for items within groups and ungrouped
const groupItemOrder: Map<string, string[]> = new Map(); // groupId -> itemIds in order
let ungroupedItemOrder: string[] = []; // itemIds for ungrouped items

// DOM Elements
const productSearchEl = document.getElementById("productSearch") as HTMLInputElement;
const productListEl = document.getElementById("productList") as HTMLDivElement;
const selectedItemsBodyEl = document.getElementById("selectedItemsBody") as HTMLTableSectionElement;
const equipmentCostTotalEl = document.getElementById("equipmentCostTotal") as HTMLTableCellElement;
const totalEquipmentCostRowEl = document.getElementById("totalEquipmentCostRow") as HTMLTableRowElement;
const totalEquipmentCostEl = document.getElementById("totalEquipmentCost") as HTMLTableCellElement;
const discountInputEl = document.getElementById("discountInput") as HTMLInputElement;
const installationCostInputEl = document.getElementById("installationCostInput") as HTMLInputElement;
const vatRowEl = document.getElementById("vatRow") as HTMLTableRowElement;
const vatTotalEl = document.getElementById("vatTotal") as HTMLTableCellElement;
const grandTotalEl = document.getElementById("grandTotal") as HTMLInputElement;
const quoteRefPrefixEl = document.getElementById("quoteRefPrefix") as HTMLSpanElement;
const quoteRefSepEl = document.getElementById("quoteRefSep") as HTMLSpanElement;
const quoteRefSeqEl = document.getElementById("quoteRefSeq") as HTMLInputElement;
const companyNameEl = document.getElementById("companyName") as HTMLInputElement;
const companyAddressEl = document.getElementById("companyAddress") as HTMLTextAreaElement;
const contactPersonEl = document.getElementById("contactPerson") as HTMLInputElement;
const contactNumberEl = document.getElementById("contactNumber") as HTMLInputElement;
const emailAddressEl = document.getElementById("emailAddress") as HTMLInputElement;
const addNoteBtnEl = document.getElementById("addNoteBtn") as HTMLButtonElement;
const customNotesListEl = document.getElementById("customNotesList") as HTMLDivElement;
const historyListEl = document.getElementById("historyList") as HTMLDivElement;

// Random title message
const APP_TITLE_MESSAGES = [
  "pampaganda ng benta",
  "para sa mga taong ayaw mag-manual",
  "do you have pending lalamove shipments?",
  "coffee time maybe?",
  "software developer masquerading as a sales associate",
  "faster than your calculator",
  "low stress quotation building",
  "yung i-fofollow up mo baka makalimutan mo",
  "powered by sheer willpower and caffeine",
  "any big clients lately?",
  "may tubig pa ba tayo?",
  "huwag kalimutang magpahinga, tao ka rin",
  "pag masakit ang ulo mo, meron akong biogesic, chat lang",
  "suggestions? complaints? talk to JK",
  "optimizing sales pipeline, one quote at a time",
  "another future signed conforme",
  "sales quota, protein quota",
  "fourteen plus five",
  "may the sales odds be ever in your favor",
  "door access, time attendance, and CCTV, all in one place",
  "used by the only top 5 sales associates in the company",
  "Techfinity's trial software (and developer)",
  "sadly, not compatible with MacOS",
  "great for generating quotes, not so much for generating revenue",
  "great vibes in closing this one",
  "take care of your kids, I'll take care of the quotes",
  "just a free time personal project",
  "quality tested by Cleo",
  "any hardware testing? talk to master Jay",
  "request biometrics demo'es [2]Andrey",
  "kahit sino pwede nang maging sales associate",
  "kailan ka mag reresign sa chess match natin?",
  "flying under the radar",
  "tagalog ulet para mas feel ni Shae",
  "may still contain bugs, report to JK immediately if you find any",
  "expecting new sales users soon",
  "feedback is always appreciated",
  "no refunds on bad prices",
  "your 99.9% antiseptic",
  "3rd floor hopia time?",
  "[1]bleauming, just a made up word from bleau",
  "don't forget to rename IQ or FQ",
  "goodluck replicating this, I don't even know how I did it",
  "phlegmatic melancholic, non alcoholic",
  "my gift to future sales associates",
  "ASAP daw sabi ni Shae",
  "pending application, this application? or something else...",
  "under surveillance, literally",
  "may stock pa ba tayo niyan?",
  "may nakaipit ka pa bang benta?",
  "HRIS development soon",
  "check the time, baka overtime na",
  "wish ma'am Jhel could see this",
  "ano ba ako sayo Boss Epi?",
  "minumulto na ako ng damdamin ko",
  "gusto ko happy ka",
  "observe everything, see everything, but say nothing, most of the time.",
  "fast results, minimal effort",
  "just you using this tool puts a smile on my face :)",
  "100 custom messages in the code, can you find them all?",
  "[4] sales associates remain",
  "a friendly reminder to update your weekly reports",
  "this will not last forever, but hopefully it will last a long time",
  "pabili daw ng extra rice sabi ni Jay",
  "i do my best to keep my promises, but this is a free tool so no promises really",
  "im fine really",
  "im good",
  "make sure to double check lahat ha",
  "congrats, you found the easter egg message",
  "Hanabi Sanjo (花火参上), means Hanabi has arrived",
  "frozen like ice, but i hope im still nice",
  "100% respectful of your boundaries",
  "[3], [1] + [2]",
  "i'll support you, just like how this app will support you in generating quotations",
  "_ ____ ______ __ ____",
  "if you can read this, you deserve a break",
  "tagal na nating di nakapag mcdo",
  "close to quota already? The future is [3]shining for you then!",
  "日本語が上手になりたい"

];
const randomMsg = APP_TITLE_MESSAGES[Math.floor(Math.random() * APP_TITLE_MESSAGES.length)];
document.title = `Lraxious' Quotation Generator v1.6 - ${randomMsg}`;

// Product detail popup
const productDetailPopup = document.getElementById("productDetailPopup") as HTMLDivElement;
const pdpIcon = document.getElementById("pdpIcon") as HTMLImageElement;
const pdpBrand = document.getElementById("pdpBrand") as HTMLDivElement;
const pdpName = document.getElementById("pdpName") as HTMLDivElement;
const pdpFakePrice = document.getElementById("pdpFakePrice") as HTMLDivElement;
const pdpPrice = document.getElementById("pdpPrice") as HTMLDivElement;
const pdpDesc = document.getElementById("pdpDesc") as HTMLDivElement;
const pdpMeta = document.getElementById("pdpMeta") as HTMLDivElement;

let pdpHoverTimer: ReturnType<typeof setTimeout> | null = null;
let pdpFadeTimer: ReturnType<typeof setTimeout> | null = null;

function showProductDetailPopup(product: Product): void {
  const iconFile = resolveProductIcon(product);
  if (iconFile) {
    pdpIcon.src = `../../src/assets/icons/${iconFile}`;
    pdpIcon.classList.remove("hidden");
  } else {
    pdpIcon.classList.add("hidden");
  }
  pdpBrand.textContent = product.brand;
  pdpName.textContent = product.uiName ?? product.name;
  pdpFakePrice.textContent = `PHP ${product.price.fakeAmount.toLocaleString()}`;
  pdpPrice.textContent = `PHP ${product.price.amount.toLocaleString()}`;
  pdpDesc.textContent = product.description ?? "";

  const tags: string[] = [];
  if (product.warranty && product.warranty.duration > 0) {
    tags.push(`${product.warranty.duration} ${product.warranty.unit} warranty`);
  }
  if (product.download?.lan) tags.push("LAN");
  if (product.download?.wifi) tags.push("WiFi");
  if (product.download?.usb) tags.push("USB");
  if (product.withADMS) tags.push("ADMS");
  if (product.dimension && product.dimension !== "WxHxDmm") tags.push(product.dimension);
  pdpMeta.innerHTML = tags.map((t) => `<span class="pdp-tag">${t}</span>`).join("");

  productDetailPopup.classList.remove("hidden", "fading-out");
}

function hideProductDetailPopup(): void {
  productDetailPopup.classList.add("fading-out");
  if (pdpFadeTimer) clearTimeout(pdpFadeTimer);
  pdpFadeTimer = setTimeout(() => {
    productDetailPopup.classList.add("hidden");
    productDetailPopup.classList.remove("fading-out");
  }, 200);
}

function attachProductCardHover(card: HTMLElement, product: Product): void {
  card.addEventListener("mouseenter", () => {
    if (pdpHoverTimer) clearTimeout(pdpHoverTimer);
    pdpHoverTimer = setTimeout(() => showProductDetailPopup(product), 800);
  });
  card.addEventListener("mouseleave", () => {
    if (pdpHoverTimer) { clearTimeout(pdpHoverTimer); pdpHoverTimer = null; }
    hideProductDetailPopup();
  });
}

function getCustomNotes(): string[] {
  return Array.from(customNotesListEl.querySelectorAll<HTMLInputElement>(".custom-note-input"))
    .map((input) => input.value.trim())
    .filter((v) => v.length > 0);
}

function renderCustomNotes(): void {
  const inputs = customNotesListEl.querySelectorAll<HTMLInputElement>(".custom-note-input");
  inputs.forEach((input, i) => {
    const row = input.closest(".custom-note-row");
    if (row) {
      const numEl = row.querySelector(".custom-note-num");
      if (numEl) numEl.textContent = `${i + 1}.`;
    }
  });
}

function addCustomNote(value = ""): void {
  const count = customNotesListEl.querySelectorAll(".custom-note-row").length;
  const row = document.createElement("div");
  row.className = "custom-note-row";
  row.innerHTML = `
    <span class="custom-note-num">${count + 1}.</span>
    <input type="text" class="custom-note-input" placeholder="Enter note text..." value="${value.replace(/"/g, "&quot;")}">
    <button type="button" class="btn-remove-note" title="Remove note">&#x2715;</button>
  `;
  row.querySelector(".btn-remove-note")!.addEventListener("click", () => {
    row.remove();
    renderCustomNotes();
  });
  customNotesListEl.appendChild(row);
}

addNoteBtnEl.addEventListener("click", () => addCustomNote());
const brochureOnlyEl = document.getElementById("brochureOnly") as HTMLInputElement;
const vatInclusiveEl = document.getElementById("vatInclusive") as HTMLInputElement;
const generateBtnEl = document.getElementById("generateBtn") as HTMLButtonElement;
const clearBtnEl = document.getElementById("clearBtn") as HTMLButtonElement;
const sixColumnModeEl = document.getElementById("sixColumnMode") as HTMLInputElement;
const optionalAccessoriesEl = document.getElementById("optionalAccessories") as HTMLSelectElement;
const showPesoSignEl = document.getElementById("showPesoSign") as HTMLInputElement;
const longDateFormatEl = document.getElementById("longDateFormat") as HTMLInputElement;
const agentSelectEl = document.getElementById("agentSelect") as HTMLSelectElement;

const AGENT_CODES: Record<string, string> = {
  jk: "JK",
  shae: "S",
  jhel: "J",
  cle: "C",
};

function getQuoteRefPrefix(): string {
  const year = new Date().getFullYear();
  const code = AGENT_CODES[agentSelectEl.value] ?? agentSelectEl.value.toUpperCase();
  return `${year}-${code}`;
}

function updateQuoteRefPrefix(): void {
  const prefix = getQuoteRefPrefix();
  quoteRefPrefixEl.textContent = prefix;
  const hasSeq = quoteRefSeqEl.value.trim() !== "";
  quoteRefSepEl.classList.toggle("hidden", !hasSeq);
}

// Render products
function renderProducts(): void {
  productListEl.innerHTML = "";

  const searchTerm = productSearchEl.value.toLowerCase().trim();
  const activeProducts = products.filter((p) => {
    if (!p.isActive || p.category !== currentCategory) return false;
    if (!searchTerm) return true;
    return p.name.toLowerCase().includes(searchTerm) || p.brand.toLowerCase().includes(searchTerm) || (p.uiName?.toLowerCase().includes(searchTerm) ?? false);
  });

  activeProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.productId = product.id;
    if (product.isDeprecated) card.dataset.deprecated = "true";

    // Count how many instances of this product are selected
    const instanceCount = Array.from(selectedItems.values()).filter(
      (item) => item.product.id === product.id
    ).length;

    const iconFile = resolveProductIcon(product);
    const iconHtml = iconFile
      ? `<img class="product-card-icon" src="../../src/assets/icons/${iconFile}" alt="${product.name}">`
      : '';
    const deprecatedHtml = product.isDeprecated
      ? `<div class="deprecated-badge">&#9888;<span class="deprecated-tooltip">Item only available on special orders</span></div>`
      : '';

    card.innerHTML = `
      ${deprecatedHtml}
      <div class="product-card-top">
        <div class="product-card-info">
          <div class="brand">${product.brand}</div>
          <div class="name">${product.uiName ?? product.name}</div>
        </div>
        ${iconHtml}
      </div>
      <div class="original-price">PHP ${product.price.fakeAmount.toLocaleString()}</div>
      <div class="price">PHP ${product.price.amount.toLocaleString()}</div>
      ${instanceCount > 0 ? `<div class="instance-badge">${instanceCount} added</div>` : '<div class="add-hint">Click to add</div>'}
    `;

    card.addEventListener("click", () => addProduct(product));
    attachProductCardHover(card, product);
    productListEl.appendChild(card);
  });

  // If filter is active, instantly hide deprecated cards (no animation — they're freshly rendered)
  if (hideDeprecated) {
    productListEl.querySelectorAll<HTMLElement>("[data-deprecated='true']").forEach((card) => {
      card.classList.add("product-card--hidden");
    });
  }
}

// Switch product category tab
function switchCategory(category: string): void {
  currentCategory = category;
  productSearchEl.value = "";

  // Update tab active states
  document.querySelectorAll(".product-tab").forEach((tab) => {
    const tabCategory = (tab as HTMLElement).dataset.category;
    if (tabCategory === "biometrics" && category === "Biometrics") {
      tab.classList.add("active");
    } else if (tabCategory === "door-access" && category === "Door Access") {
      tab.classList.add("active");
    } else if (tabCategory === "cctv" && category === "CCTV") {
      tab.classList.add("active");
    } else if (tabCategory === "utime" && category === "UTIME") {
      tab.classList.add("active");
    } else if (tabCategory === "virtual-server" && category === "Virtual Server") {
      tab.classList.add("active");
    } else if (tabCategory === "smart-locks" && category === "Smart Locks") {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  renderProducts();
}

// Add a product instance (can add same product multiple times)
function addProduct(product: Product): void {
  const instanceId = `product-${++productInstanceCounter}`;
  selectedItems.set(instanceId, { product, quantity: 1 });
  ungroupedItemOrder.push(instanceId);
  renderProducts();
  renderSelectedItems();
}

// Add a service instance as a selectable item
function addService(service: Service): void {
  const instanceId = `product-${++productInstanceCounter}`;
  const asProduct: Product = {
    id: service.id,
    brand: "Service",
    name: service.name,
    category: "Service",
    description: service.description,
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: service.price, amount: service.price, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  };
  selectedItems.set(instanceId, { product: asProduct, quantity: 1, excludeFromDiscount: true });
  ungroupedItemOrder.push(instanceId);
  renderServices();
  renderSelectedItems();
}

// Update service card badges to show how many instances are added
function renderServices(): void {
  services.forEach((service) => {
    const card = document.querySelector(`.service-card[data-service-id="${service.id}"]`) as HTMLElement | null;
    if (!card) return;
    const count = Array.from(selectedItems.values()).filter((item) => item.product.id === service.id).length;
    let badge = card.querySelector(".instance-badge, .add-hint") as HTMLElement | null;
    if (!badge) {
      badge = document.createElement("div");
      card.appendChild(badge);
    }
    if (count > 0) {
      badge.className = "instance-badge";
      badge.textContent = `${count} added`;
    } else {
      badge.className = "add-hint";
      badge.textContent = "";
    }
  });
}

// Drag handle SVG icon (6 dots)
const dragHandleSvg = `<svg viewBox="0 0 16 16" fill="currentColor">
  <circle cx="5" cy="3" r="1.5"/>
  <circle cx="11" cy="3" r="1.5"/>
  <circle cx="5" cy="8" r="1.5"/>
  <circle cx="11" cy="8" r="1.5"/>
  <circle cx="5" cy="13" r="1.5"/>
  <circle cx="11" cy="13" r="1.5"/>
</svg>`;

// Track drag state
let draggedRow: HTMLTableRowElement | null = null;
let draggedItemType: "product" | "service" | null = null;
let draggedItemId: string | null = null;
let draggedFromGroup: string | null = null;

// Group management functions
function createGroup(name: string): string {
  const id = `group-${++groupIdCounter}`;
  itemGroups.set(id, { id, name });
  groupItemOrder.set(id, []);
  return id;
}

function deleteGroup(groupId: string): void {
  const itemsInGroup = groupItemOrder.get(groupId) || [];
  // Move items back to ungrouped
  itemsInGroup.forEach((itemId) => {
    itemToGroup.delete(itemId);
    ungroupedItemOrder.push(itemId);
  });
  groupItemOrder.delete(groupId);
  itemGroups.delete(groupId);
}

function addItemToGroup(itemId: string, groupId: string): void {
  const currentGroup = itemToGroup.get(itemId);

  // Remove from current location
  if (currentGroup) {
    const order = groupItemOrder.get(currentGroup);
    if (order) {
      const idx = order.indexOf(itemId);
      if (idx > -1) order.splice(idx, 1);
    }
  } else {
    const idx = ungroupedItemOrder.indexOf(itemId);
    if (idx > -1) ungroupedItemOrder.splice(idx, 1);
  }

  // Add to new group
  itemToGroup.set(itemId, groupId);
  const targetOrder = groupItemOrder.get(groupId);
  if (targetOrder && !targetOrder.includes(itemId)) {
    targetOrder.push(itemId);
  }
}

function removeItemFromGroup(itemId: string): void {
  const currentGroup = itemToGroup.get(itemId);
  if (currentGroup) {
    const order = groupItemOrder.get(currentGroup);
    if (order) {
      const idx = order.indexOf(itemId);
      if (idx > -1) order.splice(idx, 1);
    }
    itemToGroup.delete(itemId);
    ungroupedItemOrder.push(itemId);
  }
}

function getItemsInGroup(groupId: string): string[] {
  return groupItemOrder.get(groupId) || [];
}

function getUngroupedItems(): string[] {
  // Return items that are not in any group
  const allItemIds = [...selectedItems.keys()];
  return allItemIds.filter((id) => !itemToGroup.has(id));
}

// Sync ungroupedItemOrder with actual ungrouped items
function syncUngroupedOrder(): void {
  const actualUngrouped = getUngroupedItems();
  // Remove items from order that are no longer ungrouped
  ungroupedItemOrder = ungroupedItemOrder.filter((id) => actualUngrouped.includes(id));
  // Add new ungrouped items that aren't in the order
  actualUngrouped.forEach((id) => {
    if (!ungroupedItemOrder.includes(id)) {
      ungroupedItemOrder.push(id);
    }
  });
}

// Create a product row
function createProductRow(item: SelectedItem, productId: string, groupId: string | null): HTMLTableRowElement {
  const unitPrice = item.customPrice !== undefined ? item.customPrice : item.product.price.amount;
  const total = unitPrice * item.quantity;

  const row = document.createElement("tr");
  row.draggable = true;
  row.dataset.itemType = "product";
  row.dataset.itemId = productId;
  row.dataset.groupId = groupId || "";

  // Build group action buttons
  let groupActions = "";
  if (itemGroups.size > 0) {
    if (groupId) {
      groupActions = `<button class="btn-ungroup" data-item-id="${productId}" title="Remove from group">Ungroup</button>`;
    } else {
      const groupOptions = Array.from(itemGroups.values())
        .map((g) => `<option value="${g.id}">${g.name}</option>`)
        .join("");
      groupActions = `<select class="group-select" data-item-id="${productId}">
        <option value="">Add to group...</option>
        ${groupOptions}
      </select>`;
    }
  }

  row.innerHTML = `
    <td class="drag-handle" title="Drag to reorder">${dragHandleSvg}</td>
    <td class="item-icon-cell">${(() => { const icon = resolveProductIcon(item.product); return icon ? `<img class="item-icon" src="../../src/assets/icons/${icon}" alt="${item.product.uiName ?? item.product.name}">` : item.product.brand; })()}</td>
    <td>${item.product.uiName ?? item.product.name}</td>
    <td>
      <input type="number" class="price-input" value="${unitPrice}" min="0" data-product-id="${productId}">
    </td>
    <td>
      <div class="qty-control">
        <button class="qty-btn qty-minus" data-product-id="${productId}">−</button>
        <input type="number" class="qty-value" data-product-id="${productId}" value="${item.quantity}" min="1">
        <button class="qty-btn qty-plus" data-product-id="${productId}">+</button>
      </div>
    </td>
    <td>PHP ${total.toLocaleString()}</td>
    <td class="action-cell">
      ${groupActions}
      <label class="exclude-discount-label" title="Exclude from discount calculation">
        <input type="checkbox" class="exclude-discount-cb" data-product-id="${productId}" ${item.excludeFromDiscount ? "checked" : ""}>
        No disc.
      </label>
      <button class="btn-remove" data-product-id="${productId}">Remove</button>
    </td>
  `;

  return row;
}


// Create a group header row
function createGroupHeaderRow(group: ItemGroup): HTMLTableRowElement {
  const row = document.createElement("tr");
  row.className = "group-header-row";
  row.dataset.groupId = group.id;
  row.innerHTML = `
    <td colspan="7" class="group-header-cell">
      <div class="group-header-content">
        <span class="group-icon">📁</span>
        <input type="text" class="group-name-input" value="${group.name}" data-group-id="${group.id}">
        <button class="btn-delete-group" data-group-id="${group.id}" title="Delete group">×</button>
      </div>
    </td>
  `;
  return row;
}

// Render selected items table
function renderSelectedItems(): void {
  selectedItemsBodyEl.innerHTML = "";
  syncUngroupedOrder();

  if (selectedItems.size === 0) {
    const emptyRow = document.createElement("tr");
    emptyRow.innerHTML = `<td colspan="7" class="empty-message">No items selected</td>`;
    selectedItemsBodyEl.appendChild(emptyRow);
  }

  // Render ungrouped items first
  ungroupedItemOrder.forEach((itemId) => {
    if (selectedItems.has(itemId)) {
      const item = selectedItems.get(itemId)!;
      const row = createProductRow(item, itemId, null);
      addDragEventListeners(row);
      selectedItemsBodyEl.appendChild(row);
    }
  });

  // Render each group
  itemGroups.forEach((group, groupId) => {
    // Group header
    const headerRow = createGroupHeaderRow(group);
    // Add drop listeners to group header so items can be dropped onto it
    headerRow.addEventListener("dragover", handleDragOver);
    headerRow.addEventListener("dragleave", handleDragLeave);
    headerRow.addEventListener("drop", handleDrop);
    selectedItemsBodyEl.appendChild(headerRow);

    // Group items
    const itemsInGroup = getItemsInGroup(groupId);
    itemsInGroup.forEach((itemId) => {
      if (selectedItems.has(itemId)) {
        const item = selectedItems.get(itemId)!;
        const row = createProductRow(item, itemId, groupId);
        addDragEventListeners(row);
        selectedItemsBodyEl.appendChild(row);
      }
    });
  });

  // Add event listeners for group name inputs
  document.querySelectorAll(".group-name-input").forEach((input) => {
    input.addEventListener("change", (e) => {
      const target = e.target as HTMLInputElement;
      const groupId = target.dataset.groupId!;
      const group = itemGroups.get(groupId);
      if (group) {
        group.name = target.value;
      }
    });
  });

  // Add event listeners for delete group buttons
  document.querySelectorAll(".btn-delete-group").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const target = e.target as HTMLButtonElement;
      const groupId = target.dataset.groupId!;
      deleteGroup(groupId);
      renderSelectedItems();
    });
  });

  // Add event listeners for group select dropdowns
  document.querySelectorAll(".group-select").forEach((select) => {
    select.addEventListener("change", (e) => {
      const target = e.target as HTMLSelectElement;
      const itemId = target.dataset.itemId!;
      const groupId = target.value;
      if (groupId) {
        addItemToGroup(itemId, groupId);
        renderSelectedItems();
      }
    });
  });

  // Add event listeners for ungroup buttons
  document.querySelectorAll(".btn-ungroup").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const target = e.target as HTMLButtonElement;
      const itemId = target.dataset.itemId!;
      removeItemFromGroup(itemId);
      renderSelectedItems();
    });
  });

  // Add event listeners for price inputs
  document.querySelectorAll(".price-input").forEach((input) => {
    input.addEventListener("focus", () => {
      (input as HTMLInputElement).select();
    });
    input.addEventListener("change", (e) => {
      const target = e.target as HTMLInputElement;
      const productId = target.dataset.productId!;
      const newPrice = parseInt(target.value, 10);

      if (newPrice >= 0 && selectedItems.has(productId)) {
        const item = selectedItems.get(productId)!;
        if (newPrice !== item.product.price.amount) {
          item.customPrice = newPrice;
        } else {
          item.customPrice = undefined;
        }

        // Update the service's base price so future additions use the new price
        if (item.product.category === "Service") {
          const service = services.find((s) => s.id === item.product.id);
          if (service) {
            service.price = newPrice;
            item.product.price.fakeAmount = newPrice;
            item.product.price.amount = newPrice;
            item.customPrice = undefined;
          }
        }

        renderSelectedItems();
      }
    });
  });

  // Add event listeners for quantity buttons
  document.querySelectorAll(".qty-minus").forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = (btn as HTMLElement).dataset.productId!;
      const item = selectedItems.get(productId);
      if (item && item.quantity > 1) {
        item.quantity--;
        renderSelectedItems();
      }
    });
  });

  document.querySelectorAll(".qty-plus").forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = (btn as HTMLElement).dataset.productId!;
      const item = selectedItems.get(productId);
      if (item) {
        item.quantity++;
        renderSelectedItems();
      }
    });
  });

  document.querySelectorAll<HTMLInputElement>(".qty-value").forEach((input) => {
    input.addEventListener("focus", () => input.select());
    input.addEventListener("change", () => {
      const productId = input.dataset.productId!;
      const item = selectedItems.get(productId);
      if (item) {
        const val = parseInt(input.value, 10);
        item.quantity = val >= 1 ? val : 1;
        renderSelectedItems();
      }
    });
  });

  // Add event listeners for exclude-from-discount checkboxes
  document.querySelectorAll(".exclude-discount-cb").forEach((cb) => {
    cb.addEventListener("change", (e) => {
      const target = e.target as HTMLInputElement;
      const productId = target.dataset.productId!;
      const item = selectedItems.get(productId);
      if (item) {
        item.excludeFromDiscount = target.checked;
        updateGrandTotal();
      }
    });
  });

  // Add event listeners for remove buttons
  document.querySelectorAll(".btn-remove").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const target = e.target as HTMLButtonElement;
      const productId = target.dataset.productId!;
      // Remove from group tracking
      itemToGroup.delete(productId);
      const idx = ungroupedItemOrder.indexOf(productId);
      if (idx > -1) ungroupedItemOrder.splice(idx, 1);
      // Remove from all group orders
      groupItemOrder.forEach((order) => {
        const i = order.indexOf(productId);
        if (i > -1) order.splice(i, 1);
      });
      selectedItems.delete(productId);
      renderProducts();
      renderServices();
      renderSelectedItems();
    });
  });

  updateGrandTotal();
}

// Add drag event listeners to a row
function addDragEventListeners(row: HTMLTableRowElement): void {
  row.addEventListener("dragstart", handleDragStart);
  row.addEventListener("dragend", handleDragEnd);
  row.addEventListener("dragover", handleDragOver);
  row.addEventListener("dragleave", handleDragLeave);
  row.addEventListener("drop", handleDrop);
}

function handleDragStart(e: DragEvent): void {
  const target = e.target as HTMLElement;
  const row = target.closest("tr") as HTMLTableRowElement;
  if (!row) return;

  draggedRow = row;
  draggedItemType = row.dataset.itemType as "product" | "service";
  draggedItemId = row.dataset.itemId || null;
  draggedFromGroup = row.dataset.groupId || null;

  row.classList.add("dragging");

  if (e.dataTransfer) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", row.dataset.itemId || "");
  }
}

function handleDragEnd(e: DragEvent): void {
  const target = e.target as HTMLElement;
  const row = target.closest("tr") as HTMLTableRowElement;
  if (row) {
    row.classList.remove("dragging");
  }

  // Clear all drag-over classes
  document.querySelectorAll(".drag-over, .drag-over-bottom").forEach((el) => {
    el.classList.remove("drag-over", "drag-over-bottom");
  });

  draggedRow = null;
  draggedItemType = null;
  draggedItemId = null;
  draggedFromGroup = null;
}

function handleDragOver(e: DragEvent): void {
  e.preventDefault();
  if (!e.dataTransfer) return;
  e.dataTransfer.dropEffect = "move";

  const target = e.target as HTMLElement;
  const row = target.closest("tr") as HTMLTableRowElement;
  if (!row || row === draggedRow) return;

  // Clear other drag-over classes
  document.querySelectorAll(".drag-over, .drag-over-bottom").forEach((el) => {
    if (el !== row) {
      el.classList.remove("drag-over", "drag-over-bottom");
    }
  });

  // Determine if we're above or below the middle of the row
  const rect = row.getBoundingClientRect();
  const midY = rect.top + rect.height / 2;

  if (e.clientY < midY) {
    row.classList.add("drag-over");
    row.classList.remove("drag-over-bottom");
  } else {
    row.classList.add("drag-over-bottom");
    row.classList.remove("drag-over");
  }
}

function handleDragLeave(e: DragEvent): void {
  const target = e.target as HTMLElement;
  const row = target.closest("tr") as HTMLTableRowElement;
  if (row) {
    row.classList.remove("drag-over", "drag-over-bottom");
  }
}

function handleDrop(e: DragEvent): void {
  e.preventDefault();

  const target = e.target as HTMLElement;
  const dropRow = target.closest("tr") as HTMLTableRowElement;
  if (!dropRow || !draggedRow || dropRow === draggedRow) return;

  // Check if dropping on a group header
  if (dropRow.classList.contains("group-header-row")) {
    const targetGroupId = dropRow.dataset.groupId;
    if (targetGroupId && draggedItemId) {
      // Move item to this group
      addItemToGroup(draggedItemId, targetGroupId);
      renderSelectedItems();
    }
    dropRow.classList.remove("drag-over", "drag-over-bottom");
    return;
  }

  const dropItemId = dropRow.dataset.itemId;
  const dropGroupId = dropRow.dataset.groupId || null;

  if (!dropItemId || !draggedItemId) return;

  // Determine drop position
  const rect = dropRow.getBoundingClientRect();
  const midY = rect.top + rect.height / 2;
  const insertAfter = e.clientY >= midY;

  // Reorder the items
  reorderItems(draggedItemId, draggedFromGroup, dropItemId, dropGroupId, insertAfter);

  // Clear drag-over classes
  dropRow.classList.remove("drag-over", "drag-over-bottom");
}

function reorderItems(
  fromId: string,
  fromGroupId: string | null,
  toId: string,
  toGroupId: string | null,
  insertAfter: boolean
): void {
  // Determine source and target arrays
  const fromArray = fromGroupId ? groupItemOrder.get(fromGroupId) : ungroupedItemOrder;
  const toArray = toGroupId ? groupItemOrder.get(toGroupId) : ungroupedItemOrder;

  if (!fromArray || !toArray) return;

  // Find indices
  const fromIndex = fromArray.indexOf(fromId);
  const toIndex = toArray.indexOf(toId);

  if (fromIndex === -1 || toIndex === -1) return;

  // Same group/array - simple reorder
  if (fromArray === toArray) {
    // Remove from current position
    fromArray.splice(fromIndex, 1);

    // Calculate new index
    let newIndex = toIndex;
    if (fromIndex < toIndex) {
      newIndex = insertAfter ? toIndex : toIndex - 1;
    } else {
      newIndex = insertAfter ? toIndex + 1 : toIndex;
    }

    // Insert at new position
    fromArray.splice(newIndex, 0, fromId);
  } else {
    // Moving between groups/arrays
    // Remove from source
    fromArray.splice(fromIndex, 1);

    // Update group tracking
    if (fromGroupId) {
      itemToGroup.delete(fromId);
    }
    if (toGroupId) {
      itemToGroup.set(fromId, toGroupId);
    }

    // Calculate insert position in target
    const insertIndex = insertAfter ? toIndex + 1 : toIndex;
    toArray.splice(insertIndex, 0, fromId);
  }

  // Re-render
  renderSelectedItems();
}

let currentEquipmentCost = 0;
let currentDiscountableEquipmentCost = 0;

function formatPeso(amount: number): string {
  return `PHP ${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// Update grand total
function updateGrandTotal(): void {
  // 1. Calculate Total Cost (all selected items)
  let equipmentCost = 0;
  let discountableEquipmentCost = 0;
  selectedItems.forEach((item) => {
    const unitPrice = item.customPrice !== undefined ? item.customPrice : item.product.price.amount;
    const lineTotal = unitPrice * item.quantity;
    equipmentCost += lineTotal;
    if (!item.excludeFromDiscount) {
      discountableEquipmentCost += lineTotal;
    }
  });
  currentEquipmentCost = equipmentCost;
  currentDiscountableEquipmentCost = discountableEquipmentCost;
  equipmentCostTotalEl.textContent = formatPeso(equipmentCost);

  // 2. Get discount and installation cost
  const discount = parseFloat(discountInputEl.value) || 0;
  const installationCost = parseFloat(installationCostInputEl.value) || 0;

  // 3. Total Equipment Cost (after discount) — only show when discount is applied
  const totalAfterDiscount = equipmentCost - discount;
  if (discount > 0) {
    totalEquipmentCostEl.textContent = formatPeso(totalAfterDiscount);
    totalEquipmentCostRowEl.classList.remove("hidden");
  } else {
    totalEquipmentCostRowEl.classList.add("hidden");
  }

  // 4. Calculate subtotal before VAT
  const subtotal = totalAfterDiscount + installationCost;

  // 5. Calculate VAT if inclusive
  let vatAmount = 0;
  if (vatInclusiveEl.checked) {
    vatAmount = Math.ceil(subtotal * 0.12 * 100) / 100;
    vatRowEl.classList.remove("hidden");
    void vatRowEl.offsetHeight;
    vatRowEl.classList.remove("fade-out");
    vatTotalEl.textContent = formatPeso(vatAmount);
  } else {
    vatRowEl.classList.add("fade-out");
    vatRowEl.addEventListener("transitionend", () => {
      if (!vatInclusiveEl.checked) vatRowEl.classList.add("hidden");
    }, { once: true });
  }

  // 6. Calculate Total Investment Cost
  const totalInvestment = Math.round((subtotal + vatAmount) * 100) / 100;
  grandTotalEl.value = totalInvestment.toFixed(2);
}

// Build product specs from product data
function buildProductSpecs(product: Product): string[] {
  const specs: string[] = [];

  // Capacity specs
  if (product.capacity) {
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
  }

  // Download/connectivity options
  const connectivity: string[] = [];
  if (product.download?.lan) connectivity.push("LAN");
  if (product.download?.usb) connectivity.push("USB");
  if (product.download?.wifi) connectivity.push("WiFi");
  if (connectivity.length > 0) {
    specs.push(`Connectivity: ${connectivity.join(" / ")}`);
  }

  // ADMS
  if (product.withADMS) {
    specs.push("ADMS Supported");
  }

  // Dimension
  if (product.dimension) {
    specs.push(`Dimension: ${product.dimension}`);
  }

  // Warranty
  if (product.warranty && product.warranty.duration > 0) {
    specs.push(`${product.warranty.duration} ${product.warranty.unit.toUpperCase()} WARRANTY`);
  }

  return specs;
}

// Collect quotation data from the UI (shared by preview and generate)
function collectQuotationData(): QuotationData | null {
  if (selectedItems.size === 0) {
    return null;
  }

  const seq = quoteRefSeqEl.value.trim();
  const quoteRefNo = seq ? `${getQuoteRefPrefix()}-${seq}` : getQuoteRefPrefix();

  const createQuotationItem = (itemId: string): QuotationItem | null => {
    if (selectedItems.has(itemId)) {
      const item = selectedItems.get(itemId)!;
      const isService = item.product.category === "Service";
      const promoPrice = item.customPrice !== undefined ? item.customPrice : item.product.price.amount;
      return {
        productId: item.product.id,
        name: item.product.name,
        brand: item.product.brand,
        category: item.product.category,
        description: item.product.description,
        dimension: item.product.dimension,
        specs: isService ? [] : buildProductSpecs(item.product),
        imagePath: isService ? undefined : getProductImagePath(item.product),
        quantity: item.quantity,
        unit: isService ? "lot" : "pc",
        unitPrice: item.customPrice !== undefined ? item.customPrice : item.product.price.fakeAmount,
        promoPrice: promoPrice,
        totalPrice: promoPrice * item.quantity,
        warrantyMonths: item.product.warranty?.duration ?? 0,
        withExtras: item.product.withExtras ?? false,
      };
    }
    return null;
  };

  const ungroupedItems: QuotationItem[] = [];
  ungroupedItemOrder.forEach((itemId) => {
    const item = createQuotationItem(itemId);
    if (item) ungroupedItems.push(item);
  });

  const groups: QuotationGroup[] = [];
  itemGroups.forEach((group, groupId) => {
    const groupItems: QuotationItem[] = [];
    const itemsInGroup = getItemsInGroup(groupId);
    itemsInGroup.forEach((itemId) => {
      const item = createQuotationItem(itemId);
      if (item) groupItems.push(item);
    });
    if (groupItems.length > 0) {
      groups.push({ id: group.id, name: group.name, items: groupItems });
    }
  });

  const discount = parseFloat(discountInputEl.value) || 0;
  const installationCost = parseFloat(installationCostInputEl.value) || 0;

  return {
    quoteRefNo,
    companyName: companyNameEl.value.trim(),
    companyAddress: companyAddressEl.value.trim() || undefined,
    contactPerson: contactPersonEl.value.trim() || undefined,
    contactNumber: contactNumberEl.value.trim() || undefined,
    emailAddress: emailAddressEl.value.trim() || undefined,
    brochureOnly: brochureOnlyEl.checked,
    vatInclusive: vatInclusiveEl.checked,
    discount: discount > 0 ? discount : undefined,
    installationCost: installationCost > 0 ? installationCost : undefined,
    items: ungroupedItems,
    groups: groups.length > 0 ? groups : undefined,
    sixColumnMode: !sixColumnModeEl.checked,
    showPesoSign: showPesoSignEl.checked,
    agent: agentSelectEl.value,
    customNotes: getCustomNotes().length > 0 ? getCustomNotes() : undefined,
    longDateFormat: longDateFormatEl.checked,
    onSiteOrientation: Array.from(selectedItems.values()).some((item) => item.product.id === "orientation"),
    optionalAccessories: (optionalAccessoriesEl.value as "none" | "biometrics" | "door-access" | "smart-lock") || "none",
  };
}

// Generate quotation
async function generateQuotation(): Promise<void> {
  const data = collectQuotationData();
  if (!data) {
    alert("Please select at least one product");
    return;
  }

  generateBtnEl.disabled = true;
  generateBtnEl.textContent = "Generating...";

  try {
    const result = await window.electronAPI.generateQuotation(data);

    if (result.success) {
      saveToHistory();
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

// ─── Preview ─────────────────────────────────────────────────────────────────

function buildPreviewHTML(data: QuotationData): string {
  const curr = data.showPesoSign ? "₱" : "";
  const fmt = (n: number) => `${curr}${n.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const today = data.longDateFormat
    ? new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : new Date().toLocaleDateString("en-US");

  const agentFile = data.agent && data.agent !== "jk" ? `header_${data.agent}.png` : "header_jk.png";

  let html = "";

  // 1. Header image
  html += `<img class="pv-header-img" src="../../src/assets/header/${agentFile}">`;

  // 2. Quote Ref No
  html += `<p class="pv-ref">Quote Ref No: ${esc(data.quoteRefNo)}</p>`;

  // 3. Customer info table
  html += `<table class="pv-info-table">
    <tr><td class="pv-info-label" style="width:8%">Date</td><td style="width:53%">${esc(today)}</td><td class="pv-info-label" style="width:15%">Contact Person</td><td style="width:24%">${esc(data.contactPerson || "")}</td></tr>
    <tr><td class="pv-info-label">Client</td><td>${esc(data.companyName)}</td><td class="pv-info-label">Contact Number</td><td>${esc(data.contactNumber || "")}</td></tr>
    <tr><td class="pv-info-label">Address</td><td>${esc(data.companyAddress || "")}</td><td class="pv-info-label">Email</td><td>${esc(data.emailAddress || "")}</td></tr>
  </table>`;

  // 4. Thank you message
  html += `<p class="pv-thankyou">Thank you for your interest in our products; we will assist you with selecting the best systems &amp; solutions that would fit your requirements.</p>`;

  // 5. Product sections
  const allItems = [...data.items, ...(data.groups ?? []).flatMap((g) => g.items)];
  let totalEquipmentCost = allItems.reduce((sum, item) => sum + item.totalPrice, 0);

  const renderProductTable = (items: QuotationItem[]): string => {
    const biometricQty = items
      .filter((i) => i.category === "Biometrics" || i.withExtras === true)
      .reduce((sum, i) => sum + i.quantity, 0);

    let t = `<table class="pv-product-table"><thead><tr>`;
    t += `<th style="width:17%">Model</th><th style="width:${data.sixColumnMode ? 45 : 32}%">Item Description</th>`;
    t += `<th style="width:7%">Qty</th><th style="width:7%">Unit</th><th style="width:12%">Unit Price</th>`;
    if (!data.sixColumnMode) t += `<th style="width:13%">PROMO\nAMOUNT</th>`;
    t += `<th style="width:12%">AMOUNT</th></tr></thead><tbody>`;

    items.forEach((item) => {
      const iconFile = item.imagePath ? item.imagePath.replace(/^src\/assets\/icons\//, "") : "";
      const imgHtml = iconFile ? `<img class="pv-icon" src="../../src/assets/icons/${iconFile}">` : "";
      const descLines = (item.description || "").split("\n").filter((l) => l.trim()).map((l) => esc(l.trim())).join("<br>");
      let warrantyHtml = "";
      if (item.warrantyMonths && item.warrantyMonths > 0) {
        const wText = item.warrantyMonths >= 12 && item.warrantyMonths % 12 === 0
          ? `~ ${item.warrantyMonths / 12} YEAR${item.warrantyMonths / 12 > 1 ? "S" : ""} WARRANTY`
          : `~ ${item.warrantyMonths} MONTHS WARRANTY`;
        warrantyHtml = `<br><b>${esc(wText)}</b>`;
      }

      t += `<tr>`;
      t += `<td>${imgHtml}${esc(item.name)}</td>`;
      t += `<td class="td-desc">${descLines}${warrantyHtml}</td>`;
      t += `<td>${item.quantity}</td>`;
      t += `<td>${esc(item.unit)}</td>`;
      t += `<td>${fmt(item.unitPrice)}</td>`;
      if (!data.sixColumnMode) t += `<td>${fmt(item.promoPrice)}</td>`;
      t += `<td><b>${fmt(item.totalPrice)}</b></td>`;
      t += `</tr>`;
    });

    // Freebie rows for biometric items
    if (biometricQty > 0) {
      const freebieRow = (model: string, desc: string, unit: string) => {
        let r = `<tr><td>${esc(model)}</td><td class="td-desc">${esc(desc)}</td><td>${biometricQty}</td><td>${esc(unit)}</td><td>Free</td>`;
        if (!data.sixColumnMode) r += `<td>Free</td>`;
        r += `<td><b>Free</b></td></tr>`;
        return r;
      };
      t += freebieRow("Software", "ZkTeco Attendance Management", "License");
      t += freebieRow("", "16GB USB FLASH DISK DRIVE", "pc");
    }

    t += `</tbody></table>`;
    return t;
  };

  const getBiometricCapabilities = (item: QuotationItem): string => {
    const caps: string[] = [];
    if (item.specs) {
      item.specs.forEach((spec) => {
        const lower = spec.toLowerCase();
        if (lower.includes("face")) caps.push("FACE");
        if (lower.includes("fingerprint")) caps.push("FINGERPRINT");
        if (lower.includes("card")) caps.push("RFID");
      });
    }
    return [...new Set(caps)].join(" & ") || "BIOMETRIC";
  };

  // Render ungrouped items
  if (data.items.length > 0) {
    if (data.brochureOnly) {
      const bioItems = data.items.filter((i) => i.category === "Biometrics" || i.withExtras === true);
      const otherItems = data.items.filter((i) => i.category !== "Biometrics" && i.withExtras !== true);
      bioItems.forEach((item) => {
        html += `<p class="pv-brochure-heading">&#x25CF; ${esc(item.brand)} - ${esc(item.name)} - ${esc(getBiometricCapabilities(item))}</p>`;
        html += renderProductTable([item]);
      });
      if (otherItems.length > 0) html += renderProductTable(otherItems);
    } else {
      html += renderProductTable(data.items);
    }
  }

  // Render groups
  if (data.groups && data.groups.length > 0) {
    data.groups.forEach((group) => {
      html += `<p class="pv-group-name">${esc(group.name)}</p>`;
      if (data.brochureOnly) {
        const bioItems = group.items.filter((i) => i.category === "Biometrics" || i.withExtras === true);
        const otherItems = group.items.filter((i) => i.category !== "Biometrics" && i.withExtras !== true);
        bioItems.forEach((item) => {
          html += `<p class="pv-brochure-heading">&#x25CF; ${esc(item.brand)} - ${esc(item.name)} - ${esc(getBiometricCapabilities(item))}</p>`;
          html += renderProductTable([item]);
        });
        if (otherItems.length > 0) html += renderProductTable(otherItems);
      } else {
        html += renderProductTable(group.items);
      }
    });
  }

  // 6. Totals (only if not brochure mode)
  if (!data.brochureOnly) {
    const discountAmount = data.discount || 0;
    const installationAmount = data.installationCost || 0;
    const totalAfterDiscount = totalEquipmentCost - discountAmount;
    const subtotal = totalAfterDiscount + installationAmount;
    let vatAmount = 0;
    if (data.vatInclusive) vatAmount = Math.ceil(subtotal * 0.12 * 100) / 100;
    const totalInvestment = subtotal + vatAmount;

    const isSimple = discountAmount === 0 && installationAmount === 0 && vatAmount === 0;
    const onlyBiometrics = allItems.every((i) => i.category === "Biometrics");
    if (!isSimple) {
      html += `<p class="pv-totals">EQUIPMENT PRICE = ${fmt(totalEquipmentCost)}</p>`;
      if (discountAmount > 0) {
        html += `<p class="pv-totals">LESS DISCOUNT = ${fmt(discountAmount)}</p>`;
        html += `<p class="pv-totals">TOTAL EQUIPMENT COST = ${fmt(totalAfterDiscount)}</p>`;
      }
      if (installationAmount > 0) html += `<p class="pv-totals">INSTALLATION COST = ${fmt(installationAmount)}</p>`;
      if (vatAmount > 0) html += `<p class="pv-totals">PLUS 12% VAT = ${fmt(vatAmount)}</p>`;
    }
    const totalLabel = isSimple ? "TOTAL EQUIPMENT PRICE" : (onlyBiometrics ? "TOTAL EQUIPMENT COST" : "TOTAL INVESTMENT COST");
    html += `<p class="pv-totals"><span class="pv-highlight" style="text-decoration:underline">${totalLabel} = ${fmt(totalInvestment)}</span></p>`;

    // 7. Notes
    const hasDoorAccess = allItems.some((i) => i.category === "Door Access");
    const vatText = data.vatInclusive ? "VAT INCLUSIVE PRICE" : "VAT EXCLUSIVE PRICE";
    html += `<div class="pv-notes">`;
    html += `<p><span class="pv-highlight">NOTES:</span></p>`;
    let noteNum = 1;
    if ((data.installationCost ?? 0) > 0 || hasDoorAccess) {
      const noteText = (data.installationCost ?? 0) > 0
        ? `${noteNum}. INSTALLATION SERVICE & COST INCLUDED`
        : `${noteNum}. INSTALLATION SERVICE NOT YET INCLUDED (NEED SITE SURVEY)`;
      html += `<p><span class="pv-highlight">${esc(noteText)}</span></p>`;
      noteNum++;
    }
    html += `<p><span class="pv-highlight">${noteNum}. ${esc(vatText)}</span></p>`;
    noteNum++;
    const orientationText = data.onSiteOrientation
      ? `${noteNum}. ON SITE USER ORIENTATION`
      : `${noteNum}. USER ORIENTATION HOW TO USE DEVICE VIA VIRTUAL GOOGLE MEET`;
    html += `<p><span class="pv-highlight">${esc(orientationText)}</span></p>`;
    if (totalInvestment < 10000) {
      noteNum++;
      html += `<p><span class="pv-highlight">${noteNum}. DELIVERY FEE CARE OF CLIENT</span></p>`;
    }
    if (data.customNotes && data.customNotes.length > 0) {
      data.customNotes.forEach((note) => {
        noteNum++;
        html += `<p><span class="pv-highlight">${noteNum}. ${esc(note.toUpperCase())}</span></p>`;
      });
    }
    html += `</div>`;
  } else if (data.customNotes && data.customNotes.length > 0) {
    // Brochure mode — still show custom notes
    html += `<div class="pv-notes">`;
    html += `<p><span class="pv-highlight">NOTES:</span></p>`;
    data.customNotes.forEach((note, i) => {
      html += `<p><span class="pv-highlight">${i + 1}. ${esc(note.toUpperCase())}</span></p>`;
    });
    html += `</div>`;
  }

  // 8. Optional Accessories
  if (data.optionalAccessories && data.optionalAccessories !== "none") {
    html += buildOptionalAccessoriesPreview(data.optionalAccessories, data.sixColumnMode, data.showPesoSign);
  }

  // 9. Remarks & Conforme
  const onlyBiometricsRemarks = allItems.every((i) => i.category === "Biometrics");
  html += `<div class="pv-remarks-row">
    ${onlyBiometricsRemarks ? `<div class="pv-remarks-box"></div>` : `<div class="pv-remarks-box">
      <div class="pv-label">REMARKS</div>
      <div class="pv-remarks-bordered">Prices of labor and material costs such as supply/installation conduit, coaxial cable, power cable, connectors, metal plates and any other hardware necessary to complete the system installation is not part of the package</div>
    </div>`}
    <div class="pv-conforme-box">
      <div class="pv-label">CONFORME</div>
      <div style="margin-top:80px">
        <div class="pv-sig-line"></div>
        <div class="pv-sig-caption">Signature Over Printed Name/Date</div>
      </div>
    </div>
  </div>`;

  // 10. Terms & Conditions
  const maxWarranty = allItems.reduce((max, i) => Math.max(max, i.warrantyMonths ?? 0), 0);
  const warrantyText = pvWarrantyToText(maxWarranty);
  const vatTermText = data.vatInclusive ? "VAT Inclusive" : "VAT Exclusive";
  const hasDoorAccess = allItems.some((i) => i.category === "Door Access");
  const paymentTermsText = hasDoorAccess
    ? "Payment terms is Fifty Percent (50%) upon P.O. or signing of this CONFORME. Remaining balance shall be paid upon receive of items or after the installation."
    : "Payment terms is One Hundred Percent (100%) upon P.O. or signing of this CONFORME.";
  html += `<div class="pv-terms-box">
    <div class="pv-terms-title">TERMS &amp; CONDITIONS:</div>
    <p>1.) Prices quoted above are <span class="pv-highlight">${vatTermText}</span>. Email or fax certification if your company is vat exempt and zero rated for billing preparation.</p>
    <p>2.) Prices are subject to change without prior notice. Validity for this quotation is 15 days from the date stated above.</p>
    <p>3.) ${paymentTermsText}</p>
    <p>4.) Payment will be accepted in COD, CASH, and Dated check or thru Bank Transfer payable to <b>TECHFINITY SECURITY DEVICE TRADING</b>.</p>
    <p>5.) FREE DELIVERY for purchases above Php15,000 within Metro Manila.</p>
    <p>6.) Cancelled orders are subject to a cancellation charge of Fifty Percent (50%).</p>
    <p>7.) Up to ${esc(warrantyText)} limited warranty in service and parts will be given for main equipment from date of purchase/delivery/installation. Accessories such as power supply, adaptor, magnetic lock, exit button have six (6) months warranty. The warranty covers the parts cause of factory defect not including upgrades and relocation. Unauthorized repair will void its warranty. Warranty claims is strictly carry in basis, client must send the item to our office for repair. For those with installation, we will do the onsite checking and troubleshooting for free within metro manila, for outside metro manila client will pay for the mobilization/demobilization cost.</p>
    <p>8.) Should client will require service unit while defective device is under repair; client must pay a service unit fee but depends on the availability of the service unit.</p>
    <p>9.) After sales support is from Monday – Friday 8:30 – 5:30 pm</p>
  </div>`;

  // 11. Signature
  const agentDetails: Record<string, { name: string; number: string }> = {
    shae: { name: "SHAENA FALLE", number: "09070456737" },
    cle: { name: "LEO DURA", number: "09100255412" },
    jhel: { name: "Jhel Villavecencio", number: "09460378085" },
  };
  const details = agentDetails[data.agent ?? ""] ?? { name: "JOHN KARL NOLASCO", number: "09484263778" };
  html += `<div class="pv-signature">
    <p><b>Best Regards</b></p>
    <br>
    <p class="pv-name">${esc(details.name)}</p>
    <p>Sales Account Officer</p>
    <p>${esc(details.number)}</p>
  </div>`;

  return html;
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function pvWarrantyToText(months: number): string {
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

function buildOptionalAccessoriesPreview(type: "biometrics" | "door-access" | "smart-lock", sixColumnMode?: boolean, showPesoSign?: boolean): string {
  const curr = showPesoSign ? "₱" : "";
  const fmt = (n: number) => `${curr}${n.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const bioAccessories = [
    { model: "TMD95E", description: "Temperature Detection Module", qty: 1, unit: "pc", price: 9500, icon: "tmd95e.png" },
    { model: "", description: "Proximity Card 125 khz (Thin)", qty: 1, unit: "pc", price: 80, icon: "proximity-card.png" },
    { model: "", description: "5v Mini Ups", qty: 1, unit: "pc", price: 2500, icon: "mini-ups.png" },
    { model: "", description: "12v Mini Ups", qty: 1, unit: "pc", price: 3500, icon: "mini-ups.png" },
  ];
  const doorAccessories = [
    { model: "", description: "Small Push Button", qty: 1, unit: "pc", price: 150, icon: "small-push-button.png" },
    { model: "", description: "Slim Push Button", qty: 1, unit: "pc", price: 800, icon: "slim-push-button.png" },
    { model: "TMD01", description: "Temperature Detection Module for FA210", qty: 1, unit: "pc", price: 9500, icon: "tmd01.png" },
    { model: "", description: "LCD Intercom", qty: 1, unit: "set", price: 12500, icon: "intercom.png" },
    { model: "", description: "Proximity Card 125 khz (Thin)", qty: 1, unit: "pc", price: 80, icon: "proximity-card.png" },
    { model: "", description: "U-bracket (for frameless Door)", qty: 1, unit: "pc", price: 1200, icon: "u-bracket.png" },
    { model: "", description: "Dropbolt (DC 12V fail-safe)", qty: 1, unit: "Sets", price: 8200, icon: "dropboltxx.png" },
    { model: "Aluminum U-Bracket**", description: "Aluminum U-Bracket**", qty: 1, unit: "pc", price: 1500, icon: "al-u-bracket.png" },
    { model: "", description: "Dropbolt", qty: 1, unit: "pc", price: 6500, icon: "drop-bolt.png" },
    { model: "RPS", description: "12Vdc 5A Regulated Power Supply with backup battery", qty: 1, unit: "pc", price: 4500, icon: "rps.png" },
    { model: "FR1200", description: "Biometrics Scanner with Card Reader, Slave Device for F22", qty: 1, unit: "pc", price: 8500, icon: "fr1200.png" },
    { model: "K1", description: "Touch Free Push to Exit", qty: 1, unit: "pc", price: 1200, icon: "k1.png" },
    { model: "WTTTX KIT2", description: "Wireless Receiver to Exit with Remote Control, 12V/24VDC", qty: 1, unit: "pc", price: 1500, icon: "wireless-remote.png" },
    { model: "", description: "Emergency Key Switch", qty: 1, unit: "pc", price: 1500, icon: "emergency-key-switch.png" },
    { model: "", description: "Door Buzzer", qty: 1, unit: "pc", price: 350, icon: "door-buzzer.png" },
    { model: "", description: "Wireless Door Bell", qty: 1, unit: "pc", price: 1500 },
    { model: "BATTERY", description: "Lead-Acid Battery 12v, 7.2Ah", qty: 1, unit: "pc", price: 2500, icon: "battery.png" },
  ];
  const smartLockAccessories = [
    { model: "", description: "Card Encoder", qty: 1, unit: "pc", price: 3000, icon: "cardencoder.png" },
    { model: "", description: "Customizable Hotel Card", qty: 1, unit: "pc", price: 50, icon: "cuztomizablehotelcard.png" },
    { model: "", description: "RFID Bracelet", qty: 1, unit: "pc", price: 100, icon: "rfidbracelet.png" },
    { model: "", description: "RFID Card Loock", qty: 1, unit: "pc", price: 50, icon: "rfidcardloock.png" },
    { model: "", description: "TTLock Gateway", qty: 1, unit: "pc", price: 1000, icon: "ttlockgateway.png" },
    { model: "", description: "Power Saver", qty: 1, unit: "pc", price: 600, icon: "powersaver.png" },
  ];

  const items = type === "biometrics" ? bioAccessories : type === "smart-lock" ? smartLockAccessories : doorAccessories;
  let t = `<p class="pv-group-name">OPTIONAL ACCESSORIES</p>`;
  t += `<table class="pv-product-table"><thead><tr>`;
  t += `<th style="width:17%">Model</th><th style="width:${sixColumnMode ? 45 : 32}%">Item Description</th>`;
  t += `<th style="width:7%">Qty</th><th style="width:7%">Unit</th><th style="width:12%">Unit Price</th>`;
  if (!sixColumnMode) t += `<th style="width:13%">PROMO\nAMOUNT</th>`;
  t += `<th style="width:12%">AMOUNT</th></tr></thead><tbody>`;

  items.forEach((item) => {
    const total = item.price * item.qty;
    const imgHtml = item.icon ? `<img class="pv-icon" src="../../src/assets/icons/${item.icon}">` : "";
    t += `<tr><td>${imgHtml}${esc(item.model)}</td><td class="td-desc">${esc(item.description)}</td>`;
    t += `<td>${item.qty}</td><td>${esc(item.unit)}</td><td>${fmt(item.price)}</td>`;
    if (!sixColumnMode) t += `<td>${fmt(item.price)}</td>`;
    t += `<td><b>${fmt(total)}</b></td></tr>`;
  });

  t += `</tbody></table>`;
  return t;
}

// Clear all
function clearAll(): void {
  const idx = tabs.findIndex((t) => t.id === activeTabId);
  const label = idx >= 0 ? tabs[idx].label : "Quotation";
  const empty = createEmptySnapshot();
  applyTabState(empty);
  if (idx >= 0) tabs[idx] = { ...tabs[idx], ...empty, label };
  renderTabBar();
}

// Clear selected items only (keep customer info)
function clearItems(): void {
  selectedItems.clear();
  itemGroups.clear();
  itemToGroup.clear();
  groupItemOrder.clear();
  ungroupedItemOrder = [];
  groupIdCounter = 0;
  productInstanceCounter = 0;
  discountInputEl.value = "0";
  installationCostInputEl.value = "0";
  renderProducts();
  renderServices();
  renderSelectedItems();
}

// ── Tab Management ────────────────────────────────────────────────────────

function buildProductLookup(): Map<string, Product> {
  const lookup = new Map<string, Product>(products.map((p) => [p.id, p]));
  services.forEach((s) => {
    lookup.set(s.id, {
      id: s.id, brand: "Service", name: s.name, category: "Service",
      description: s.description,
      capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
      download: { lan: false, usb: false, wifi: false },
      price: { fakeAmount: s.price, amount: s.price, currency: "PHP" },
      withADMS: false, warranty: { duration: 0, unit: "months" }, isActive: true,
    });
  });
  return lookup;
}

function createEmptySnapshot(): TabSnapshot {
  return {
    quoteRefSeq: "", agent: "jk", companyName: "", companyAddress: "",
    contactPerson: "", contactNumber: "", emailAddress: "",
    brochureOnly: false, vatInclusive: false, discount: 0, installationCost: 0,
    sixColumnMode: false, optionalAccessories: "none", customNotes: [],
    savedItems: [], ungroupedOrder: [], groups: [],
    productInstanceCounter: 0, groupIdCounter: 0, currentCategory: "Biometrics",
  };
}

function captureCurrentState(): TabSnapshot {
  const savedItems = Array.from(selectedItems.entries()).map(([instanceId, item]) => ({
    instanceId,
    productId: item.product.id,
    quantity: item.quantity,
    customPrice: item.customPrice,
    excludeFromDiscount: item.excludeFromDiscount,
  }));
  const groupsData = Array.from(itemGroups.entries()).map(([groupId, group]) => ({
    id: group.id, name: group.name, itemOrder: groupItemOrder.get(groupId) ?? [],
  }));
  return {
    quoteRefSeq: quoteRefSeqEl.value.trim(),
    agent: agentSelectEl.value,
    companyName: companyNameEl.value.trim(),
    companyAddress: companyAddressEl.value.trim(),
    contactPerson: contactPersonEl.value.trim(),
    contactNumber: contactNumberEl.value.trim(),
    emailAddress: emailAddressEl.value.trim(),
    brochureOnly: brochureOnlyEl.checked,
    vatInclusive: vatInclusiveEl.checked,
    discount: parseFloat(discountInputEl.value) || 0,
    installationCost: parseFloat(installationCostInputEl.value) || 0,
    sixColumnMode: sixColumnModeEl.checked,
    optionalAccessories: optionalAccessoriesEl.value,
    customNotes: getCustomNotes(),
    savedItems,
    ungroupedOrder: [...ungroupedItemOrder],
    groups: groupsData,
    productInstanceCounter,
    groupIdCounter,
    currentCategory,
  };
}

function applyTabState(snapshot: TabSnapshot): void {
  selectedItems.clear();
  itemGroups.clear();
  itemToGroup.clear();
  groupItemOrder.clear();
  ungroupedItemOrder = [];
  productInstanceCounter = snapshot.productInstanceCounter;
  groupIdCounter = snapshot.groupIdCounter;
  currentCategory = snapshot.currentCategory;
  productSearchEl.value = "";
  // Sync the category tab button active states to match the restored category
  document.querySelectorAll(".product-tab").forEach((tab) => {
    const tabCategory = (tab as HTMLElement).dataset.category;
    const isActive =
      (tabCategory === "biometrics" && currentCategory === "Biometrics") ||
      (tabCategory === "door-access" && currentCategory === "Door Access") ||
      (tabCategory === "cctv" && currentCategory === "CCTV") ||
      (tabCategory === "utime" && currentCategory === "UTIME") ||
      (tabCategory === "virtual-server" && currentCategory === "Virtual Server") ||
      (tabCategory === "smart-locks" && currentCategory === "Smart Locks");
    tab.classList.toggle("active", isActive);
  });

  agentSelectEl.value = snapshot.agent;
  updateQuoteRefPrefix();
  quoteRefSeqEl.value = snapshot.quoteRefSeq;
  companyNameEl.value = snapshot.companyName;
  companyAddressEl.value = snapshot.companyAddress;
  contactPersonEl.value = snapshot.contactPerson;
  contactNumberEl.value = snapshot.contactNumber;
  emailAddressEl.value = snapshot.emailAddress;
  brochureOnlyEl.checked = snapshot.brochureOnly;
  vatInclusiveEl.checked = snapshot.vatInclusive;
  discountInputEl.value = String(snapshot.discount);
  installationCostInputEl.value = String(snapshot.installationCost);
  sixColumnModeEl.checked = snapshot.sixColumnMode;
  optionalAccessoriesEl.value = snapshot.optionalAccessories;

  customNotesListEl.innerHTML = "";
  snapshot.customNotes.forEach((note) => addCustomNote(note));

  const productLookup = buildProductLookup();
  snapshot.savedItems.forEach(({ instanceId, productId, quantity, customPrice, excludeFromDiscount }) => {
    const product = productLookup.get(productId);
    if (!product) return;
    const item: SelectedItem = { product, quantity };
    if (customPrice !== undefined) item.customPrice = customPrice;
    if (excludeFromDiscount) item.excludeFromDiscount = true;
    selectedItems.set(instanceId, item);
  });

  ungroupedItemOrder = snapshot.ungroupedOrder.filter((id) => selectedItems.has(id));
  snapshot.groups.forEach(({ id, name, itemOrder }) => {
    itemGroups.set(id, { id, name });
    const validOrder = itemOrder.filter((itemId) => selectedItems.has(itemId));
    groupItemOrder.set(id, validOrder);
    validOrder.forEach((itemId) => itemToGroup.set(itemId, id));
  });

  brochureOnlyEl.dispatchEvent(new Event("change"));
  vatInclusiveEl.dispatchEvent(new Event("change"));
  renderProducts();
  renderServices();
  renderSelectedItems();
  updateGrandTotal();
}

function getTabLabel(snapshot: TabSnapshot, fallbackIndex: number): string {
  if (snapshot.companyName) return snapshot.companyName;
  if (snapshot.quoteRefSeq) {
    const year = new Date().getFullYear();
    return `${year}-${snapshot.agent.toUpperCase()}-${snapshot.quoteRefSeq}`;
  }
  return `Quotation ${fallbackIndex}`;
}

function createTabElement(tab: TabState, fallbackIndex: number): HTMLButtonElement {
  const btn = document.createElement("button");
  btn.className = "quotation-tab";
  btn.dataset.tabId = tab.id;
  btn.innerHTML = `
    <span class="tab-label">${tab.label || getTabLabel(tab, fallbackIndex)}</span>
    <span class="tab-close" data-close-id="${tab.id}" title="Close">&#xd7;</span>
  `;
  btn.addEventListener("click", (e) => {
    if ((e.target as HTMLElement).dataset.closeId) return;
    switchToTab(btn.dataset.tabId!);
  });
  btn.querySelector<HTMLElement>(".tab-close")!.addEventListener("click", (e) => {
    e.stopPropagation();
    closeTab(tab.id);
  });
  return btn;
}

function renderTabBar(): void {
  const tabListEl = document.getElementById("tabList") as HTMLDivElement;

  // Build a map of existing (non-exiting) tab elements keyed by tab id
  const existing = new Map<string, HTMLButtonElement>();
  tabListEl.querySelectorAll<HTMLButtonElement>(".quotation-tab").forEach((el) => {
    if (el.classList.contains("tab-exiting")) return;
    existing.set(el.dataset.tabId!, el);
  });

  // Remove any live elements that no longer correspond to a tab (edge cases only)
  existing.forEach((el, id) => {
    if (!tabs.find((t) => t.id === id)) el.remove();
  });

  // Sync DOM order with tabs[], creating new elements as needed
  tabs.forEach((tab, i) => {
    let el = existing.get(tab.id);
    if (!el) {
      el = createTabElement(tab, i + 1);
      el.classList.add("tab-entering");
      el.addEventListener("animationend", () => el!.classList.remove("tab-entering"), { once: true });
    } else {
      // Update label text if it changed
      const labelEl = el.querySelector<HTMLElement>(".tab-label");
      if (labelEl) labelEl.textContent = tab.label || getTabLabel(tab, i + 1);
    }
    el.classList.toggle("active", tab.id === activeTabId);

    // Ensure correct position (skipping any exiting elements between live ones)
    const liveChildren = Array.from(tabListEl.children).filter(
      (c) => !(c as HTMLElement).classList.contains("tab-exiting")
    );
    if (liveChildren[i] !== el) {
      // Find the reference node (next live child at position i) to insertBefore
      const refNode = liveChildren[i] ?? null;
      tabListEl.insertBefore(el, refNode);
    }
  });
}

function flushActiveTab(): void {
  if (!activeTabId) return;
  const idx = tabs.findIndex((t) => t.id === activeTabId);
  if (idx < 0) return;
  const snapshot = captureCurrentState();
  tabs[idx] = { ...tabs[idx], ...snapshot, label: getTabLabel(snapshot, idx + 1) };
}

function switchToTab(id: string): void {
  if (id === activeTabId) return;
  flushActiveTab();
  activeTabId = id;
  const tab = tabs.find((t) => t.id === id)!;
  applyTabState(tab);
  renderTabBar();
}

function addTab(): void {
  flushActiveTab();
  const id = `tab-${++tabCounter}`;
  const newTab: TabState = { ...createEmptySnapshot(), id, label: `Quotation ${tabCounter}` };
  tabs.push(newTab);
  activeTabId = id;
  applyTabState(newTab);
  renderTabBar();
}

function closeTab(id: string): void {
  const idx = tabs.findIndex((t) => t.id === id);
  if (idx < 0) return;

  if (tabs.length === 1) {
    // Reset the only tab instead of closing
    const empty = createEmptySnapshot();
    tabs[0] = { ...tabs[0], ...empty, label: "Quotation 1" };
    applyTabState(tabs[0]);
    renderTabBar();
    return;
  }

  const tabEl = document.querySelector<HTMLButtonElement>(
    `.quotation-tab[data-tab-id="${id}"]:not(.tab-exiting)`
  );

  const finalize = (): void => {
    const idx2 = tabs.findIndex((t) => t.id === id);
    if (idx2 < 0) return;
    if (activeTabId === id) {
      const nextIdx = idx2 === tabs.length - 1 ? idx2 - 1 : idx2 + 1;
      const nextId = tabs[nextIdx].id;
      tabs.splice(idx2, 1);
      activeTabId = nextId;
      applyTabState(tabs.find((t) => t.id === nextId)!);
    } else {
      tabs.splice(idx2, 1);
    }
    // Remove the exiting element before the diffing render runs
    tabEl?.remove();
    renderTabBar();
  };

  if (tabEl) {
    tabEl.classList.add("tab-exiting");
    tabEl.addEventListener("animationend", finalize, { once: true });
  } else {
    finalize();
  }
}

function updateActiveTabLabel(): void {
  const idx = tabs.findIndex((t) => t.id === activeTabId);
  if (idx < 0) return;
  const snapshot = captureCurrentState();
  tabs[idx].label = getTabLabel(snapshot, idx + 1);
  // Update only the label text without full re-render to avoid focus disruption
  const tabEl = document.querySelector<HTMLButtonElement>(`.quotation-tab[data-tab-id="${activeTabId}"] .tab-label`);
  if (tabEl) tabEl.textContent = tabs[idx].label;
}

// ── Quotation History ──────────────────────────────────────────────────────

function getHistory(): SavedQuotationEntry[] {
  try {
    return JSON.parse(localStorage.getItem("quotationHistory") ?? "[]");
  } catch {
    return [];
  }
}

function saveToHistory(): void {
  const savedItems = Array.from(selectedItems.entries()).map(([instanceId, item]) => ({
    instanceId,
    productId: item.product.id,
    quantity: item.quantity,
    customPrice: item.customPrice,
    excludeFromDiscount: item.excludeFromDiscount,
  }));

  const groupsData = Array.from(itemGroups.entries()).map(([groupId, group]) => ({
    id: group.id,
    name: group.name,
    itemOrder: groupItemOrder.get(groupId) ?? [],
  }));

  const entry: SavedQuotationEntry = {
    id: Date.now().toString(),
    savedAt: new Date().toISOString(),
    quoteRefSeq: quoteRefSeqEl.value.trim(),
    agent: agentSelectEl.value,
    companyName: companyNameEl.value.trim(),
    companyAddress: companyAddressEl.value.trim(),
    contactPerson: contactPersonEl.value.trim(),
    contactNumber: contactNumberEl.value.trim(),
    emailAddress: emailAddressEl.value.trim(),
    brochureOnly: brochureOnlyEl.checked,
    vatInclusive: vatInclusiveEl.checked,
    discount: parseFloat(discountInputEl.value) || 0,
    installationCost: parseFloat(installationCostInputEl.value) || 0,
    sixColumnMode: sixColumnModeEl.checked,
    optionalAccessories: optionalAccessoriesEl.value,
    customNotes: getCustomNotes(),
    savedItems,
    ungroupedOrder: [...ungroupedItemOrder],
    groups: groupsData,
  };

  const history = getHistory();
  history.unshift(entry);
  if (history.length > 20) history.splice(20);
  localStorage.setItem("quotationHistory", JSON.stringify(history));
  renderHistoryPanel();
}

function deleteFromHistory(id: string): void {
  const history = getHistory().filter((e) => e.id !== id);
  localStorage.setItem("quotationHistory", JSON.stringify(history));
  renderHistoryPanel();
}

function snapshotFromHistoryEntry(entry: SavedQuotationEntry): TabSnapshot {
  let maxCounter = 0;
  entry.savedItems.forEach(({ instanceId }) => {
    const m = instanceId.match(/^product-(\d+)$/);
    if (m) maxCounter = Math.max(maxCounter, parseInt(m[1], 10));
  });
  let maxGroupCounter = 0;
  entry.groups.forEach(({ id }) => {
    const m = id.match(/^group-(\d+)$/);
    if (m) maxGroupCounter = Math.max(maxGroupCounter, parseInt(m[1], 10));
  });
  return {
    quoteRefSeq: entry.quoteRefSeq,
    agent: entry.agent,
    companyName: entry.companyName,
    companyAddress: entry.companyAddress,
    contactPerson: entry.contactPerson,
    contactNumber: entry.contactNumber,
    emailAddress: entry.emailAddress,
    brochureOnly: entry.brochureOnly,
    vatInclusive: entry.vatInclusive,
    discount: entry.discount,
    installationCost: entry.installationCost,
    sixColumnMode: entry.sixColumnMode,
    optionalAccessories: entry.optionalAccessories,
    customNotes: entry.customNotes,
    savedItems: entry.savedItems,
    ungroupedOrder: entry.ungroupedOrder,
    groups: entry.groups,
    productInstanceCounter: maxCounter,
    groupIdCounter: maxGroupCounter,
    currentCategory: "Biometrics",
  };
}

function loadFromHistory(entry: SavedQuotationEntry): void {
  const snapshot = snapshotFromHistoryEntry(entry);
  applyTabState(snapshot);
  // Update the current tab's stored state
  const idx = tabs.findIndex((t) => t.id === activeTabId);
  if (idx >= 0) {
    tabs[idx] = { ...tabs[idx], ...snapshot, label: entry.companyName || entry.quoteRefSeq || tabs[idx].label };
  }
  renderTabBar();
}

function renderHistoryPanel(): void {
  const history = getHistory();
  const countEl = document.getElementById("historyCount") as HTMLSpanElement;
  countEl.textContent = history.length > 0 ? String(history.length) : "";

  if (history.length === 0) {
    historyListEl.innerHTML = `<div class="history-empty">No saved quotations yet. Quotations are saved automatically after generating.</div>`;
    return;
  }

  historyListEl.innerHTML = history.map((entry) => {
    const date = new Date(entry.savedAt);
    const dateStr = date.toLocaleDateString("en-PH", { year: "numeric", month: "short", day: "numeric" });
    const timeStr = date.toLocaleTimeString("en-PH", { hour: "2-digit", minute: "2-digit" });
    const refDisplay = entry.quoteRefSeq
      ? `${new Date(entry.savedAt).getFullYear()}-${entry.agent.toUpperCase()}-${entry.quoteRefSeq}`
      : `${new Date(entry.savedAt).getFullYear()}-${entry.agent.toUpperCase()}`;
    const itemCount = entry.savedItems.length;
    return `
      <div class="history-entry" data-id="${entry.id}">
        <div class="history-entry-info">
          <div class="history-entry-ref">${refDisplay}</div>
          <div class="history-entry-company">${entry.companyName || "(No company)"}</div>
          <div class="history-entry-meta">${dateStr} ${timeStr} &bull; ${itemCount} item${itemCount !== 1 ? "s" : ""}</div>
        </div>
        <div class="history-entry-actions">
          <button class="btn-history-load" data-id="${entry.id}">Load</button>
          <button class="btn-history-delete" data-id="${entry.id}" title="Delete">&#x2715;</button>
        </div>
      </div>
    `;
  }).join("");

  historyListEl.querySelectorAll<HTMLButtonElement>(".btn-history-load").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id!;
      const entry = getHistory().find((e) => e.id === id);
      if (entry) {
        loadFromHistory(entry);
        // Collapse the history panel after loading
        historyListEl.classList.add("hidden");
        historyToggleBtn.classList.remove("open");
      }
    });
  });

  historyListEl.querySelectorAll<HTMLButtonElement>(".btn-history-delete").forEach((btn) => {
    btn.addEventListener("click", () => {
      deleteFromHistory(btn.dataset.id!);
    });
  });
}

// Event listeners
generateBtnEl.addEventListener("click", generateQuotation);

// Preview
const previewBtnEl = document.getElementById("previewBtn") as HTMLButtonElement;
const previewModalEl = document.getElementById("previewModal") as HTMLDivElement;
const closePreviewBtnEl = document.getElementById("closePreviewBtn") as HTMLButtonElement;
const previewContentEl = document.getElementById("previewContent") as HTMLDivElement;
const previewGenerateBtnEl = document.getElementById("previewGenerateBtn") as HTMLButtonElement;

previewBtnEl.addEventListener("click", () => {
  const data = collectQuotationData();
  if (!data) {
    previewBtnEl.classList.add("shake");
    previewBtnEl.addEventListener("animationend", () => previewBtnEl.classList.remove("shake"), { once: true });
    return;
  }
  previewContentEl.innerHTML = buildPreviewHTML(data);
  previewModalEl.classList.remove("hidden");
});
closePreviewBtnEl.addEventListener("click", () => previewModalEl.classList.add("hidden"));
previewModalEl.addEventListener("click", (e) => {
  if (e.target === previewModalEl) previewModalEl.classList.add("hidden");
});
previewGenerateBtnEl.addEventListener("click", () => {
  previewModalEl.classList.add("hidden");
  generateQuotation();
});
const clearItemsBtnEl = document.getElementById("clearItemsBtn") as HTMLButtonElement;
clearItemsBtnEl.addEventListener("click", clearItems);
clearBtnEl.addEventListener("click", clearAll);

// Update tab label live when company name or ref seq changes
companyNameEl.addEventListener("input", updateActiveTabLabel);
quoteRefSeqEl.addEventListener("input", updateActiveTabLabel);
agentSelectEl.addEventListener("change", updateActiveTabLabel);

// Add Tab button
document.getElementById("addTabBtn")!.addEventListener("click", addTab);

// Add Group button
const addGroupBtnEl = document.getElementById("addGroupBtn") as HTMLButtonElement;
addGroupBtnEl.addEventListener("click", () => {
  const groupName = `Group ${itemGroups.size + 1}`;
  createGroup(groupName);
  renderSelectedItems();
});

// Brochure Only checkbox listener - hide/show pricing footer
const tableTfootEl = document.getElementById("tableTfoot") as HTMLElement;
brochureOnlyEl.addEventListener("change", () => {
  if (brochureOnlyEl.checked) {
    tableTfootEl.classList.add("fade-out");
    tableTfootEl.addEventListener("transitionend", () => {
      if (brochureOnlyEl.checked) tableTfootEl.classList.add("hidden");
    }, { once: true });
  } else {
    tableTfootEl.classList.remove("hidden");
    // Force reflow so the transition plays
    void tableTfootEl.offsetHeight;
    tableTfootEl.classList.remove("fade-out");
  }
});

// VAT checkbox listener - update totals when changed
vatInclusiveEl.addEventListener("change", () => {
  updateGrandTotal();
});

// Select all on focus for discount, installation cost, and grand total
discountInputEl.addEventListener("focus", () => discountInputEl.select());
installationCostInputEl.addEventListener("focus", () => installationCostInputEl.select());
grandTotalEl.addEventListener("focus", () => grandTotalEl.select());

// Discount input listener - update totals when changed
discountInputEl.addEventListener("input", () => {
  updateGrandTotal();
});

// Discount percentage buttons
document.querySelectorAll<HTMLButtonElement>(".discount-pct-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const pct = parseInt(btn.dataset.pct ?? "0", 10);
    const discountAmount = currentDiscountableEquipmentCost * pct / 100;
    discountInputEl.value = discountAmount.toFixed(2);
    updateGrandTotal();
  });
});

// Installation cost input listener - update totals when changed
installationCostInputEl.addEventListener("input", () => {
  updateGrandTotal();
});

// Grand total input listener - back-calculate discount from custom total
grandTotalEl.addEventListener("change", () => {
  const desiredTotal = parseFloat(grandTotalEl.value) || 0;
  const installationCost = parseFloat(installationCostInputEl.value) || 0;
  const vatEnabled = vatInclusiveEl.checked;

  // Reverse-solve: find discount so that the final total (with ceiling VAT) equals desiredTotal
  // Start with an estimate, then adjust to account for Math.ceil on VAT
  const vatRate = vatEnabled ? 0.12 : 0;
  let discount = Math.round((currentEquipmentCost + installationCost - desiredTotal / (1 + vatRate)) * 100) / 100;
  discount = Math.max(0, discount);

  // Fine-tune: compute forward and adjust if off by a cent due to ceiling
  const computeTotal = (d: number): number => {
    const subtotal = (currentEquipmentCost - d) + installationCost;
    const vat = vatEnabled ? Math.ceil(subtotal * 0.12 * 100) / 100 : 0;
    return Math.round((subtotal + vat) * 100) / 100;
  };

  let total = computeTotal(discount);
  if (total > desiredTotal) {
    discount = Math.round((discount + (total - desiredTotal)) * 100) / 100;
    total = computeTotal(discount);
  }
  if (total < desiredTotal) {
    discount = Math.round((discount - (desiredTotal - total)) * 100) / 100;
  }
  discount = Math.max(0, discount);

  discountInputEl.value = discount.toFixed(2);
  updateGrandTotal();
});

// Agent change — update quote ref prefix
agentSelectEl.addEventListener("change", () => {
  updateQuoteRefPrefix();
});

// Sequence input — show/hide separator
quoteRefSeqEl.addEventListener("input", () => {
  updateQuoteRefPrefix();
});

// Initialize quote ref prefix
updateQuoteRefPrefix();

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

// Background picker
const bgPreviewEl = document.getElementById("bgPreview") as HTMLDivElement;
const bgPickBtnEl = document.getElementById("bgPickBtn") as HTMLButtonElement;
const bgClearBtnEl = document.getElementById("bgClearBtn") as HTMLButtonElement;
const bgImageEl = document.getElementById("bgImage") as HTMLImageElement;
const bgFileInput = document.createElement("input");
bgFileInput.type = "file";
bgFileInput.accept = "image/*";

function applyBackground(dataUrl: string | null): void {
  if (dataUrl) {
    bgImageEl.src = dataUrl;
    bgImageEl.classList.add("active");
    document.body.classList.add("has-custom-bg");
    bgPreviewEl.innerHTML = `<img src="${dataUrl}" style="width:100%;height:100%;object-fit:cover;">`;
  } else {
    bgImageEl.src = "";
    bgImageEl.classList.remove("active");
    document.body.classList.remove("has-custom-bg");
    bgPreviewEl.innerHTML = "No background set";
  }
}

// Load saved background
const savedBg = localStorage.getItem("customBackground");
if (savedBg) applyBackground(savedBg);

bgPickBtnEl.addEventListener("click", () => bgFileInput.click());

bgFileInput.addEventListener("change", () => {
  const file = bgFileInput.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const dataUrl = reader.result as string;
    try {
      localStorage.setItem("customBackground", dataUrl);
    } catch (_) {
      // Image too large for localStorage — still apply for this session
    }
    applyBackground(dataUrl);
  };
  reader.readAsDataURL(file);
  bgFileInput.value = "";
});

bgClearBtnEl.addEventListener("click", () => {
  localStorage.removeItem("customBackground");
  applyBackground(null);
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

// Show peso sign setting
showPesoSignEl.checked = localStorage.getItem("showPesoSign") === "true";
showPesoSignEl.addEventListener("change", () => {
  localStorage.setItem("showPesoSign", String(showPesoSignEl.checked));
});

// Long date format setting
longDateFormatEl.checked = localStorage.getItem("longDateFormat") === "true";
longDateFormatEl.addEventListener("change", () => {
  localStorage.setItem("longDateFormat", String(longDateFormatEl.checked));
});

// Populate version label from package.json via main process
window.electronAPI.getAppVersion().then((v) => {
  const el = document.getElementById("currentVersionLabel");
  if (el) el.textContent = v;
});

// Check for Updates
(function initUpdateChecker(): void {
  const checkUpdateBtn = document.getElementById("checkUpdateBtn") as HTMLButtonElement;
  const checkUpdateBtnLabel = document.getElementById("checkUpdateBtnLabel") as HTMLSpanElement;
  const updateResult = document.getElementById("updateResult") as HTMLDivElement;
  const updateStatusBadge = document.getElementById("updateStatusBadge") as HTMLSpanElement;

  checkUpdateBtn.addEventListener("click", async () => {
    checkUpdateBtn.disabled = true;
    checkUpdateBtnLabel.textContent = "Checking…";
    updateResult.className = "update-result hidden";
    updateResult.innerHTML = "";
    updateStatusBadge.className = "update-badge hidden";

    try {
      const result = await window.electronAPI.checkForUpdates();

      if (!result.success) {
        updateResult.className = "update-result error";
        updateResult.textContent = `Error: ${result.error}`;
      } else if (result.isNewer) {
        updateStatusBadge.className = "update-badge update-available";
        updateStatusBadge.textContent = "Update Available";
        updateResult.className = "update-result info";
        updateResult.innerHTML =
          `New version <strong>v${result.latestVersion}</strong> is available! ` +
          `You are on <strong>v${result.currentVersion}</strong>.<br>` +
          `<a id="releaseLink">Download from GitHub</a>`;
        const releaseLink = document.getElementById("releaseLink");
        if (releaseLink && result.releaseUrl) {
          releaseLink.addEventListener("click", () => {
            window.electronAPI.openExternalUrl(result.releaseUrl!);
          });
        }
      } else {
        updateStatusBadge.className = "update-badge up-to-date";
        updateStatusBadge.textContent = "Up to Date";
        updateResult.className = "update-result success";
        updateResult.textContent = `You're on the latest version (v${result.currentVersion}).`;
      }
    } catch {
      updateResult.className = "update-result error";
      updateResult.textContent = "Could not reach update server.";
    }

    checkUpdateBtnLabel.textContent = "Check for Updates";
    checkUpdateBtn.disabled = false;
  });
})();

// Service card click — add instance like products
const serviceCards = document.querySelectorAll(".service-card");
serviceCards.forEach((card) => {
  card.addEventListener("click", () => {
    const serviceId = (card as HTMLElement).dataset.serviceId;
    if (serviceId) {
      const service = services.find((s) => s.id === serviceId);
      if (service) addService(service);
    }
  });
});

// Product category tabs
const productTabs = document.querySelectorAll(".product-tab");
productTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const category = (tab as HTMLElement).dataset.category;
    if (category === "biometrics") {
      switchCategory("Biometrics");
    } else if (category === "door-access") {
      switchCategory("Door Access");
    } else if (category === "cctv") {
      switchCategory("CCTV");
    } else if (category === "utime") {
      switchCategory("UTIME");
    } else if (category === "virtual-server") {
      switchCategory("Virtual Server");
    } else if (category === "smart-locks") {
      switchCategory("Smart Locks");
    }
  });
});

productSearchEl.addEventListener("input", () => renderProducts());

const hideDeprecatedToggleEl = document.getElementById("hideDeprecatedToggle") as HTMLInputElement;
hideDeprecatedToggleEl.addEventListener("change", () => {
  hideDeprecated = hideDeprecatedToggleEl.checked;
  const deprecatedCards = productListEl.querySelectorAll<HTMLElement>("[data-deprecated='true']");
  if (hideDeprecated) {
    // Fade out then hide
    deprecatedCards.forEach((card) => {
      card.classList.add("product-card--fading");
      card.addEventListener("transitionend", () => {
        card.classList.add("product-card--hidden");
        card.classList.remove("product-card--fading");
      }, { once: true });
    });
  } else {
    // Unhide then fade in
    deprecatedCards.forEach((card) => {
      card.classList.add("product-card--fading"); // opacity: 0
      card.classList.remove("product-card--hidden"); // show at opacity 0
      void card.offsetHeight; // force reflow so transition fires
      card.classList.remove("product-card--fading"); // animate to opacity 1
    });
  }
});

// History panel toggle
const historyToggleBtn = document.getElementById("historyToggleBtn") as HTMLButtonElement;
historyToggleBtn.addEventListener("click", () => {
  const isOpen = !historyListEl.classList.contains("hidden");
  if (isOpen) {
    historyListEl.classList.add("hidden");
    historyToggleBtn.classList.remove("open");
  } else {
    historyListEl.classList.remove("hidden");
    historyToggleBtn.classList.add("open");
  }
});

// Initialize first tab
tabCounter = 1;
const firstTab: TabState = { ...createEmptySnapshot(), id: "tab-1", label: "Quotation 1" };
tabs = [firstTab];
activeTabId = "tab-1";

// Initial render
loadSavedTheme();
renderProducts();
renderServices();
renderSelectedItems();
renderHistoryPanel();
renderTabBar();
