// Base product catalog (Biometrics, Door Access, UTIME, Virtual Server, Smart Locks).
// CCTV (Dahua) products live in src/data/cctv.ts.
// This file is loaded as a classic script before renderer.js.
// The Product interface is declared in renderer.ts — at compile time, tsc sees
// it from there because both files are scripts (no imports/exports), so they
// share the same global TypeScript scope.
const baseProducts: Product[] = [
  {
    id: "zk-lx50",
    brand: "ZKTECO",
    name: "LX50",
    category: "Biometrics",
    description: " ~ 500 User capacity\n"+
                 " ~ 500 Fingerprint capacity\n"+
                 " ~ 50,000 transaction logs capacity\n"+
                 " ~ USB flash disk download\n"+
                 " ~ Dimension: 106x60x42mm",
    capacity: { fingerprint: 500, card: 0, face: 0, transaction: 50000 },
    download: { lan: false, usb: true, wifi: false },
    price: { fakeAmount: 10900, amount: 5700, currency: "PHP" },
    withADMS: false,
    dimension: "106x60x42mm",
    warranty: { duration: 18, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-tx628",
    brand: "ZKTECO",
    name: "TX628",
    category: "Biometrics",
    description: " ~ 3,200 User capacity\n"+
                 " ~ 3,200 Fingerprint capacity\n"+
                 " ~ 120,000 transaction logs capacity\n"+
                 " ~ network connectivity\n"+
                 " ~ USB flash disk download\n"+
                 " ~ built-in scheduler bell\n"+
                 " ~ Audio Visual Indication and rejection of Fingers\n"+
                 " ~ Dimension: 180x135x37mm",
    capacity: { fingerprint: 3200, card: 3200, face: 0, transaction: 120000 },
    download: { lan: true, usb: true, wifi: false },
    price: { fakeAmount: 14900, amount: 8900, currency: "PHP" },
    withADMS: false,
    dimension: "180x135x37mm",
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-sc700",
    brand: "ZKTECO",
    name: "SC700",
    category: "Biometrics",
    description: " ~ 30,000 Card Capacity\n"+
                 " ~ 100,000 Logs Capacity\n"+
                 " ~ Network Connectivity/ USB Host\n"+
                 " ~ Support Magnetic Contact\n"+
                 " ~ 125khz RFID\n"+
                 " ~ Dimension: 106x104x36mm",
    capacity: { fingerprint: 0, card: 30000, face: 0, transaction: 100000 },
    download: { lan: true, usb: true, wifi: false },
    price: { fakeAmount: 13500, amount: 9500, currency: "PHP" },
    withADMS: false,
    dimension: "106x104x36mm",
    warranty: { duration: 18, unit: "months" },
    isActive: true,
  },
  {
    id: "gt-t8",
    brand: "GRANDING",
    name: "T8",
    category: "Biometrics",
    description: " ~ 3000 Fingerprint capacity\n"+
                 " ~ 3000 card capacity\n"+
                 " ~ 100,000 transaction logs capacity\n"+
                 " ~ network connectivity\n"+
                 " ~ USB flash disk download\n"+
                 " ~ built-in scheduler bell\n"+
                 " ~ Audio Visual Indication and rejection of Fingers\n"+
                 " ~ Dimension: 108x140x30mm\n"+
                 " ~ with ADMS",
    capacity: { fingerprint: 3000, card: 3000, face: 0, transaction: 100000 },
    download: { lan: true, usb: true, wifi: false },
    price: { fakeAmount: 15900, amount: 11200, currency: "PHP" },
    withADMS: true,
    dimension: "108x140x30mm",
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-k40",
    brand: "ZKTECO",
    name: "K40",
    category: "Biometrics",
    description: " ~ 1,000 Fingerprint capacity\n"+
                 " ~ 80,000 transaction logs capacity\n"+
                 " ~ network connectivity\n"+
                 " ~ USB flash disk download\n"+
                 " ~ employee self service-query\n"+
                 " ~ built-in backup battery\n"+
                 " ~ Dimension: 185x140x30\n"+
                 " ~ with ADMS",
    capacity: { fingerprint: 1000, card: 0, face: 0, transaction: 80000 },
    download: { lan: true, usb: true, wifi: false },
    price: { fakeAmount: 13900, amount: 10500, currency: "PHP" },
    withADMS: true,
    dimension: "185x140x30mm",
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "gt-fa1000",
    brand: "GRANDING",
    name: "FA1000",
    category: "Biometrics",
    description: " ~ 4.3 inch Touch Screen\n"+
                 " ~ 1,000 User Capacity\n"+
                 " ~ 500 Face Capacity\n"+
                 " ~ 1,000 Card Capacity\n"+
                 " ~ 150,000 Transaction Logs Capacity\n"+
                 " ~ TCP/IP, WIFI\n"+
                 " ~ Standard Function: ADMS, Work Code, Self\n"+
                 " Service Query, Automatic Status, T9 Input, \n"+
                 " Camera, 9 Digit User",
    capacity: { fingerprint: 0, card: 1000, face: 500, transaction: 150000 },
    download: { lan: true, usb: false, wifi: true },
    price: { fakeAmount: 13200, amount: 9200, currency: "PHP" },
    withADMS: true,
    dimension: "",
    warranty: { duration: 18, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-bk100",
    brand: "ZKTECO",
    name: "BK100",
    category: "Biometrics",
    description: " ~ 1000 User Capacity\n"+
                 " ~ 800 Face Capacity\n"+
                 " ~ 3,000 fingerprint templates capacity\n"+
                 " ~ 250,000 transaction logs capacity\n"+
                 " ~ network//USB flash disk   download\n"+
                 " ~ Standard Function DSLT, Scheduled bell, Self \n"+
                 " ~ Service Query, Automatic status switch, Photo Id\n"+
                 " ~ Dimension: 161x93x152mm",
    capacity: { fingerprint: 3000, card: 0, face: 800, transaction: 250000 },
    download: { lan: true, usb: true, wifi: false },
    price: { fakeAmount: 16500, amount: 9200, currency: "PHP" },
    withADMS: false,
    dimension: "161x93x152mm",
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-mb10",
    brand: "ZKTECO",
    name: "MB10",
    category: "Biometrics",
    description: " ~ Display: 2.8-inch TFT Screen\n"+
                 " ~ Face Capacity: 100\n"+
                 " ~ Fingerprint Capacity: 500\n"+
                 " ~ Transactions: 50,000\n"+
                 " ~ Communication: TCP/IP, USB Host, WIFI\n"+
                 " ~ Hardware: 1GHz Dual-Core CPU, 256MB RAM,\n"+
                 " ~ 1MP Binocular Camera\n"+
                 " ~ Operation System: Linux\n"+
                 " ~ Facial Recognition Speed: ≤1s\n"+
                 " ~ Supported Software: BioTime 8.0",
    capacity: { fingerprint: 500, card: 0, face: 100, transaction: 50000 },
    download: { lan: true, usb: true, wifi: true },
    price: { fakeAmount: 17900, amount: 10900, currency: "PHP" },
    withADMS: true,
    dimension: "",
    warranty: { duration: 18, unit: "months" },
    isActive: true,
    isDeprecated: true,
  },
  {
    id: "gt-fa110",
    brand: "GRANDING",
    name: "FA110",
    category: "Biometrics",
    description: " ~ 2.8 Inch TFT Screen\n"+
                 " ~ 500 Face Capacity\n"+
                 " ~ 500 fingerprint templates capacity\n"+
                 " ~ 500 Card capacity\n"+
                 " ~ 50,000 transaction logs capacity\n"+
                 " ~ network//USB Host/ WIFI\n"+
                 " ~ Standard Function DSLT, Scheduled bell, Self\n"+
                 " ~ Service Query, Automatic status switch, Photo Id\n"+
                 " ~ Adms\n"+
                 " ~ Dimension: 161x93x152mm",
    capacity: { fingerprint: 500, card: 500, face: 500, transaction: 50000 },
    download: { lan: true, usb: true, wifi: true },
    price: { fakeAmount: 17900, amount: 10500, currency: "PHP" },
    withADMS: true,
    dimension: "161x93x152mm",
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-senseface2a",
    brand: "ZKTECO",
    name: "SenseFace 2A",
    category: "Biometrics",
    withExtras: true,
    description: " ~ Display: 2.4-inch Display with a Physical Keypad\n"+
                 " ~ 1000 Face Capacity\n"+
                 " ~ 1000 fingerprint templates capacity\n"+
                 " ~ 1000 Card capacity\n"+
                 " ~ 100,000 transaction logs capacity\n"+
                 " ~ Communication: TCP/IP、USB Host, Wi-Fi (optional)\n"+
                 " ~ Memory: 512MB RAM / 8GB ROM\n"+
                 " ~ DST, Photo Capture, Event Photo Capture, Up to 14-digit User ID\n"+
                 " ~ Adms\n"+
                 " ~ Dimension: 205.20*74.19*33.30mm",
    capacity: { fingerprint: 1000, card: 1000, face: 1000, transaction: 50000 },
    download: { lan: true, usb: true, wifi: true },
    price: { fakeAmount: 15800, amount: 11000, currency: "PHP" },
    withADMS: true,
    dimension: "205.20*74.19*33.30mm",
    warranty: { duration: 18, unit: "months" },
    isActive: true,
  },
  {
    id: "gt-f04",
    brand: "GRANDING",
    name: "F04",
    category: "Biometrics",
    withExtras: true,
    description: " ~ 1500 Fingerprint Templates Capacity\n"+
                 " ~ 5000 Card Capacity\n"+
                 " ~ 100,000 Transaction logs Capacity\n"+
                 " ~ Network Connectivity\n"+
                 " ~ USB host\n"+
                 " ~ support magnetic contact\n"+
                 " ~ 125khz RFID",
    capacity: { fingerprint: 1500, card: 5000, face: 0, transaction: 100000 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 14300, amount: 11000, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-sf400",
    brand: "ZKTECO",
    name: "SF400",
    category: "Biometrics",
    withExtras: true,
    description: " ~ 1500 Fingerprint Templates Capacity\n"+
                 " ~ 5000 Card Capacity\n"+
                 " ~ 100,000 Transaction logs Capacity\n"+
                 " ~ Network Connectivity\n"+
                 " ~ USB host\n"+
                 " ~ support magnetic contact\n"+
                 " ~ 125khz RFID",
    capacity: { fingerprint: 1500, card: 5000, face: 0, transaction: 100000 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 14300, amount: 11000, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 18, unit: "months" },
    isActive: true,
    isDeprecated: true,
  },
  {
    id: "zk-f22",
    brand: "ZKTECO",
    name: "F22",
    category: "Biometrics",
    description: " ~ 3000 fingerprint templates\n"+
                 " ~ 5,000 card capacity\n"+
                 " ~ 50,000 transaction logs capacity\n"+
                 " ~ built-in EM card reader\n"+
                 " ~ network/USB flash disk download/ WI-FI\n"+
                 " ~ support multiple Time Zone\n"+
                 " ~ support magnetic contact\n"+
                 " ~ Standard Function: 9 digital ID, Automatic\n"+
                 " ~ Status Switch, Anti-Passback, Scheduler Bell\n"+
                 " ~ 125khz RFID\n"+
                 " ~ Dimension 78x158.5x41m",
    capacity: { fingerprint: 3000, card: 5000, face: 0, transaction: 50000 },
    download: { lan: true, usb: true, wifi: true },
    price: { fakeAmount: 19800, amount: 14700, currency: "PHP" },
    withADMS: false,
    dimension: "78x158.5x41mm",
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-sf200",
    brand: "ZKTECO",
    name: "SF200",
    category: "Biometrics",
    description: " ~ 2000 Fingerprint Templates Capacity\n"+
                 " ~ 5,000 Card Capacity\n"+
                 " ~ 100,000 Transaction logs Capacity\n"+
                 " ~ Network Connectivity/ Wi-Fi \n"+
                 " ~ Support Multiple Time Zone\n"+
                 " ~ support magnetic contact\n"+
                 " ~ With Power Adapter",
    capacity: { fingerprint: 2000, card: 5000, face: 0, transaction: 100000 },
    download: { lan: true, usb: false, wifi: true },
    price: { fakeAmount: 15700, amount: 11500, currency: "PHP" },
    withADMS: false,
    dimension: "",
    warranty: { duration: 36, unit: "months" },
    isActive: true,
    isDeprecated: true,
  },
  {
    id: "zk-iface3",
    brand: "ZKTECO",
    name: "IFACE3",
    category: "Biometrics",
    description: " ~ 1,500 Face Capacity\n"+
                 " ~ 4,000 fingerprint templates capacity\n"+
                 " ~ 5,000 Card Capacity\n"+
                 " ~ 100,000 transaction logs capacity\n"+
                 " ~ network//USB flash disk download\n"+
                 " ~ Automatic Switch Status\n"+
                 " ~ power adapter\n"+
                 " ~ with ADMS",
    capacity: { fingerprint: 4000, card: 5000, face: 1500, transaction: 100000 },
    download: { lan: true, usb: true, wifi: false },
    price: { fakeAmount: 19400, amount: 14000, currency: "PHP" },
    withADMS: true,
    dimension: "",
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-mb460",
    brand: "ZKTECO",
    name: "MB460",
    category: "Biometrics",
    description: " ~ 1,500 Face Capacity\n"+
                 " ~ 2,000 fingerprint templates capacity\n"+
                 " ~ 5,000 Card Capacity\n"+
                 " ~ 100,000 transaction logs capacity\n"+
                 " ~ network//USB flash disk download\n"+
                 " ~ Automatic Switch Status\n"+
                 " ~ Dimension: 167x148x32mm\n"+
                 " ~ with ADMS",
    capacity: { fingerprint: 2000, card: 5000, face: 1500, transaction: 100000 },
    download: { lan: true, usb: true, wifi: false },
    price: { fakeAmount: 21200, amount: 14800, currency: "PHP" },
    withADMS: true,
    dimension: "167x148x32mm",
    warranty: { duration: 36, unit: "months" },
    isActive: true,
    isDeprecated: true,
  },
  {
    id: "gt-fa210",
    brand: "GRANDING",
    name: "FA210",
    category: "Biometrics",
    description: " ~ 1,500 Face Capacity\n"+
                 " ~ 2,000 fingerprint templates capacity\n"+
                 " ~ 2,000 Card Capacity\n"+
                 " ~ 100,000 transaction logs capacity\n"+
                 " ~ network//USB flash disk download\n"+
                 " ~ Automatic Switch Status\n"+
                 " ~ with ADMS",
    capacity: { fingerprint: 2000, card: 2000, face: 1500, transaction: 100000 },
    download: { lan: true, usb: true, wifi: false },
    price: { fakeAmount: 22500, amount: 14800, currency: "PHP" },
    withADMS: true,
    dimension: "",
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "gt-fa210w",
    brand: "GRANDING",
    name: "FA210w",
    category: "Biometrics",
    description: " ~ 1,500 Face Capacity\n"+
                 " ~ 2,000 fingerprint templates capacity\n"+
                 " ~ 2,000 Card Capacity\n"+
                 " ~ 100,000 transaction logs capacity\n"+
                 " ~ network//USB flash disk download\n"+
                 " ~ Automatic Switch Status\n"+
                 " ~ with ADMS",
    capacity: { fingerprint: 2000, card: 2000, face: 1500, transaction: 100000 },
    download: { lan: true, usb: true, wifi: true },
    price: { fakeAmount: 24000, amount: 17000, currency: "PHP" },
    withADMS: true,
    dimension: "",
    warranty: { duration: 36, unit: "months" },
    isActive: true,
    isDeprecated: true,
  },
  {
    id: "zk-xface100",
    brand: "ZKTECO",
    name: "XFACE100",
    category: "Biometrics",
    description: " ~ 1,500 Face Capacity\n"+
                 " ~ 2,000 fingerprint templates capacity\n"+
                 " ~ 100,000 transaction logs capacity\n"+
                 " ~ network//USB flash disk download\n"+
                 " ~ WIFI\n"+
                 " ~ ADMS\n"+
                 " ~ Automatic Switch Status",
    capacity: { fingerprint: 2000, card: 0, face: 1500, transaction: 100000 },
    download: { lan: true, usb: true, wifi: true },
    price: { fakeAmount: 27000, amount: 20900, currency: "PHP" },
    withADMS: true,
    dimension: "",
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-uface800",
    brand: "ZKTECO",
    name: "UFACE800",
    category: "Biometrics",
    description: " ~ Touchscreen display with heat-sensitive\n"+
                 " function keys\n"+
                 " ~ 3,000 face templates capacity\n"+
                 " ~ 4,000 fingerprint templates capacity\n"+
                 " ~ 120,000 transaction logs capacity\n"+
                 " ~ network connectivity\n"+
                 " ~ wifi(optional)\n"+
                 " ~ USB flash disk download\n"+
                 " ~ built-in scheduler bell\n"+
                 " ~ Dimension: 194x165x86mm",
    capacity: { fingerprint: 4000, card: 0, face: 3000, transaction: 120000 },
    download: { lan: true, usb: true, wifi: true },
    price: { fakeAmount: 32900, amount: 22800, currency: "PHP" },
    withADMS: true,
    dimension: "194x156x86mm",
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "gt-facepro-4",
    brand: "GRANDING",
    name: "FACEPRO 4",
    category: "Biometrics",
    description: " ~ 4 inch TFT Color Touch LED Screen (480 x 800)\n"+
                 " ~ 6,000 card templates capacity\n"+
                 " ~ 3,000 face templates capacity\n"+
                 " ~ 3,000 fingerprint templates capacity\n"+
                 " ~ 200,000 transactions logs capacity\n"+
                 " ~ network connectivity\n"+
                 " ~ built-in scheduler bell\n"+
                 " ~ with power adapter\n"+
                 " ~ Dimension: 185x88mm",
    capacity: { fingerprint: 3000, card: 6000, face: 3000, transaction: 200000 },
    download: { lan: true, usb: false, wifi: true },
    price: { fakeAmount: 25900, amount: 19700, currency: "PHP" },
    withADMS: true,
    dimension: "185x88x20mm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-speedfacev3l",
    brand: "ZKTECO",
    name: "SPEEDFACE V3L",
    category: "Biometrics",
    description: " ~ 2.4-inch touch Screen\n"+
                 " ~ 3,000 card templates capacity\n"+
                 " ~ 3,000 face templates capacity\n"+
                 " ~ 3,000 fingerprint templates capacity\n"+
                 " ~ 200,000 transactions logs capacity\n"+
                 " ~ network connectivity\n"+
                 " ~ wifi(optional)\n"+
                 " ~ built-in scheduler bell\n"+
                 " ~ Dimension: 185x59x20mm",
    capacity: { fingerprint: 3000, card: 3000, face: 3000, transaction: 200000 },
    download: { lan: true, usb: false, wifi: true },
    price: { fakeAmount: 18500, amount: 12900, currency: "PHP" },
    withADMS: true,
    dimension: "185x59x20mm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
    isDeprecated: true,
  },
  {
    id: "zk-speedfacev5l",
    brand: "ZKTECO",
    name: "SPEEDFACE V5L",
    category: "Biometrics",
    description: " Hardware: LCD 5-inch touch screen\n"+
                 " Operating System: Linux\n"+
                 " CPU: Quad-core A17 1.8GHz\n"+
                 " Memory: 2G RAM / 16G ROM\n"+
                 " Camera: 2MP dual lens\n"+
                 " Communication: TCP / IP, Wi-Fi (optional) RS232, RS485 for external\n"+
                 " reader Wiegand Input/Output\n"+
                 " Accessory: Door lock, door sensor, alarm, exit button and auxiliary input\n"+
                 " Audio: Loudspeaker\n"+
                 " Capacity Users: 10,000\n"+
                 " Face Template: 10,000\n"+
                 " Fingerprint: 10,000 \n"+
                 " RFID: 10,000 \n"+
                 " Log: 100,000\n"+
                 " Operating Voltage 12V 3A\n"+
                 " Temperature -10°C ~ 45°C\n"+
                 " Humidity 10% ~ 90%\n"+
                 " Size:203×92×21.5mm (Length×Width×Thickness)",
    capacity: { fingerprint: 3000, card: 3000, face: 3000, transaction: 200000 },
    download: { lan: true, usb: false, wifi: true },
    price: { fakeAmount: 36000, amount: 25000, currency: "PHP" },
    withADMS: true,
    dimension: "185x59x20mm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },

  // Door Access Products
  {
    id: "g-m06",
    brand: "GENERIC",
    name: "M06",
    category: "Door Access",
    description: " ~ 2000 Users, supports CARDS, PIN, CARD+PIN\n"+
                 " ~ Strong Zinc Alloy (Shock, Fire and Tamper resistant)\n"+
                 " ~ Support Magnetic Contact\n"+
                 " ~ Fast Operation Speed, 20ms with 2000 users\n"+
                 " ~ 125khz RFID\n"+
                 " ~ Red, Yellow and Green LED Display\n"+
                 " ~ No Logs",
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
    description: " ~ 500 Fingerprint Templates Capacity\n"+
                 " ~ 500 Card Capacity\n"+
                 " ~ Read Fingerprint/password/RFID Card\n"+
                 " ~ Rugged and Elegant Design\n"+
                 " ~ support magnetic contact\n"+
                 " ~ 125khz RFID\n"+
                 " ~ No Logs",
    capacity: { fingerprint: 500, card: 500, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 7900, amount: 7900, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-sc700",
    brand: "ZKTECO",
    name: "SC700",
    category: "Door Access",
    withExtras: true,
    description: " ~ 30,000 Card Capacity\n"+
                 " ~ 100,000 Logs Capacity\n"+
                 " ~ Network Connectivity/ USB Host\n"+
                 " ~ Support Magnetic Contact\n"+
                 " ~ 125khz RFID\n"+
                 " ~ Dimension: 106x104x36mm",
    capacity: { fingerprint: 0, card: 30000, face: 0, transaction: 100000 },
    download: { lan: true, usb: true, wifi: false },
    price: { fakeAmount: 13500, amount: 13500, currency: "PHP" },
    withADMS: false,
    dimension: "106x104x36mm",
    warranty: { duration: 18, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-k40",
    brand: "ZKTECO",
    name: "K40",
    category: "Door Access",
    description: " ~ 1,000 Fingerprint capacity\n"+
                 " ~ 80,000 transaction logs capacity\n"+
                 " ~ network connectivity\n"+
                 " ~ USB flash disk download\n"+
                 " ~ employee self service-query\n"+
                 " ~ built-in backup battery\n"+
                 " ~ Dimension: 185x140x30\n"+
                 " ~ with ADMS",
    capacity: { fingerprint: 1000, card: 0, face: 0, transaction: 80000 },
    download: { lan: true, usb: true, wifi: false },
    price: { fakeAmount: 15000, amount: 15000, currency: "PHP" },
    withADMS: true,
    dimension: "185x140x30mm",
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-f7c",
    brand: "ZKTECO",
    name: "F7C",
    category: "Door Access",
    description: " ~ Placeholder description line 1\n"+
                 " ~ Placeholder description line 2\n"+
                 " ~ Placeholder description line 3",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 0, amount: 0, currency: "PHP" },
    withADMS: false,
    dimension: "",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "gt-fa1000",
    brand: "GRANDING",
    name: "FA1000",
    category: "Door Access",
    withExtras: true,
    description: " ~ 4.3 inch Touch Screen\n"+
                 " ~ 1,000 User Capacity\n"+
                 " ~ 500 Face Capacity\n"+
                 " ~ 1,000 Card Capacity\n"+
                 " ~ 150,000 Transaction Logs Capacity\n"+
                 " ~ TCP/IP, WIFI\n"+
                 " ~ Standard Function: ADMS, Work Code, Self\n"+
                 " Service Query, Automatic Status, T9 Input, \n"+
                 " Camera, 9 Digit User",
    capacity: { fingerprint: 0, card: 1000, face: 500, transaction: 150000 },
    download: { lan: true, usb: false, wifi: true },
    price: { fakeAmount: 13200, amount: 13200, currency: "PHP" },
    withADMS: true,
    dimension: "",
    warranty: { duration: 18, unit: "months" },
    isActive: true,
  },
  {
    id: "gt-fa110",
    brand: "GRANDING",
    name: "FA110",
    category: "Door Access",
    withExtras: true,
    description: " ~ 2.8 Inch TFT Screen\n"+
                 " ~ 500 Face Capacity\n"+
                 " ~ 500 fingerprint templates capacity\n"+
                 " ~ 500 Card capacity\n"+
                 " ~ 50,000 transaction logs capacity\n"+
                 " ~ network//USB Host/ WIFI\n"+
                 " ~ Standard Function DSLT, Scheduled bell, Self\n"+
                 " ~ Service Query, Automatic status switch, Photo Id\n"+
                 " ~ Adms\n"+
                 " ~ Dimension: 161x93x152mm",
    capacity: { fingerprint: 500, card: 500, face: 500, transaction: 50000 },
    download: { lan: true, usb: true, wifi: true },
    price: { fakeAmount: 15000, amount: 15000, currency: "PHP" },
    withADMS: true,
    dimension: "161x93x152mm",
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-senseface2a",
    brand: "ZKTECO",
    name: "SenseFace 2A",
    category: "Door Access",
    withExtras: true,
    description: " ~ Display: 2.4-inch Display with a Physical Keypad\n"+
                 " ~ 1000 Face Capacity\n"+
                 " ~ 1000 fingerprint templates capacity\n"+
                 " ~ 1000 Card capacity\n"+
                 " ~ 100,000 transaction logs capacity\n"+
                 " ~ Communication: TCP/IP、USB Host, Wi-Fi (optional)\n"+
                 " ~ Memory: 512MB RAM / 8GB ROM\n"+
                 " ~ DST, Photo Capture, Event Photo Capture, Up to 14-digit User ID\n"+
                 " ~ Adms\n"+
                 " ~ Dimension: 205.20*74.19*33.30mm",
    capacity: { fingerprint: 1000, card: 1000, face: 1000, transaction: 50000 },
    download: { lan: true, usb: true, wifi: true },
    price: { fakeAmount: 22600, amount: 15800, currency: "PHP" },
    withADMS: true,
    dimension: "205.20*74.19*33.30mm",
    warranty: { duration: 18, unit: "months" },
    isActive: true,
  },
  {
    id: "gt-f04",
    brand: "GRANDING",
    name: "F04",
    category: "Door Access",
    withExtras: true,
    description: " ~ 1500 Fingerprint Templates Capacity\n"+
                 " ~ 5000 Card Capacity\n"+
                 " ~ 100,000 Transaction logs Capacity\n"+
                 " ~ Network Connectivity\n"+
                 " ~ USB host\n"+
                 " ~ support magnetic contact\n"+
                 " ~ 125khz RFID",
    capacity: { fingerprint: 1500, card: 5000, face: 0, transaction: 100000 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 14300, amount: 14300, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-sf400",
    brand: "ZKTECO",
    name: "SF400",
    category: "Door Access",
    withExtras: true,
    description: " ~ 1500 Fingerprint Templates Capacity\n"+
                 " ~ 5000 Card Capacity\n"+
                 " ~ 100,000 Transaction logs Capacity\n"+
                 " ~ Network Connectivity\n"+
                 " ~ USB host\n"+
                 " ~ support magnetic contact\n"+
                 " ~ 125khz RFID",
    capacity: { fingerprint: 1500, card: 5000, face: 0, transaction: 100000 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 14300, amount: 14300, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 18, unit: "months" },
    isActive: true,
    isDeprecated: true,
  },
  {
    id: "zk-sf200",
    brand: "ZKTECO",
    name: "SF200",
    category: "Door Access",
    withExtras: true,
    description: " ~ 2000 Fingerprint Templates Capacity\n"+
                 " ~ 5,000 Card Capacity\n"+
                 " ~ 100,000 Transaction logs Capacity\n"+
                 " ~ Network Connectivity/ Wi-Fi \n"+
                 " ~ Support Multiple Time Zone\n"+
                 " ~ support magnetic contact\n"+
                 " ~ With Power Adapter",
    capacity: { fingerprint: 2000, card: 5000, face: 0, transaction: 100000 },
    download: { lan: true, usb: false, wifi: true },
    price: { fakeAmount: 15700, amount: 15700, currency: "PHP" },
    withADMS: false,
    dimension: "",
    warranty: { duration: 36, unit: "months" },
    isActive: true,
    isDeprecated: true,
  },
  {
    id: "zk-f22",
    brand: "ZKTECO",
    name: "F22",
    category: "Door Access",
    withExtras: true,
    description: " ~ 3000 fingerprint templates\n"+
                 " ~ 5,000 card capacity\n"+
                 " ~ 50,000 transaction logs capacity\n"+
                 " ~ built-in EM card reader\n"+
                 " ~ network/USB flash disk download/ WI-FI\n"+
                 " ~ support multiple Time Zone\n"+
                 " ~ support magnetic contact\n"+
                 " ~ Standard Function: 9 digital ID, Automatic\n"+
                 " ~ Status Switch, Anti-Passback, Scheduler Bell\n"+
                 " ~ 125khz RFID\n"+
                 " ~ Dimension 78x158.5x41m",
    capacity: { fingerprint: 3000, card: 5000, face: 0, transaction: 50000 },
    download: { lan: true, usb: true, wifi: true },
    price: { fakeAmount: 19800, amount: 19800, currency: "PHP" },
    withADMS: false,
    dimension: "78x158.5x41mm",
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-tf1700",
    brand: "ZKTECO",
    name: "TF1700",
    category: "Door Access",
    withExtras: true,
    description: " ~ 1500 fingerprint templates\n"+
                 " ~ 10,000 card capacity\n"+
                 " ~ 100,000 transaction logs capacity\n"+
                 " ~ built-in EM card reader\n"+
                 " ~ network/USB flash disk download\n"+
                 " ~ support magnetic contact\n"+
                 " ~ support magnetic contact (door left open alarm)\n"+
                 " ~ embedded door bell button\n"+
                 " ~ Wiegand support\n"+
                 " ~ Anti-Passback function\n"+
                 " ~ IP65 Rating Waterproof and Dustproof\n"+
                 " ~ 125khz RFID\n",
    capacity: { fingerprint: 1500, card: 10000, face: 0, transaction: 100000 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 19700, amount: 19700, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-mb460",
    brand: "ZKTECO",
    name: "MB460",
    category: "Door Access",
    withExtras: true,
    description: " ~ 1,500 Face Capacity\n"+
                 " ~ 2,000 fingerprint templates capacity\n"+
                 " ~ 5,000 Card Capacity\n"+
                 " ~ 100,000 transaction logs capacity\n"+
                 " ~ network//USB flash disk download\n"+
                 " ~ Automatic Switch Status\n"+
                 " ~ Dimension: 167x148x32mm\n"+
                 " ~ with ADMS",
    capacity: { fingerprint: 2000, card: 5000, face: 1500, transaction: 100000 },
    download: { lan: true, usb: true, wifi: false },
    price: { fakeAmount: 21200, amount: 21200, currency: "PHP" },
    withADMS: true,
    dimension: "167x148x32mm",
    warranty: { duration: 36, unit: "months" },
    isActive: true,
    isDeprecated: true
  },
  {
    id: "zk-iface3",
    brand: "ZKTECO",
    name: "IFACE3",
    category: "Door Access",
    withExtras: true,
    description: " ~ 1,500 Face Capacity\n"+
                 " ~ 4,000 fingerprint templates capacity\n"+
                 " ~ 5,000 Card Capacity\n"+
                 " ~ 100,000 transaction logs capacity\n"+
                 " ~ network//USB flash disk download\n"+
                 " ~ Automatic Switch Status\n"+
                 " ~ power adapter\n"+
                 " ~ with ADMS",
    capacity: { fingerprint: 4000, card: 5000, face: 1500, transaction: 100000 },
    download: { lan: true, usb: true, wifi: false },
    price: { fakeAmount: 19400, amount: 19400, currency: "PHP" },
    withADMS: true,
    dimension: "",
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "gt-fa210",
    brand: "GRANDING",
    name: "FA210",
    category: "Door Access",
    withExtras: true,
    description: " ~ 1,500 Face Capacity\n"+
                 " ~ 2,000 fingerprint templates capacity\n"+
                 " ~ 2,000 Card Capacity\n"+
                 " ~ 100,000 transaction logs capacity\n"+
                 " ~ network//USB flash disk download\n"+
                 " ~ Automatic Switch Status\n"+
                 " ~ with ADMS",
    capacity: { fingerprint: 2000, card: 2000, face: 1500, transaction: 100000 },
    download: { lan: true, usb: true, wifi: false },
    price: { fakeAmount: 22500, amount: 22500, currency: "PHP" },
    withADMS: true,
    dimension: "",
    warranty: { duration: 36, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-speedfacev5l",
    brand: "ZKTECO",
    name: "SPEEDFACE V5L",
    category: "Door Access",
    description: " Hardware: LCD 5-inch touch screen\n"+
                 " Operating System: Linux\n"+
                 " CPU: Quad-core A17 1.8GHz\n"+
                 " Memory: 2G RAM / 16G ROM\n"+
                 " Camera: 2MP dual lens\n"+
                 " Communication: TCP / IP, Wi-Fi (optional) RS232, RS485 for external\n"+
                 " reader Wiegand Input/Output\n"+
                 " Accessory: Door lock, door sensor, alarm, exit button and auxiliary input\n"+
                 " Audio: Loudspeaker\n"+
                 " Capacity Users: 10,000\n"+
                 " Face Template: 10,000\n"+
                 " Fingerprint: 10,000 \n"+
                 " RFID: 10,000 \n"+
                 " Log: 100,000\n"+
                 " Operating Voltage 12V 3A\n"+
                 " Temperature -10°C ~ 45°C\n"+
                 " Humidity 10% ~ 90%\n"+
                 " Size:203×92×21.5mm (Length×Width×Thickness)",
    capacity: { fingerprint: 3000, card: 3000, face: 3000, transaction: 200000 },
    download: { lan: true, usb: false, wifi: true },
    price: { fakeAmount: 36000, amount: 36000, currency: "PHP" },
    withADMS: true,
    dimension: "185x59x20mm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "g-dems",
    brand: "GENERIC",
    name: "Door Exit Metal Square",
    category: "Door Access",
    description: " For Door Access Control Panel",
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
    uiName: "Magnetic Lock",
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
    warranty: { duration: 6, unit: "months" },
    isActive: true,
  },
  {
    id: "g-al-280pzpl",
    brand: "GENERIC",
    name: "AL-280PZ/PL",
    uiName: "Z&L Bracket",
    category: "Door Access",
    description: " Z&L bracket for AL280",
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
    description: " Emergency Break Glass",
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
    description: " Small Push Button (to be installed in reception) ",
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
    description: " Slim Push Button",
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
    description: " Temperature Detection Module for FA210",
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
    description: " 7 inch LCD monitor, the color CMOS",
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
    description: " Proximity Card 125khz(Thin)",
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
    description: " U-Bracket (for frameless door)",
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
    description: " Dropbolt with L&Z Bracket**",
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
    description: " Aluminum U-Bracket for Dropbolt",
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
    description: " Drop Bolt Lock for Fully Frame Less Glass Door ",
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
    uiName: "RPS with Backup Battery",
    category: "Door Access",
    description: " 12Vdc 5A Regulated Power Supply (with backup battery)",
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
    description: " 12V 3A Door Access Control Power Supply for\n" +
                 " Electric Lock\n" +
                 " AC110-220V to 12VDC Power Supply Control",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 3800, amount: 3800, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 6, unit: "months" },
    isActive: true,
  },
  {
    id: "zk-fr1200",
    brand: "ZKTECO",
    name: "FR1200",
    category: "Door Access",
    description: " Biometrics Scanner with Built-in Card Reader",
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
    uiName: "Touch Free Exit",
    category: "Door Access",
    description: " Touch Free Push to Exit",
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
    description: " Wireless Receiver to Exit with Remote Control",
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
    description: " Emergency Key Switch",
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
    description: " Door Buzzer",
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
    description: " Wireless Door Bell",
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
    description: " Lead-Acid Battery 12v, 7.2Ah",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 2500, amount: 2500, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },

  // UTIME SOFTWARE
  {
    id: "gt-utm-p010",
    brand: "GRANDING",
    name: "UTM-P010",
    category: "UTIME",
    description: " Maximum Device Qty: 10\n"+
                 " Maximum User: 3000\n"+
                 " App Account: 1",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: true, usb: false, wifi: false },
    price: { fakeAmount: 24800, amount: 19700, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "gt-utm-p020",
    brand: "GRANDING",
    name: "UTM-P020",
    category: "UTIME",
    description: " Maximum Device Qty: 20\n"+
                 " Maximum User: 6000\n"+
                 " App Account: 2",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: true, usb: false, wifi: false },
    price: { fakeAmount: 48000, amount: 37000, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "gt-utm-p050",
    brand: "GRANDING",
    name: "UTM-P050",
    category: "UTIME",
    description: " Maximum Device Qty: 50\n"+
                 " Maximum User: 10000\n"+
                 " App Account: 5",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: true, usb: false, wifi: false },
    price: { fakeAmount: 98000, amount: 74000, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "gt-utm-p0100",
    brand: "GRANDING",
    name: "UTM-P0100",
    category: "UTIME",
    description: " Maximum Device Qty: 100\n"+
                 " Maximum User: 10000\n"+
                 " App Account: 10",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: true, usb: false, wifi: false },
    price: { fakeAmount: 167000, amount: 125000, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "gt-utm-p0200",
    brand: "GRANDING",
    name: "UTM-P0200",
    category: "UTIME",
    description: " Maximum Device Qty: 200\n"+
                 " Maximum User: 20000\n"+
                 " App Account: 20",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: true, usb: false, wifi: false },
    price: { fakeAmount: 245000, amount: 225000, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "gt-utm-p0300",
    brand: "GRANDING",
    name: "UTM-P0300",
    category: "UTIME",
    description: " Maximum Device Qty: 300\n"+
                 " Maximum User: 20000\n"+
                 " App Account: 30",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: true, usb: false, wifi: false },
    price: { fakeAmount: 285000, amount: 267000, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "gt-utm-p0400",
    brand: "GRANDING",
    name: "UTM-P0400",
    category: "UTIME",
    description: " Maximum Device Qty: 400\n"+
                 " Maximum User: 30000\n"+
                 " App Account: 40",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: true, usb: false, wifi: false },
    price: { fakeAmount: 318000, amount: 305000, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "gt-utm-p0500",
    brand: "GRANDING",
    name: "UTM-P0500",
    category: "UTIME",
    description: " Maximum Device Qty: 500\n"+
                 " Maximum User: 30000\n"+
                 " App Account: 50",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: true, usb: false, wifi: false },
    price: { fakeAmount: 370000, amount: 350000, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },

  // ── Virtual Server ─────────────────────────────────────────────────────────
  {
    id: "vs-basic",
    brand: "Microsoft",
    name: "Basic Server Plan (1~5)",
    category: "Virtual Server",
    description: " ~ 1 to 5 non-visible light biometrics\n"+
                 " ~ 4 GB RAM\n"+
                 " ~ 2 CPU Cores\n"+
                 " ~ 60GB SSD Disk Space\n"+
                 " ~ 100Mbps Unmetered Bandwidth\n"+
                 " ~ Once per 4 weeks backup\n"+
                 " ~ 1 Dedicated IP\n"+
                 " ~ Windows Server 2025/2022/2019/2016\n"+
                 " ~ No Setup Fee",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 13800, amount: 13800, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "vs-basic-plus",
    brand: "Microsoft",
    name: "Basic Plus Server Plan (6~20)",
    category: "Virtual Server",
    description: " ~ 6 to 20 non-visible light biometrics\n"+
                 " ~ 6 GB RAM\n"+
                 " ~ 3 CPU Cores\n"+
                 " ~ 100GB SSD Disk Space\n"+
                 " ~ 100Mbps Unmetered Bandwidth\n"+
                 " ~ Once per 4 weeks backup\n"+
                 " ~ 1 Dedicated IP\n"+
                 " ~ Windows Server 2025/2022/2019/2016\n"+
                 " ~ No Setup Fee",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 22700, amount: 22700, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "vs-pro",
    brand: "Microsoft",
    name: "Pro Server Plan (21~50)",
    category: "Virtual Server",
    description: " ~ 21 to 50 non-visible light biometrics\n"+
                 " ~ 12 GB RAM\n"+
                 " ~ 6 CPU Cores\n"+
                 " ~ 180GB SSD Disk Space\n"+
                 " ~ 1Gbps Unmetered Bandwidth\n"+
                 " ~ Once per 4 weeks backup\n"+
                 " ~ 1 Dedicated IP\n"+
                 " ~ Windows Server 2025/2022/2019/2016\n"+
                 " ~ No Setup Fee",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 47800, amount: 47800, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
    {
    id: "vs-business",
    brand: "Microsoft",
    name: "Business Server Plan (51~100)",
    category: "Virtual Server",
    description: " ~ 51 to 100 non-visible light biometrics\n"+
                 " ~ 18 GB RAM\n"+
                 " ~ 8 CPU Cores\n"+
                 " ~ 240GB SSD Disk Space\n"+
                 " ~ 1Gbps Unmetered Bandwidth\n"+
                 " ~ Once per 2 weeks backup\n"+
                 " ~ 1 Dedicated IP\n"+
                 " ~ Windows Server 2025/2022/2019/2016\n"+
                 " ~ No Setup Fee",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 73700, amount: 73700, currency: "PHP" },
    withADMS: false,
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },

  // ── Smart Locks ────────────────────────────────────────────────────────────
  {
    id: "sl-a-01",
    brand: "LOOCK",
    name: "A-01",
    category: "Smart Locks",
    description: " ~ Password Unlock\n"+
                 " ~ RFID Card Unlock\n"+
                 " ~ Fingerprint Unlock\n"+
                 " ~ Emergency USB Power Port\n"+
                 " ~ TUYA APP Control\n"+
                 " ~ Bluetooth\n"+
                 " ~ Temporary Password\n"+
                 " ~ Mechanical Key Unlock\n"+
                 " ~ Lifetime Technical Support\n"+
                 " ~ High-Quality Material: Aluminum Alloy\n"+
                 "   Material and Tempered Glass Panel\n"+
                 " ~ Dimension: 156MM*65MM",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 10900, amount: 5499, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-a-12",
    brand: "LOOCK",
    name: "A-12",
    category: "Smart Locks",
    description: " ~ Password Unlock\n"+
                 " ~ RFID Card Unlock\n"+
                 " ~ Fingerprint Unlock\n"+
                 " ~ Emergency USB Power Port\n"+
                 " ~ TTLOCK APP Control\n"+
                 " ~ Temporary Password\n"+
                 " ~ Mechanical Key Unlock\n"+
                 " ~ Lifetime Technical Support\n"+
                 " ~ High-Quality Material: Aluminum Alloy",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 11900, amount: 5999, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-b-03",
    brand: "LOOCK",
    name: "B-03",
    category: "Smart Locks",
    description: " ~ Password Unlock\n"+
                 " ~ RFID Card Unlock\n"+
                 " ~ Fingerprint Unlock\n"+
                 " ~ Emergency USB Power Port\n"+
                 " ~ TUYA APP Control\n"+
                 " ~ Temporary Password\n"+
                 " ~ Mechanical Key Unlock\n"+
                 " ~ Lifetime Technical Support\n"+
                 " ~ High-Quality Material: Aluminum Alloy\n"+
                 " ~ Dimension: 171MM*29MM",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 9900, amount: 4499, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-b-11",
    brand: "LOOCK",
    name: "B-11",
    category: "Smart Locks",
    description: " ~ Password Unlock\n"+
                 " ~ RFID Card Unlock\n"+
                 " ~ Fingerprint Unlock\n"+
                 " ~ Emergency USB Power Port\n"+
                 " ~ Built-in Doorbell\n"+
                 " ~ Mechanical Key Unlock\n"+
                 " ~ Lifetime Technical Support\n"+
                 " ~ High-Quality Material: Steel\n"+
                 " ~ Working Voltage: 4AA Batteries\n"+
                 " ~ Dimension: 364MM*75MM",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 8900, amount: 3999, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-f-11",
    brand: "LOOCK",
    name: "F-11",
    category: "Smart Locks",
    description: " ~ Password Unlock\n"+
                 " ~ RFID Card Unlock\n"+
                 " ~ Fingerprint Unlock\n"+
                 " ~ 3D Facial Recognition\n"+
                 " ~ iCSee Home App\n"+
                 " ~ Emergency USB Power Port\n"+
                 " ~ Built-in Doorbell\n"+
                 " ~ Mechanical Key Unlock\n"+
                 " ~ Active Intercom\n"+
                 " ~ Active Monitoring\n"+
                 " ~ Phone Remote Control\n"+
                 " ~ Splash Waterproof\n"+
                 " ~ Lifetime Technical Support\n"+
                 " ~ High-Quality Material: Aluminum Alloy\n"+
                 " ~ Dimension: 423MM*73MM",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 18900, amount: 9499, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-f-14",
    brand: "LOOCK",
    name: "F-14",
    category: "Smart Locks",
    description: " ~ Password Unlock\n"+
                 " ~ RFID Card Unlock\n"+
                 " ~ Fingerprint Unlock\n"+
                 " ~ 3D Facial Recognition\n"+
                 " ~ Palm Vein Unlock\n"+
                 " ~ iCSee Home App\n"+
                 " ~ Emergency USB Power Port\n"+
                 " ~ Built-in Doorbell\n"+
                 " ~ Mechanical Key Unlock\n"+
                 " ~ Active Intercom\n"+
                 " ~ Active Monitoring\n"+
                 " ~ TTLOCK APP Control\n"+
                 " ~ Temporary Password\n"+
                 " ~ Lifetime Technical Support\n"+
                 " ~ High-Quality Material: Aluminum Alloy\n"+
                 " ~ Dimension: 416MM*74MM",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 23900, amount: 11999, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-f-21",
    brand: "LOOCK",
    name: "F-21",
    category: "Smart Locks",
    description: " ~ Password Unlock\n"+
                 " ~ RFID Card Unlock\n"+
                 " ~ Fingerprint Unlock\n"+
                 " ~ 3D Facial Recognition\n"+
                 " ~ Palm Vein Unlock\n"+
                 " ~ Emergency USB Power Port\n"+
                 " ~ Built-in Doorbell\n"+
                 " ~ Mechanical Key Unlock\n"+
                 " ~ Active Intercom\n"+
                 " ~ Active Monitoring\n"+
                 " ~ TTLOCK APP Control\n"+
                 " ~ Temporary Password\n"+
                 " ~ Lifetime Technical Support\n"+
                 " ~ High-Quality Material: Aluminum Alloy\n"+
                 " ~ Working Voltage: Lithium Battery\n"+
                 " ~ Dimension: 430MM*70MM",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 23900, amount: 9499, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-g-01",
    brand: "LOOCK",
    name: "G-01",
    category: "Smart Locks",
    description: " ~ Password Unlock\n"+
                 " ~ RFID Card Unlock\n"+
                 " ~ Fingerprint Unlock\n"+
                 " ~ 3D Facial Recognition\n"+
                 " ~ Emergency USB Power Port\n"+
                 " ~ Mechanical Key Unlock\n"+
                 " ~ DADALOCK APP Control\n"+
                 " ~ Temporary Password\n"+
                 " ~ Lifetime Technical Support\n"+
                 " ~ High-Quality Material: Acrylic Panel\n"+
                 " ~ Dimension: 190MM*70MM",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 13900, amount: 6999, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-g-11",
    brand: "LOOCK",
    name: "G-11",
    category: "Smart Locks",
    description: " ~ Password Unlock\n"+
                 " ~ RFID Card Unlock\n"+
                 " ~ Fingerprint Unlock\n"+
                 " ~ 3D Facial Recognition\n"+
                 " ~ Emergency USB Power Port\n"+
                 " ~ DADALOCK APP Control\n"+
                 " ~ Temporary Password\n"+
                 " ~ Lifetime Technical Support\n"+
                 " ~ High-Quality Material: Acrylic Panel\n"+
                 " ~ Dimension: 190MM*70MM",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 13900, amount: 6999, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-g-04",
    brand: "LOOCK",
    name: "G-04",
    category: "Smart Locks",
    description: " ~ Password Unlock\n"+
                 " ~ RFID Card Unlock\n"+
                 " ~ Fingerprint Unlock\n"+
                 " ~ Emergency USB Power Port\n"+
                 " ~ Mechanical Key Unlock\n"+
                 " ~ TTLOCK APP Control\n"+
                 " ~ TUYA APP Control\n"+
                 " ~ Temporary Password\n"+
                 " ~ Waterproof\n"+
                 " ~ Lifetime Technical Support\n"+
                 " ~ High-Quality Material: Aluminum Alloy\n"+
                 " ~ Dimension: 175MM*55MM",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 13900, amount: 6999, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-g-06b",
    brand: "LOOCK",
    name: "G-06B",
    category: "Smart Locks",
    description: " ~ Password Unlock\n"+
                 " ~ RFID Card Unlock\n"+
                 " ~ Fingerprint Unlock\n"+
                 " ~ Emergency USB Power Port\n"+
                 " ~ Mechanical Key Unlock\n"+
                 " ~ TTLOCK APP Control\n"+
                 " ~ Temporary Password\n"+
                 " ~ Waterproof\n"+
                 " ~ Lifetime Technical Support\n"+
                 " ~ High-Quality Material: Aluminum Alloy\n"+
                 " ~ Dimension: 350MM*36MM",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 14900, amount: 7499, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-g-16",
    brand: "LOOCK",
    name: "G-16",
    category: "Smart Locks",
    description: " ~ Password Unlock\n"+
                 " ~ RFID Card Unlock\n"+
                 " ~ Fingerprint Unlock\n"+
                 " ~ Emergency USB Power Port\n"+
                 " ~ Mechanical Key Unlock\n"+
                 " ~ TTLOCK APP Control\n"+
                 " ~ Temporary Password\n"+
                 " ~ Waterproof\n"+
                 " ~ Lifetime Technical Support\n"+
                 " ~ High-Quality Material: Aluminum Alloy\n"+
                 " ~ Dimension: 350MM*36MM",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 15900, amount: 7999, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-g-24b",
    brand: "LOOCK",
    name: "G-24B",
    category: "Smart Locks",
    description: " ~ Password Unlock\n"+
                 " ~ RFID Card Unlock\n"+
                 " ~ Fingerprint Unlock\n"+
                 " ~ 3D Facial Recognition\n"+
                 " ~ Built-in Doorbell\n"+
                 " ~ Emergency USB Power Port\n"+
                 " ~ Mechanical Key Unlock\n"+
                 " ~ TUYA APP Control\n"+
                 " ~ Temporary Password\n"+
                 " ~ Waterproof\n"+
                 " ~ Lifetime Technical Support\n"+
                 " ~ High-Quality Material: Aluminum Alloy\n"+
                 " ~ Dimension: 175MM*55MM",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 16900, amount: 8499, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-g-24c",
    brand: "LOOCK",
    name: "G-24C",
    category: "Smart Locks",
    description: " ~ Password Unlock\n"+
                 " ~ RFID Card Unlock\n"+
                 " ~ Fingerprint Unlock\n"+
                 " ~ Built-in Doorbell\n"+
                 " ~ Emergency USB Power Port\n"+
                 " ~ Mechanical Key Unlock\n"+
                 " ~ TUYA APP Control\n"+
                 " ~ Temporary Password\n"+
                 " ~ Waterproof\n"+
                 " ~ Lifetime Technical Support\n"+
                 " ~ High-Quality Material: Aluminum Alloy\n"+
                 " ~ Dimension: 175MM*55MM",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 16900, amount: 9500, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-g-28",
    brand: "LOOCK",
    name: "G-28",
    category: "Smart Locks",
    description: " ~ Password Unlock\n"+
                 " ~ RFID Card Unlock\n"+
                 " ~ Fingerprint Unlock\n"+
                 " ~ Emergency USB Power Port\n"+
                 " ~ Mechanical Key Unlock\n"+
                 " ~ TUYA APP Control\n"+
                 " ~ Temporary Password\n"+
                 " ~ Waterproof\n"+
                 " ~ Lifetime Technical Support\n"+
                 " ~ High-Quality Material: Aluminum Alloy",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 6900, amount: 3499, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-s-12",
    brand: "LOOCK",
    name: "S-12",
    category: "Smart Locks",
    description: " ~ Password Unlock\n"+
                 " ~ RFID Card Unlock\n"+
                 " ~ Fingerprint Unlock\n"+
                 " ~ Emergency USB Power Port\n"+
                 " ~ Mechanical Key Unlock\n"+
                 " ~ TTLOCK APP Control\n"+
                 " ~ Temporary Password\n"+
                 " ~ Lifetime Technical Support\n"+
                 " ~ High-Quality Material: 304 stainless steel\n"+
                 " ~ Dimension: 308MM*77MM",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 10900, amount: 5499, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-s-11",
    brand: "LOOCK",
    name: "S-11",
    category: "Smart Locks",
    description: " ~ Password Unlock\n"+
                 " ~ RFID Card Unlock\n"+
                 " ~ Emergency USB Power Port\n"+
                 " ~ Mechanical Key Unlock\n"+
                 " ~ TTLOCK APP Control\n"+
                 " ~ Temporary Password\n"+
                 " ~ Lifetime Technical Support\n"+
                 " ~ High-Quality Material: 304 stainless steel\n"+
                 " ~ Dimension: 308MM*77MM",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 10900, amount: 5499, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-sb-45",
    brand: "LOOCK",
    name: "SB-45",
    category: "Smart Locks",
    description: " ~ Password Unlock\n"+
                 " ~ Fingerprint Unlock\n"+
                 " ~ Emergency USB Power Port\n"+
                 " ~ TUYA APP Control\n"+
                 " ~ Temporary Password\n"+
                 " ~ Mechanical Key Unlock\n"+
                 " ~ COD Free Delivery Within NCR\n"+
                 " ~ Dimension: 450MM*320MM*380MM",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 17900, amount: 8999, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-sc-01",
    brand: "LOOCK",
    name: "SC-01",
    category: "Smart Locks",
    description: " ~ Password Unlock\n"+
                 " ~ RFID Card Unlock\n"+
                 " ~ Emergency USB Power Port\n"+
                 " ~ TTLOCK APP Control\n"+
                 " ~ Temporary Password\n"+
                 " ~ Lifetime Technical Support\n"+
                 " ~ High-Quality Material: Aluminum Alloy\n"+
                 " ~ Working Voltage: 4AA Batteries\n"+
                 " ~ Dimension: 350MM*36MM",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 17900, amount: 3499, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 12, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-card-encoder",
    brand: "LOOCK",
    name: "Card Encoder",
    category: "Smart Locks",
    description: "Card Encoder",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 3000, amount: 3000, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-ttlock-gateway",
    brand: "LOOCK",
    name: "TTLock Gateway",
    category: "Smart Locks",
    description: "TTLock Gateway",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 1000, amount: 1000, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-power-saver",
    brand: "LOOCK",
    name: "Power Saver",
    category: "Smart Locks",
    description: "Power Saver",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 600, amount: 600, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-rfid-bracelet",
    brand: "LOOCK",
    name: "RFID Bracelet",
    category: "Smart Locks",
    description: "RFID Bracelet",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 100, amount: 100, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-customizable-hotel-card",
    brand: "LOOCK",
    name: "Customizable Hotel Card",
    category: "Smart Locks",
    description: "Customizable Hotel Card",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 50, amount: 50, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
  {
    id: "sl-rfid-card",
    brand: "LOOCK",
    name: "RFID Card",
    category: "Smart Locks",
    description: "RFID Card",
    capacity: { fingerprint: 0, card: 0, face: 0, transaction: 0 },
    download: { lan: false, usb: false, wifi: false },
    price: { fakeAmount: 50, amount: 50, currency: "PHP" },
    withADMS: false,
    dimension: "WxHxDmm",
    warranty: { duration: 0, unit: "months" },
    isActive: true,
  },
];
