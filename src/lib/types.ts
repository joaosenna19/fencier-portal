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
