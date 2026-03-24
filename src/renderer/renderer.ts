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
  specs?: string[];
  imagePath?: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  promoPrice: number;
  totalPrice: number;
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
  items: QuotationItem[];
  groups?: QuotationGroup[];
  services?: {
    name: string;
    price: number;
  }[];
  sixColumnMode?: boolean;
  notes?: string;
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
  "F22": "f22.png",
  "SF200": "sf200.png",
  "IFACE3": "iface3.png",
  "MB460": "mb460.png",
  "FA210": "fa210.png",
  "FA210w": "fa210.png",
  "XFACE100": "xface100.png",
  "UFACE800": "uface800.png",
  "SPEEDFACEV3L": "speedfacev3l.png",
  // Door Access
  "M06": "m06.jpg",
  "X6": "x6.jpg",
  "Door Exit Metal Square": "door-exit-metal-square.jpg",
  "AL-280": "al-280.jpg",
  "AL-280PZ/PL": "al-280-pzpl.png",
  "RPS": "rps.png",
  "EBG": "ebg.png",
  "Small Push Button": "small-push-button.jpg",
  "Slim Push Button": "slim-push-button.jpg",
  "TMD01": "tmd01.png",
  "LCD Intercom": "intercom.png",
  "Proximity Card": "proximity-card.png",
  "U-Bracket": "u-bracket.png",
  "Dropbolt**": "dropboltxx.png",
  "Aluminum U-Bracket**": "al-u-bracket.png",
  "Drop Bolt": "drop-bolt.png",
  "RPS w/ BB": "rps-bb.png",
  "RPS deviceless": "rps-deviceless.jpg",
  "FR1200": "fr1200.png",
  "K1": "k1.png",
  "Wireless Remote": "wireless-remote.png",
  "Emergency Key Switch": "emergency-key-switch.png",
  "Door Buzzer": "door-buzzer.png",
  "Battery": "battery.jpg",
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
  
  // Door Access Products
  {
    id: "g-m06",
    brand: "GENERIC",
    name: "M06",
    category: "Door Access",
    description: "125khz RFID",
    capacity: { fingerprint: 0, card: 2000, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 5700, amount: 5700, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-x6",
    brand: "ZKTECO",
    name: "X6",
    category: "Door Access",
    description: "125khz RFID",
    capacity: { fingerprint: 500, card: 500, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 7900, amount: 7900, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "g-dems",
    brand: "GENERIC",
    name: "Door Exit Metal Square",
    category: "Door Access",
    description: "Four Door Access Control Panel",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 800, amount: 800, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 6, unit: "months" },
    isActive: true,
  },
  {
    id: "g-al-280",
    brand: "GENERIC",
    name: "AL-280",
    category: "Door Access",
    description: " 600Lbs Electronic Magnetic Lock\n"+
                 " Holding Force: 270kg\n"+
                 " Working Voltage: DC12V/24V Input\n"+
                 " Weight: 1.97kg\n"+
                 " Size 253*25*48mm",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 4300, amount: 4300, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "g-al-280pzpl",
    brand: "GENERIC",
    name: "AL-280PZ/PL",
    category: "Door Access",
    description: "Z&L bracket for AL280",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 2400, amount: 2400, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "g-rps",
    brand: "GENERIC",
    name: "RPS",
    category: "Door Access",
    description: " 12Vdc 10A Regulated Power Supply\n"+
                 " Input: 100 -265VAC 50/60HZ\n"+
                 " Output: +12V 10A MAX\n",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 2800, amount: 2800, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 6, unit: "months" },
    isActive: true,
  },
  {
    id: "g-ebg",
    brand: "GENERIC",
    name: "EBG",
    category: "Door Access",
    description: "Emergency Break Glass",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 1200, amount: 1200, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "g-small-pb",
    brand: "GENERIC",
    name: "Small Push Button",
    category: "Door Access",
    description: "Small Push Button (to be installed in reception) ",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 150, amount: 150, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "g-slim-pb",
    brand: "GENERIC",
    name: "Slim Push Button",
    category: "Door Access",
    description: "Slim Push Button",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 800, amount: 800, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "g-tmd01",
    brand: "ZKTECO",
    name: "TMD01",
    category: "Door Access",
    description: "Temperature Detection Module for FA210",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 9500, amount: 9500, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "g-lcd-intercom",
    brand: "GENERIC",
    name: "LCD Intercom",
    category: "Door Access",
    description: "7 inch LCD monitor, the color CMOS",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 12500, amount: 12500, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "g-proximity-card",
    brand: "GENERIC",
    name: "Proximity Card",
    category: "Door Access",
    description: "Proximity Card 125khz(Thin)",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 80, amount: 80, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "g-u-bracket",
    brand: "GENERIC",
    name: "U-Bracket",
    category: "Door Access",
    description: "U-Bracket (for frameless door)",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 1200, amount: 1200, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "g-dropbolt**",
    brand: "GENERIC",
    name: "Dropbolt**",
    category: "Door Access",
    description: "Dropbolt with L&Z Bracket**",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 8200, amount: 8200, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "g-al-u-bracket**",
    brand: "GENERIC",
    name: "Aluminum U-Bracket**",
    category: "Door Access",
    description: "Aluminum U-Bracket for Dropbolt",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 1500, amount: 1500, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "g-drop-bolt",
    brand: "GENERIC",
    name: "Drop Bolt",
    category: "Door Access",
    description: "Drop Bolt Lock for Fully Frame Less Glass Door ",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 6500, amount: 6500, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-rps",
    brand: "ZKTECO",
    name: "RPS w/ BB",
    category: "Door Access",
    description: "12Vdc 5A Regulated Power Supply (with backup battery)",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 4500, amount: 4500, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "g-rps-deviceless",
    brand: "GENERIC",
    name: "RPS deviceless",
    category: "Door Access",
    description: "12V 3A Door Access Control Power Supply for\n" +
                 "Electric Lock\n" +
                 "AC110-220V to 12VDC Power Supply Control",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 4500, amount: 4500, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 6, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-fr1200",
    brand: "ZKTECO",
    name: "FR1200",
    category: "Door Access",
    description: "Biometrics Scanner with Built-in Card Reader",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 8500, amount: 8500, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "g-k1",
    brand: "GENERIC",
    name: "K1",
    category: "Door Access",
    description: "Touch Free Push to Exit",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 1200, amount: 1200, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "g-wireless-remote",
    brand: "GENERIC",
    name: "Wireless Remote",
    category: "Door Access",
    description: "Wireless Receiver to Exit with Remote Control",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 1500, amount: 1500, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "g-emergency-key-switch",
    brand: "GENERIC",
    name: "Emergency Key Switch",
    category: "Door Access",
    description: "Emergency Key Switch",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 1500, amount: 1500, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "g-door-buzzer",
    brand: "GENERIC",
    name: "Door Buzzer",
    category: "Door Access",
    description: "Door Buzzer",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 350, amount: 350, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "g-wireless-door-bell",
    brand: "GENERIC",
    name: "Wireless Door Bell",
    category: "Door Access",
    description: "Wireless Door Bell",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 1500, amount: 1500, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "g-battery",
    brand: "GENERIC",
    name: "Battery",
    category: "Door Access",
    description: "Lead-Acid Battery 12v, 7.2Ah",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 2500, amount: 2500, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
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
const selectedItems: Map<string, SelectedItem> = new Map(); // instanceId -> SelectedItem
const selectedServicesMap: Map<string, SelectedService> = new Map();
const itemGroups: Map<string, ItemGroup> = new Map();
const itemToGroup: Map<string, string> = new Map(); // itemId -> groupId
let groupIdCounter = 0;
let productInstanceCounter = 0; // Counter for unique product instances
let currentCategory = "Biometrics"; // Current product category tab

// Order tracking for items within groups and ungrouped
const groupItemOrder: Map<string, string[]> = new Map(); // groupId -> itemIds in order
let ungroupedItemOrder: string[] = []; // itemIds for ungrouped items

// DOM Elements
const productSearchEl = document.getElementById("productSearch") as HTMLInputElement;
const productListEl = document.getElementById("productList") as HTMLDivElement;
const selectedItemsBodyEl = document.getElementById("selectedItemsBody") as HTMLTableSectionElement;
const equipmentCostTotalEl = document.getElementById("equipmentCostTotal") as HTMLTableCellElement;
const discountInputEl = document.getElementById("discountInput") as HTMLInputElement;
const installationRowEl = document.getElementById("installationRow") as HTMLTableRowElement;
const installationCostTotalEl = document.getElementById("installationCostTotal") as HTMLTableCellElement;
const vatRowEl = document.getElementById("vatRow") as HTMLTableRowElement;
const vatTotalEl = document.getElementById("vatTotal") as HTMLTableCellElement;
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
const sixColumnModeEl = document.getElementById("sixColumnMode") as HTMLInputElement;

// Render products
function renderProducts(): void {
  productListEl.innerHTML = "";

  const searchTerm = productSearchEl.value.toLowerCase().trim();
  const activeProducts = products.filter((p) => {
    if (!p.isActive || p.category !== currentCategory) return false;
    if (!searchTerm) return true;
    return p.name.toLowerCase().includes(searchTerm) || p.brand.toLowerCase().includes(searchTerm);
  });

  activeProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.productId = product.id;

    // Count how many instances of this product are selected
    const instanceCount = Array.from(selectedItems.values()).filter(
      (item) => item.product.id === product.id
    ).length;

    card.innerHTML = `
      <div class="brand">${product.brand}</div>
      <div class="name">${product.name}</div>
      <div class="original-price">PHP ${product.price.fakeAmount.toLocaleString()}</div>
      <div class="price">PHP ${product.price.amount.toLocaleString()}</div>
      ${instanceCount > 0 ? `<div class="instance-badge">${instanceCount} added</div>` : '<div class="add-hint">Click to add</div>'}
    `;

    card.addEventListener("click", () => addProduct(product));
    productListEl.appendChild(card);
  });
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
  const allItemIds = [...selectedItems.keys(), ...selectedServicesMap.keys()];
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
    <td>${item.product.brand}</td>
    <td>${item.product.name}</td>
    <td>
      <input type="number" class="price-input" value="${unitPrice}" min="0" data-product-id="${productId}">
    </td>
    <td>
      <input type="number" class="qty-input" value="${item.quantity}" min="1" data-product-id="${productId}">
    </td>
    <td>PHP ${total.toLocaleString()}</td>
    <td class="action-cell">
      ${groupActions}
      <button class="btn-remove" data-product-id="${productId}">Remove</button>
    </td>
  `;

  return row;
}

// Create a service row
function createServiceRow(selectedService: SelectedService, serviceId: string, groupId: string | null): HTMLTableRowElement {
  const unitPrice = selectedService.customPrice !== undefined ? selectedService.customPrice : selectedService.service.price;

  const row = document.createElement("tr");
  row.draggable = true;
  row.dataset.itemType = "service";
  row.dataset.itemId = serviceId;
  row.dataset.groupId = groupId || "";
  row.className = "service-row";

  // Build group action buttons
  let groupActions = "";
  if (itemGroups.size > 0) {
    if (groupId) {
      groupActions = `<button class="btn-ungroup" data-item-id="${serviceId}" title="Remove from group">Ungroup</button>`;
    } else {
      const groupOptions = Array.from(itemGroups.values())
        .map((g) => `<option value="${g.id}">${g.name}</option>`)
        .join("");
      groupActions = `<select class="group-select" data-item-id="${serviceId}">
        <option value="">Add to group...</option>
        ${groupOptions}
      </select>`;
    }
  }

  row.innerHTML = `
    <td class="drag-handle" title="Drag to reorder">${dragHandleSvg}</td>
    <td>SERVICE</td>
    <td>${selectedService.service.name}</td>
    <td>
      <input type="number" class="price-input service-price-input" value="${unitPrice}" min="0" data-service-id="${serviceId}">
    </td>
    <td>1</td>
    <td>PHP ${unitPrice.toLocaleString()}</td>
    <td class="action-cell">
      ${groupActions}
      <button class="btn-remove service-remove" data-service-id="${serviceId}">Remove</button>
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

  // Render ungrouped items first
  ungroupedItemOrder.forEach((itemId) => {
    if (selectedItems.has(itemId)) {
      const item = selectedItems.get(itemId)!;
      const row = createProductRow(item, itemId, null);
      addDragEventListeners(row);
      selectedItemsBodyEl.appendChild(row);
    } else if (selectedServicesMap.has(itemId)) {
      const service = selectedServicesMap.get(itemId)!;
      const row = createServiceRow(service, itemId, null);
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
      } else if (selectedServicesMap.has(itemId)) {
        const service = selectedServicesMap.get(itemId)!;
        const row = createServiceRow(service, itemId, groupId);
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

  // Add event listeners for product price inputs
  document.querySelectorAll(".price-input:not(.service-price-input)").forEach((input) => {
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
      renderSelectedItems();
    });
  });

  // Add event listeners for service remove buttons
  document.querySelectorAll(".service-remove").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const target = e.target as HTMLButtonElement;
      const serviceId = target.dataset.serviceId!;
      // Remove from group tracking
      itemToGroup.delete(serviceId);
      const idx = ungroupedItemOrder.indexOf(serviceId);
      if (idx > -1) ungroupedItemOrder.splice(idx, 1);
      // Remove from all group orders
      groupItemOrder.forEach((order) => {
        const i = order.indexOf(serviceId);
        if (i > -1) order.splice(i, 1);
      });
      selectedServicesMap.delete(serviceId);
      const serviceCard = document.querySelector(`.service-card[data-service-id="${serviceId}"]`);
      if (serviceCard) {
        serviceCard.classList.remove("selected");
      }
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

// Update grand total
function updateGrandTotal(): void {
  // 1. Calculate Total Equipment Cost (products only)
  let equipmentCost = 0;
  selectedItems.forEach((item) => {
    const unitPrice = item.customPrice !== undefined ? item.customPrice : item.product.price.amount;
    equipmentCost += unitPrice * item.quantity;
  });
  equipmentCostTotalEl.textContent = `PHP ${equipmentCost.toLocaleString()}`;

  // 2. Get discount
  const discount = parseInt(discountInputEl.value, 10) || 0;

  // 3. Calculate Installation/Service Cost
  let installationCost = 0;
  selectedServicesMap.forEach((selectedService) => {
    const unitPrice = selectedService.customPrice !== undefined ? selectedService.customPrice : selectedService.service.price;
    installationCost += unitPrice;
  });

  // Show/hide installation row
  if (installationCost > 0 || selectedServicesMap.size > 0) {
    installationRowEl.classList.remove("hidden");
    installationCostTotalEl.textContent = `PHP ${installationCost.toLocaleString()}`;
  } else {
    installationRowEl.classList.add("hidden");
  }

  // 4. Calculate subtotal before VAT
  const subtotal = equipmentCost - discount + installationCost;

  // 5. Calculate VAT if inclusive
  let vatAmount = 0;
  if (vatInclusiveEl.checked) {
    vatAmount = subtotal * 0.12;
    vatRowEl.classList.remove("hidden");
    vatTotalEl.textContent = `PHP ${vatAmount.toLocaleString()}`;
  } else {
    vatRowEl.classList.add("hidden");
  }

  // 6. Calculate Total Investment Cost
  const totalInvestment = subtotal + vatAmount;
  grandTotalEl.textContent = `PHP ${totalInvestment.toLocaleString()}`;
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

  // Helper to create quotation item from product/service
  const createQuotationItem = (itemId: string): QuotationItem | null => {
    if (selectedItems.has(itemId)) {
      const item = selectedItems.get(itemId)!;
      const promoPrice = item.customPrice !== undefined ? item.customPrice : item.product.price.amount;
      return {
        productId: item.product.id,
        name: item.product.name,
        brand: item.product.brand,
        category: item.product.category,
        description: item.product.description,
        specs: buildProductSpecs(item.product),
        imagePath: getProductImagePath(item.product.name),
        quantity: item.quantity,
        unit: "pc",
        unitPrice: item.product.price.fakeAmount,
        promoPrice: promoPrice,
        totalPrice: promoPrice * item.quantity,
      };
    }
    return null;
  };

  // Build ungrouped items (items not in any group)
  const ungroupedItems: QuotationItem[] = [];
  ungroupedItemOrder.forEach((itemId) => {
    const item = createQuotationItem(itemId);
    if (item) ungroupedItems.push(item);
  });

  // Build groups with their items
  const groups: QuotationGroup[] = [];
  itemGroups.forEach((group, groupId) => {
    const groupItems: QuotationItem[] = [];
    const itemsInGroup = getItemsInGroup(groupId);
    itemsInGroup.forEach((itemId) => {
      const item = createQuotationItem(itemId);
      if (item) groupItems.push(item);
    });
    if (groupItems.length > 0) {
      groups.push({
        id: group.id,
        name: group.name,
        items: groupItems,
      });
    }
  });

  // Combine all items for total calculation (ungrouped + grouped)
  const allItems: QuotationItem[] = [
    ...ungroupedItems,
    ...groups.flatMap((g) => g.items),
  ];

  // Get selected services with custom prices
  const selectedServicesList = Array.from(selectedServicesMap.values()).map((selectedService) => {
    const price = selectedService.customPrice !== undefined ? selectedService.customPrice : selectedService.service.price;
    return { name: selectedService.service.name, price: price };
  });

  const discount = parseInt(discountInputEl.value, 10) || 0;

  const data: QuotationData = {
    quoteRefNo,
    companyName,
    companyAddress: companyAddressEl.value.trim() || undefined,
    contactPerson: contactPersonEl.value.trim() || undefined,
    contactNumber: contactNumberEl.value.trim() || undefined,
    emailAddress: emailAddressEl.value.trim() || undefined,
    brochureOnly: brochureOnlyEl.checked,
    vatInclusive: vatInclusiveEl.checked,
    discount: discount > 0 ? discount : undefined,
    items: ungroupedItems,
    groups: groups.length > 0 ? groups : undefined,
    services: selectedServicesList.length > 0 ? selectedServicesList : undefined,
    sixColumnMode: sixColumnModeEl.checked,
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
  itemGroups.clear();
  itemToGroup.clear();
  groupItemOrder.clear();
  ungroupedItemOrder = [];
  groupIdCounter = 0;
  productInstanceCounter = 0;
  quoteRefNoEl.value = "";
  companyNameEl.value = "";
  companyAddressEl.value = "";
  contactPersonEl.value = "";
  contactNumberEl.value = "";
  emailAddressEl.value = "";
  notesEl.value = "";
  brochureOnlyEl.checked = false;
  vatInclusiveEl.checked = false;
  discountInputEl.value = "0";
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

// Add Group button
const addGroupBtnEl = document.getElementById("addGroupBtn") as HTMLButtonElement;
addGroupBtnEl.addEventListener("click", () => {
  const groupName = `Group ${itemGroups.size + 1}`;
  createGroup(groupName);
  renderSelectedItems();
});

// VAT checkbox listener - update totals when changed
vatInclusiveEl.addEventListener("change", () => {
  updateGrandTotal();
});

// Discount input listener - update totals when changed
discountInputEl.addEventListener("input", () => {
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

// Product category tabs
const productTabs = document.querySelectorAll(".product-tab");
productTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const category = (tab as HTMLElement).dataset.category;
    if (category === "biometrics") {
      switchCategory("Biometrics");
    } else if (category === "door-access") {
      switchCategory("Door Access");
    }
  });
});

productSearchEl.addEventListener("input", () => renderProducts());

// Initial render
loadSavedTheme();
renderProducts();
renderSelectedItems();
