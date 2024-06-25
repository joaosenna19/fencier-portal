import React, { useState, useEffect } from 'react';
import Modal from '@/components/modal';
import { Button } from '@/components/ui/button';

interface AddProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    materials: any[];
    onSave: (product: any) => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ isOpen, onClose, materials, onSave }) => {
    const [materialId, setMaterialId] = useState<string>('');
    const [materialName, setMaterialName] = useState<string>('');
    const [styleId, setStyleId] = useState<string>('');
    const [styleName, setStyleName] = useState<string>('');
    const [colorId, setColorId] = useState<string>('');
    const [colorName, setColorName] = useState<string>('');
    const [styles, setStyles] = useState<any[]>([]);
    const [colors, setColors] = useState<any[]>([]);
    const [pricePer8Ft, setPricePer8Ft] = useState<number>(0);
    const [pricePer4Ft, setPricePer4Ft] = useState<number>(0);
    const [priceSingleGate, setPriceSingleGate] = useState<number>(0);
    const [priceDoubleGate, setPriceDoubleGate] = useState<number>(0);
    const [gateFeet, setGateFeet] = useState<number>(0);

    useEffect(() => {
        if (materialId) {
            fetchStyles(materialId);
        } else {
            setStyles([]);
        }
    }, [materialId]);

    useEffect(() => {
        if (styleId) {
            fetchColors(styleId);
        } else {
            setColors([]);
        }
    }, [styleId]);

    const fetchStyles = async (materialId: string) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_FENCIER_API_URL}/style/?materialId=${materialId}`);
            const data = await response.json();
            setStyles(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error fetching styles:", error);
            setStyles([]);
        }
    };

    const fetchColors = async (styleId: string) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_FENCIER_API_URL}/color/?styleId=${styleId}`);
            const data = await response.json();
            setColors(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error fetching colors:", error);
            setColors([]);
        }
    };

    const handleSave = () => {
        if (
            !isNaN(pricePer8Ft) && !isNaN(pricePer4Ft) && 
            !isNaN(priceSingleGate) && !isNaN(priceDoubleGate) && 
            !isNaN(gateFeet)
        ) {
            const newProduct = {
                material: materialId || materialName,
                style: styleId || styleName,
                color: colorId || colorName,
                pricePer8Ft,
                pricePer4Ft,
                priceSingleGate,
                priceDoubleGate,
                gateFeet
            };
            onSave(newProduct);
        } else {
            console.error("Invalid input values");
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">Add New Product</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Material</label>
                    <select
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        value={materialId}
                        onChange={(e) => {
                            setMaterialId(e.target.value);
                            setMaterialName('');
                            setStyleId('');
                            setColorId('');
                        }}
                    >
                        <option value="">Select Material</option>
                        {materials.map((material) => (
                            <option key={material.id} value={material.id}>
                                {material.name}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        placeholder="Or enter new material"
                        className="w-full p-2 border border-gray-300 rounded mt-2"
                        value={materialName}
                        onChange={(e) => setMaterialName(e.target.value)}
                        disabled={!!materialId}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Style</label>
                    <select
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        value={styleId}
                        onChange={(e) => {
                            setStyleId(e.target.value);
                            setStyleName('');
                            setColorId('');
                        }}
                        disabled={!materialId && !materialName}
                    >
                        <option value="">Select Style</option>
                        {Array.isArray(styles) && styles.length > 0 ? styles.map((style) => (
                            <option key={style.id} value={style.id}>
                                {style.name}
                            </option>
                        )) : <option value="">No styles available</option>}
                    </select>
                    <input
                        type="text"
                        placeholder="Or enter new style"
                        className="w-full p-2 border border-gray-300 rounded mt-2"
                        value={styleName}
                        onChange={(e) => setStyleName(e.target.value)}
                        disabled={!!styleId}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Color</label>
                    <select
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        value={colorId}
                        onChange={(e) => {
                            setColorId(e.target.value);
                            setColorName('');
                        }}
                        disabled={!styleId && !styleName}
                    >
                        <option value="">Select Color</option>
                        {Array.isArray(colors) && colors.length > 0 ? colors.map((color) => (
                            <option key={color.id} value={color.id}>
                                {color.name}
                            </option>
                        )) : <option value="">No colors available</option>}
                    </select>
                    <input
                        type="text"
                        placeholder="Or enter new color"
                        className="w-full p-2 border border-gray-300 rounded mt-2"
                        value={colorName}
                        onChange={(e) => setColorName(e.target.value)}
                        disabled={!!colorId}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price per 8Ft</label>
                    <input
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        value={pricePer8Ft}
                        onChange={(e) => setPricePer8Ft(parseFloat(e.target.value) || 0)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price per 4Ft</label>
                    <input
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        value={pricePer4Ft}
                        onChange={(e) => setPricePer4Ft(parseFloat(e.target.value) || 0)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price Single Gate</label>
                    <input
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        value={priceSingleGate}
                        onChange={(e) => setPriceSingleGate(parseFloat(e.target.value) || 0)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price Double Gate</label>
                    <input
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        value={priceDoubleGate}
                        onChange={(e) => setPriceDoubleGate(parseFloat(e.target.value) || 0)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Gate Feet</label>
                    <input
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        value={gateFeet}
                        onChange={(e) => setGateFeet(parseFloat(e.target.value) || 0)}
                    />
                </div>
                <div className="flex justify-end">
                    <Button size="sm" variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button size="sm" variant="default" onClick={handleSave} className="ml-2">
                        Save
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default AddProductModal;
