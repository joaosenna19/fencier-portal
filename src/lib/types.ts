// src/lib/types.ts

export interface CustomerInfo {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    address: {
        postalCode: string;
    }[];
}

export interface Lead {
    id: string;
    customerInfo: CustomerInfo[];
    price: number;
    status: 'PENDING' | 'ONGOING' | 'DEAL' | 'NODEAL';
}

export interface Product {
    id: string;
    name: string;
    price: number;
    type: 'gate' | 'fence';
    image: string;
}

export interface ProductResponse {
    id: string;
    tenantId: string;
    name: string;
    description: string;
    createdAt: string;
    styles: {
        id: string;
        materialId: string;
        name: string;
        colors: {
            id: string;
            styleId: string;
            name: string;
            pricePerFoot: number;
            gatePrice: number;
        }[];
    }[];
}
// src/lib/types.ts

export interface Height {
    id: string;
    feet: number;
    pricePer8Ft: number;
    pricePer4Ft: number;
    priceSingleGate: number;
    priceDoubleGate: number;
    gateFeet: number;
    colorId: string;
  }
  
  export interface Color {
    id: string;
    styleId: string;
    name: string;
    heights: Height[];
  }
  
  export interface Style {
    id: string;
    materialId: string;
    name: string;
    colors: Color[];
  }
  
  export interface Product {
    id: string;
    tenantId: string;
    name: string;
    createdAt: string;
    styles: Style[];
  }
  