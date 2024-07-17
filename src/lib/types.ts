// src/lib/types.ts

export interface Address {
  street: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: Address[];
}

export interface Material {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Style {
  id: string;
  name: string;
  imageUrl: string;
  materialId: string;
}

export interface Color {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Height {
  id: string;
  feet: number;
  imageUrl: string;
  pricePer4Ft: number;
  pricePer8Ft: number;
  priceSingleGate: number;
  priceDoubleGate: number;
}

export interface Lead {
  id: string;
  customerInfo: CustomerInfo;
  finalPrice: number;
  status: "PENDING" | "ACCEPTED" | "REJECTED" | "ARCHIVED" | "CONTACTED";
  material: Material;
  style: Style;
  color: Color;
  height: Height;
  feet: number;
  gateFeet: number;
  singleGate: boolean;
  quoteId: string;
  tenantId: string;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  type: "gate" | "fence";
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
