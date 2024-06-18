import { useEffect, useState } from "react";

interface Material {
    id: string;
    name: string;
    styles: {
        id: string;
        name: string;
        colors: {
            id: string;
            name: string;
            heights: {
                id: string;
                feet: number;
                pricePer8Ft: number;
                pricePer4Ft: number;
                priceSingleGate: number;
                priceDoubleGate: number;
                gateFeet: number;
            }[];
        }[];
    }[];
}

interface ProductItem {
    id: string;
    material: string;
    style: string;
    color: string;
    pricePer8Ft: number;
    pricePer4Ft: number;
    priceSingleGate: number;
    priceDoubleGate: number;
    gateFeet: number;
    image: string;
}

export const useProducts = () => {
    const [products, setProducts] = useState<ProductItem[]>([]);
    const [materials, setMaterials] = useState<Material[]>([]);
    const [styles, setStyles] = useState<any[]>([]);
    const [colors, setColors] = useState<any[]>([]);
    const [heights, setHeights] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fencier-api.onrender.com/material?tenantId=aa815619-4db7-4b79-a33f-9b51426db757");
                const data: Material[] = await response.json();

                const stylesArray: any[] = [];
                const colorsArray: any[] = [];
                const heightsArray: any[] = [];

                const products = data.flatMap((material) => {
                    return material.styles.flatMap((style) => {
                        stylesArray.push({ ...style, materialId: material.id });
                        return style.colors.flatMap((color) => {
                            colorsArray.push({ ...color, styleId: style.id });
                            return color.heights.map((height) => {
                                heightsArray.push({ ...height, colorId: color.id });
                                return {
                                    id: height.id,
                                    material: material.name,
                                    style: style.name,
                                    color: color.name,
                                    pricePer8Ft: height.pricePer8Ft,
                                    pricePer4Ft: height.pricePer4Ft,
                                    priceSingleGate: height.priceSingleGate,
                                    priceDoubleGate: height.priceDoubleGate,
                                    gateFeet: height.gateFeet,
                                    image: "",
                                };
                            });
                        });
                    });
                });

                setMaterials(data);  // Ajustar para definir a lista de materiais completa
                setStyles(stylesArray);
                setColors(colorsArray);
                setHeights(heightsArray);
                setProducts(products);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return {
        products,
        materials,
        styles,
        colors,
        heights,
        loading,
        setProducts,
        setMaterials,
        setStyles,
        setColors,
    };
};
