
export type WarrantyPeriod = {
  duration: number;
  unit: "months" | "years";
};

export type Product = {
  id: string;
  brand: string;
  name: string;
  category: string;
  description?: string;

  iconId?: string;

  capacity: {
    fingerprint: number;
    card: number;
    face: number;
    transaction: number; //transaction log
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
  warranty?: WarrantyPeriod;

  sku?: string;
  isActive: boolean;
};

export const products: Product[] = [
//LX50
  {
    id: "zk-lx50",
    brand: "ZKTECO",
    name: "LX50",
    category: "Biometrics",
    description: "Dimension: 106x60x42mm",

    capacity: {
      fingerprint: 500,
      card: 0,
      face: 0,
      transaction: 50000,
    },

    download: {
      lan: false,
      usb: true,
      wifi: false,
    },

    price: {
      fakeAmount: 10900,
      amount: 5700,
      currency: "PHP",
    },

    withADMS: false,

    warranty: {
      duration: 18,
      unit: "months",
    },

    //sku: "ZK-100-",
    isActive: true,
  },
//TX628
  {
    id: "zk-tx628",
    brand: "ZKTECO",
    name: "TX628",
    category: "Biometrics",
    description: "Dimension: 180x135x37mm",

    capacity: {
      fingerprint: 3200,
      card: 3200,
      face: 0,
      transaction: 120000,
    },

    download: {
      lan: true,
      usb: true,
      wifi: false,
    },

    price: {
      fakeAmount: 14900,
      amount: 8900,
      currency: "PHP",
    },

    withADMS: false,

    warranty: {
      duration: 36,
      unit: "months",
    },

    isActive: true,
  },
//SC700 Confirm ADMS!
  {
    id: "zk-sc700",
    brand: "ZKTECO",
    name: "SC700",
    category: "Biometrics",
    description: "Dimension: 106x104x36mm",

    capacity: {
      fingerprint: 0,
      card: 30000,
      face: 0,
      transaction: 100000,
    },

    download: {
      lan: true,
      usb: true,
      wifi: false,
    },

    price: {
      fakeAmount: 13500,
      amount: 9500,
      currency: "PHP",
    },

    withADMS: false,

    warranty: {
      duration: 18,
      unit: "months",
    },

    isActive: true,
  },
//T8
{
    id: "gt-t8",
    brand: "GRANDING",
    name: "T8",
    category: "Biometrics",
    description: "Dimension: 108x140x30mm",

    capacity: {
      fingerprint: 3000,
      card: 3000,
      face: 0,
      transaction: 100000,
    },

    download: {
      lan: true,
      usb: true,
      wifi: false,
    },

    price: {
      fakeAmount: 15900,
      amount: 11200,
      currency: "PHP",
    },

    withADMS: true,

    warranty: {
      duration: 36,
      unit: "months",
    },

    isActive: true,
  },
//FA1000
{
    id: "gt-fa1000",
    brand: "GRANDING",
    name: "FA1000",
    category: "Biometrics",
    description: "to do",

    capacity: {
      fingerprint: 0,
      card: 1000,
      face: 500,
      transaction: 150000,
    },

    download: {
      lan: true,
      usb: false,
      wifi: true,
    },
    
    price: {
      fakeAmount: 13200,
      amount: 9200,
      currency: "PHP",
    },

    withADMS: true,

    warranty: {
      duration: 18,
      unit: "months",
    },

    isActive: true,
  },
//BK100
{
    id: "zk-bk100",
    brand: "ZKTECO",
    name: "BK100",
    category: "Biometrics",
    description: "161x93x152mm",

    capacity: {
      fingerprint: 3000,
      card: 0,
      face: 800,
      transaction: 250000,
    },

    download: {
      lan: true,
      usb: true,
      wifi: false,
    },
    
    price: {
      fakeAmount: 16500,
      amount: 9200,
      currency: "PHP",
    },

    withADMS: false,

    warranty: {
      duration: 36,
      unit: "months",
    },

    isActive: true,
  },
//MB10
{
    id: "zk-mb10",
    brand: "ZKTECO",
    name: "MB10",
    category: "Biometrics",
    description: "to do",

    capacity: {
      fingerprint: 500,
      card: 0,
      face: 100,
      transaction: 50000,
    },

    download: {
      lan: true,
      usb: true,
      wifi: true,
    },
    
    price: {
      fakeAmount: 17900,
      amount: 10900,
      currency: "PHP",
    },

    withADMS: true,

    warranty: {
      duration: 18,
      unit: "months",
    },

    isActive: true,
  },
//FA110
{
    id: "gt-fa110",
    brand: "GRANDING",
    name: "FA110",
    category: "Biometrics",
    description: "161x93x152mm",

    capacity: {
      fingerprint: 500,
      card: 500,
      face: 500,
      transaction: 50000,
    },

    download: {
      lan: true,
      usb: true,
      wifi: true,
    },
    
    price: {
      fakeAmount: 17900,
      amount: 9700,
      currency: "PHP",
    },

    withADMS: true,

    warranty: {
      duration: 36,
      unit: "months",
    },

    isActive: true,
  },
//F22 Confirm ADMS!
{
    id: "zk-f22",
    brand: "ZKTECO",
    name: "F22",
    category: "Biometrics",
    description: "78x158.5x41mm",

    capacity: {
      fingerprint: 3000,
      card: 5000,
      face: 0,
      transaction: 50000,
    },

    download: {
      lan: true,
      usb: true,
      wifi: true,
    },
    
    price: {
      fakeAmount: 19800,
      amount: 14700,
      currency: "PHP",
    },

    withADMS: false,

    warranty: {
      duration: 36,
      unit: "months",
    },

    isActive: true,
  },
//SF200 Confirm ADMS!
{
    id: "zk-sf200",
    brand: "ZKTECO",
    name: "SF200",
    category: "Biometrics",
    description: "to do",

    capacity: {
      fingerprint: 2000,
      card: 5000,
      face: 0,
      transaction: 100000,
    },

    download: {
      lan: true,
      usb: false,
      wifi: true,
    },
    
    price: {
      fakeAmount: 15700,
      amount: 11500,
      currency: "PHP",
    },

    withADMS: false,

    warranty: {
      duration: 36,
      unit: "months",
    },

    isActive: true,
  }, 
//IFACE3
{
    id: "zk-iface3",
    brand: "ZKTECO",
    name: "IFACE3",
    category: "Biometrics",
    description: "to do",

    capacity: {
      fingerprint: 4000,
      card: 5000,
      face: 1500,
      transaction: 100000,
    },

    download: {
      lan: true,
      usb: true,
      wifi: false,
    },
    
    price: {
      fakeAmount: 19400,
      amount: 14000,
      currency: "PHP",
    },

    withADMS: true,

    warranty: {
      duration: 36,
      unit: "months",
    },

    isActive: true,
  },
//MB460
{
    id: "zk-mb460",
    brand: "ZKTECO",
    name: "MB460",
    category: "Biometrics",
    description: "to do",

    capacity: {
      fingerprint: 2000,
      card: 5000,
      face: 1500,
      transaction: 100000,
    },

    download: {
      lan: true,
      usb: true,
      wifi: false,
    },
    
    price: {
      fakeAmount: 21200,
      amount: 14800,
      currency: "PHP",
    },

    withADMS: true,

    warranty: {
      duration: 36,
      unit: "months",
    },

    isActive: true,
  }, 
//FA210
{
    id: "gt-fa210",
    brand: "GRANDING",
    name: "FA210",
    category: "Biometrics",
    description: "to do",

    capacity: {
      fingerprint: 2000,
      card: 2000,
      face: 1500,
      transaction: 100000,
    },

    download: {
      lan: true,
      usb: true,
      wifi: false,
    },
    
    price: {
      fakeAmount: 22500,
      amount: 14800,
      currency: "PHP",
    },

    withADMS: true,

    warranty: {
      duration: 36,
      unit: "months",
    },

    isActive: true,
  },
//FA210w
{
    id: "gt-fa210w",
    brand: "GRANDING",
    name: "FA210w",
    category: "Biometrics",
    description: "to do",

    capacity: {
      fingerprint: 2000,
      card: 2000,
      face: 1500,
      transaction: 100000,
    },

    download: {
      lan: true,
      usb: true,
      wifi: true,
    },
    
    price: {
      fakeAmount: 24000,
      amount: 17000,
      currency: "PHP",
    },

    withADMS: true,

    warranty: {
      duration: 36,
      unit: "months",
    },

    isActive: true,
  },
//XFACE100
{
    id: "zk-xface100",
    brand: "ZKTECO",
    name: "XFACE100",
    category: "Biometrics",
    description: "to do",

    capacity: {
      fingerprint: 2000,
      card: 0,
      face: 1500,
      transaction: 100000,
    },

    download: {
      lan: true,
      usb: true,
      wifi: true,
    },
    
    price: {
      fakeAmount: 27000,
      amount: 18900,
      currency: "PHP",
    },

    withADMS: true,

    warranty: {
      duration: 36,
      unit: "months",
    },

    isActive: true,
  },
//UFACE800
{
    id: "zk-uface800",
    brand: "ZKTECO",
    name: "UFACE800",
    category: "Biometrics",
    description: "194x156x86mm",

    capacity: {
      fingerprint: 4000,
      card: 0,
      face: 3000,
      transaction: 120000,
    },

    download: {
      lan: true,
      usb: true,
      wifi: true,
    },
    
    price: {
      fakeAmount: 32900,
      amount: 22800,
      currency: "PHP",
    },

    withADMS: true,

    warranty: {
      duration: 36,
      unit: "months",
    },

    isActive: true,
  },
//SPEEDFACEV3L
{
    id: "zk-speedfacev3l",
    brand: "ZKTECO",
    name: "SPEEDFACE V3L",
    category: "Biometrics",
    description: "185x59x20mm",

    capacity: {
      fingerprint: 3000,
      card: 3000,
      face: 3000,
      transaction: 200000,
    },

    download: {
      lan: true,
      usb: false,
      wifi: true,
    },
    
    price: {
      fakeAmount: 18500,
      amount: 12900,
      currency: "PHP",
    },

    withADMS: true,

    warranty: {
      duration: 12,
      unit: "months",
    },

    isActive: true,
  }, 
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category && product.isActive);
}