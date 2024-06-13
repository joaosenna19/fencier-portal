"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TrashIcon, PencilIcon } from "@/components/icons"; // Certifique-se de que o caminho esteja correto
import { Product as ApiProduct } from "@/lib/types"; // Importando interfaces necessárias
import Image from "next/image";

interface Material {
    id: string;
    name: string;
    styles: {
        name: string;
        colors: {
            name: string;
            heights: {
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
    name: string;
    pricePer8Ft: number;
    pricePer4Ft: number;
    priceSingleGate: number;
    priceDoubleGate: number;
    gateFeet: number;
    image: string;
}

export default function Productform() {
    const [products, setProducts] = useState<ProductItem[]>([]);
    const [loading, setLoading] = useState(true); // Estado de carregamento
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [newProduct, setNewProduct] = useState<ProductItem | null>(null);
    const [editingProduct, setEditingProduct] = useState<ProductItem | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // Novo estado de carregamento para o formulário

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fencier-api.onrender.com/material?tenantId=aa815619-4db7-4b79-a33f-9b51426db757");
                const data: Material[] = await response.json();

                const products = data.flatMap((material) =>
                    material.styles.flatMap((style) =>
                        style.colors.flatMap((color) =>
                            color.heights.map((height) => ({
                                id: `${material.id}-${style.name}-${color.name}-${height.feet}`,
                                name: `${material.name} (${style.name} - ${color.name} - ${height.feet}ft)`,
                                pricePer8Ft: height.pricePer8Ft,
                                pricePer4Ft: height.pricePer4Ft,
                                priceSingleGate: height.priceSingleGate,
                                priceDoubleGate: height.priceDoubleGate,
                                gateFeet: height.gateFeet,
                                image: "",
                            }))
                        )
                    )
                );

                setProducts(products);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false); // Definir como falso após a conclusão do fetch
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = (id: string) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    const handleAddNewProduct = () => {
        setIsEditing(true);
        setNewProduct({
            id: '',
            name: '',
            pricePer8Ft: 0,
            pricePer4Ft: 0,
            priceSingleGate: 0,
            priceDoubleGate: 0,
            gateFeet: 0,
            image: '',
        });
    };

    const preparePayload = (product: ProductItem) => {
        return {
            name: product.name,
            styles: [
                {
                    name: 'Example Style', // Ajuste conforme necessário
                    colors: [
                        {
                            name: 'Example Color', // Ajuste conforme necessário
                            heights: [
                                {
                                    feet: product.gateFeet,
                                    pricePer8Ft: product.pricePer8Ft,
                                    pricePer4Ft: product.pricePer4Ft,
                                    priceSingleGate: product.priceSingleGate,
                                    priceDoubleGate: product.priceDoubleGate,
                                    gateFeet: product.gateFeet,
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    };

    const handleSaveNewProduct = async () => {
        if (newProduct) {
            setIsSubmitting(true);
            const payload = preparePayload(newProduct);
            try {
                const response = await fetch("https://fencier-api.onrender.com/material", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });

                if (response.ok) {
                    const savedProduct = await response.json();
                    setProducts([...products, savedProduct]);
                    setIsEditing(false);
                    setNewProduct(null);
                } else {
                    console.error("Failed to save product");
                }
            } catch (error) {
                console.error("Error saving product:", error);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const handleEditProduct = (product: ProductItem) => {
        setEditingProduct(product);
    };

    const handleUpdateProduct = async () => {
        if (editingProduct) {
            setIsSubmitting(true);
            const payload = preparePayload(editingProduct);
            try {
                const response = await fetch(`https://fencier-api.onrender.com/material/${editingProduct.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });

                if (response.ok) {
                    const updatedProduct = await response.json();
                    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
                    setEditingProduct(null);
                } else {
                    console.error("Failed to update product");
                }
            } catch (error) {
                console.error("Error updating product:", error);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="container mx-auto py-8">
            <div className={`bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden ${isSubmitting ? 'cursor-wait' : ''}`}>
                {loading ? (
                    <div className="flex justify-center items-center py-8">
                        <div className="w-10 h-10 border-4 border-t-4 border-t-transparent border-gray-300 rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <table className="w-full table-auto">
                        <thead className="bg-gray-100 dark:bg-gray-800">
                            <tr>
                                <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Name</th>
                                <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Price per 8Ft</th>
                                <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Price per 4Ft</th>
                                <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Price Single Gate</th>
                                <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Price Double Gate</th>
                                <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Gate Feet</th>
                                <th className="px-6 py-4 text-right font-medium text-gray-700 dark:text-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id} className="border-b border-gray-200 dark:border-gray-800">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <Image alt="Product Image" className="h-10 w-10 rounded-full" src={product.image} />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900 dark:text-gray-50">{product.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900 dark:text-gray-50">${product.pricePer8Ft}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900 dark:text-gray-50">${product.pricePer4Ft}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900 dark:text-gray-50">${product.priceSingleGate}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900 dark:text-gray-50">${product.priceDoubleGate}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900 dark:text-gray-50">${product.gateFeet}</div>
                                    </td>
                                    <td className="px-6 py-4 text-right whitespace-nowrap">
                                        <Button size="sm" variant="outline" onClick={() => handleEditProduct(product)}>
                                            <PencilIcon className="h-4 w-4" />
                                            <span className="sr-only">Update</span>
                                        </Button>
                                        <Button size="sm" variant="outline" onClick={() => handleDelete(product.id)}>
                                            <TrashIcon className="h-4 w-4" />
                                            <span className="sr-only">Delete</span>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                            {isEditing && newProduct && (
                                <tr className="border-b border-gray-200 dark:border-gray-800">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="text"
                                            className="w-full px-2 py-1 text-sm text-gray-900 dark:text-gray-50"
                                            value={newProduct.name}
                                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="number"
                                            className="w-full px-2 py-1 text-sm text-gray-900 dark:text-gray-50"
                                            value={newProduct.pricePer8Ft}
                                            onChange={(e) => setNewProduct({ ...newProduct, pricePer8Ft: parseFloat(e.target.value) })}
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="number"
                                            className="w-full px-2 py-1 text-sm text-gray-900 dark:text-gray-50"
                                            value={newProduct.pricePer4Ft}
                                            onChange={(e) => setNewProduct({ ...newProduct, pricePer4Ft: parseFloat(e.target.value) })}
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="number"
                                            className="w-full px-2 py-1 text-sm text-gray-900 dark:text-gray-50"
                                            value={newProduct.priceSingleGate}
                                            onChange={(e) => setNewProduct({ ...newProduct, priceSingleGate: parseFloat(e.target.value) })}
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="number"
                                            className="w-full px-2 py-1 text-sm text-gray-900 dark:text-gray-50"
                                            value={newProduct.priceDoubleGate}
                                            onChange={(e) => setNewProduct({ ...newProduct, priceDoubleGate: parseFloat(e.target.value) })}
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="number"
                                            className="w-full px-2 py-1 text-sm text-gray-900 dark:text-gray-50"
                                            value={newProduct.gateFeet}
                                            onChange={(e) => setNewProduct({ ...newProduct, gateFeet: parseFloat(e.target.value) })}
                                        />
                                    </td>
                                    <td className="px-6 py-4 text-right whitespace-nowrap">
                                        <Button size="sm" variant="outline" onClick={handleSaveNewProduct}>
                                            Save
                                        </Button>
                                    </td>
                                </tr>
                            )}
                            {editingProduct && (
                                <tr className="border-b border-gray-200 dark:border-gray-800">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="text"
                                            className="w-full px-2 py-1 text-sm text-gray-900 dark:text-gray-50"
                                            value={editingProduct.name}
                                            onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="number"
                                            className="w-full px-2 py-1 text-sm text-gray-900 dark:text-gray-50"
                                            value={editingProduct.pricePer8Ft}
                                            onChange={(e) => setEditingProduct({ ...editingProduct, pricePer8Ft: parseFloat(e.target.value) })}
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="number"
                                            className="w-full px-2 py-1 text-sm text-gray-900 dark:text-gray-50"
                                            value={editingProduct.pricePer4Ft}
                                            onChange={(e) => setEditingProduct({ ...editingProduct, pricePer4Ft: parseFloat(e.target.value) })}
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="number"
                                            className="w-full px-2 py-1 text-sm text-gray-900 dark:text-gray-50"
                                            value={editingProduct.priceSingleGate}
                                            onChange={(e) => setEditingProduct({ ...editingProduct, priceSingleGate: parseFloat(e.target.value) })}
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="number"
                                            className="w-full px-2 py-1 text-sm text-gray-900 dark:text-gray-50"
                                            value={editingProduct.priceDoubleGate}
                                            onChange={(e) => setEditingProduct({ ...editingProduct, priceDoubleGate: parseFloat(e.target.value) })}
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="number"
                                            className="w-full px-2 py-1 text-sm text-gray-900 dark:text-gray-50"
                                            value={editingProduct.gateFeet}
                                            onChange={(e) => setEditingProduct({ ...editingProduct, gateFeet: parseFloat(e.target.value) })}
                                        />
                                    </td>
                                    <td className="px-6 py-4 text-right whitespace-nowrap">
                                        <Button size="sm" variant="outline" onClick={handleUpdateProduct}>
                                            Update
                                        </Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
            <Button size="sm" variant="default" onClick={handleAddNewProduct} className="mt-4">
                Add
            </Button>
        </div>
    );
}
