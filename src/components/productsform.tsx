'use client'
import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import { deleteProduct, saveProduct, updateProduct } from "@/services/productServices";
import { Button } from "@/components/ui/button";
import { TrashIcon, PencilIcon } from "@/components/icons";
import AddProductModal from "@/components/AddProductModal";

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
}

export default function ProductForm() {
    const { products, materials, loading, setProducts } = useProducts();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 10;

    const handleAddNewProduct = () => {
        setShowModal(true);
    };

    const handleSaveNewProduct = async (product: ProductItem) => {
        setIsSubmitting(true);
        try {
            let savedProduct;
            const materialExists = materials.some(material => material.id === product.material);
            const selectedMaterial = materials.find(material => material.id === product.material);
    
            console.log('materialExists:', materialExists);
            console.log('selectedMaterial:', selectedMaterial);
    
            if (!materialExists) {
                // Caso 1: material não existe, criar material com estilo e cor
                const payload = {
                    name: product.material,
                    styles: [
                        {
                            name: product.style,
                            colors: [
                                {
                                    name: product.color,
                                    heights: [
                                        {
                                            feet: product.gateFeet,
                                            pricePer8Ft: product.pricePer8Ft,
                                            pricePer4Ft: product.pricePer4Ft,
                                            priceSingleGate: product.priceSingleGate,
                                            priceDoubleGate: product.priceDoubleGate,
                                            gateFeet: product.gateFeet
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                };
                console.log('Payload for new material:', JSON.stringify(payload, null, 2));
                savedProduct = await saveProduct(payload, `${process.env.NEXT_PUBLIC_FENCIER_API_URL}/material?tenantId=aa815619-4db7-4b79-a33f-9b51426db757`);
            } else if (selectedMaterial) {
                const selectedStyle = selectedMaterial.styles ? selectedMaterial.styles.find(style => style.name === product.style) : null;
                console.log('selectedStyle:', selectedStyle);
    
                if (!selectedStyle) {
                    // Caso 2: material existe, estilo não existe, criar novo estilo com nova cor
                    const payload = {
                        name: product.style,
                        colors: [
                            {
                                name: product.color,
                                heights: [
                                    {
                                        feet: product.gateFeet,
                                        pricePer8Ft: product.pricePer8Ft,
                                        pricePer4Ft: product.pricePer4Ft,
                                        priceSingleGate: product.priceSingleGate,
                                        priceDoubleGate: product.priceDoubleGate,
                                        gateFeet: product.gateFeet
                                    }
                                ]
                            }
                        ]
                    };
                    console.log('Payload for new style:', JSON.stringify(payload, null, 2));
                    savedProduct = await saveProduct(payload, `${process.env.NEXT_PUBLIC_FENCIER_API_URL}/style?materialId=${selectedMaterial.id}`);
                } else {
                    // Caso 3: material e estilo existem, cor não existe, criar nova cor no estilo existente
                    const colorExists = selectedStyle.colors ? selectedStyle.colors.some(color => color.name === product.color) : false;
    
                    if (!colorExists) {
                        const payload = {
                            name: product.color,
                            heights: [
                                {
                                    feet: product.gateFeet,
                                    pricePer8Ft: product.pricePer8Ft,
                                    pricePer4Ft: product.pricePer4Ft,
                                    priceSingleGate: product.priceSingleGate,
                                    priceDoubleGate: product.priceDoubleGate,
                                    gateFeet: product.gateFeet
                                }
                            ]
                        };
                        console.log('Payload for new color:', JSON.stringify(payload, null, 2));
                        savedProduct = await saveProduct(payload, `${process.env.NEXT_PUBLIC_FENCIER_API_URL}/color?styleId=${selectedStyle.id}`);
                    } else {
                        console.log('Color already exists.');
                        throw new Error('Color already exists.');
                    }
                }
            } else {
                throw new Error('Selected material not found.');
            }
    
            setProducts([...products, savedProduct]);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error saving product:", error.message);
                alert(`Error saving product: ${error.message}`);
            } else {
                console.error("An unexpected error occurred", error);
                alert('An unexpected error occurred');
            }
        } finally {
            setIsSubmitting(false);
            setShowModal(false);
        }
    };
    




    const handleDelete = async (id: string) => {
        setIsSubmitting(true);
        console.log(`Deleting product with id: ${id}`);
        try {
            const deleteSuccess = await deleteProduct(id.toLowerCase());
            if (deleteSuccess) {
                setProducts(products.filter((product) => product.id.toLowerCase() !== id.toLowerCase()));
                console.log(`Product with id ${id} deleted successfully`);
            } else {
                console.error(`Failed to delete product with id ${id}`);
            }
        } catch (error) {
            console.error(`Error deleting product with id ${id}:`, error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Logic for displaying current products
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <li
                key={number}
                id={number.toString()}  // Convertendo o número para string
                onClick={() => setCurrentPage(number)}
                className={`inline-block px-4 py-2 border ${currentPage === number ? 'bg-gray-300' : 'bg-white'} hover:bg-gray-200 cursor-pointer`}
            >
                {number}
            </li>
        );
    });

    return (
        <div className="container mx-auto py-8">
            <div className={`bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden ${isSubmitting ? 'cursor-wait' : ''}`}>
                {loading ? (
                    <div className="flex justify-center items-center py-8">
                        <div className="w-10 h-10 border-4 border-t-4 border-t-transparent border-gray-300 rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div>
                        <table className="w-full table-auto">
                            <thead className="bg-gray-100 dark:bg-gray-800">
                                <tr>
                                    <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Material</th>
                                    <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Style</th>
                                    <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Color</th>
                                    <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Price per 8Ft</th>
                                    <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Price per 4Ft</th>
                                    <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Price Single Gate</th>
                                    <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Price Double Gate</th>
                                    <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Gate Feet</th>
                                    <th className="px-6 py-4 text-right font-medium text-gray-700 dark:text-gray-300">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentProducts.map((product) => (
                                    <tr key={product.id} className="border-b border-gray-200 dark:border-gray-800">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 dark:text-gray-50">{product.material}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 dark:text-gray-50">{product.style}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 dark:text-gray-50">{product.color}</div>
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
                                            <Button size="sm" variant="outline" onClick={() => handleDelete(product.id)}>
                                                <TrashIcon className="h-4 w-4" />
                                                <span className="sr-only">Delete</span>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <ul className="flex justify-center mt-4">
                            {renderPageNumbers}
                        </ul>
                    </div>
                )}
            </div>
            <Button size="sm" variant="default" onClick={handleAddNewProduct} className="mt-4">
                Add
            </Button>

            {showModal && (
                <AddProductModal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    materials={materials}
                    onSave={handleSaveNewProduct}
                />
            )}
        </div>
    );
}
