"use client";
import React, { useState, useEffect } from "react";
import { Material } from "@/interfaces/material";
import SelectionCard from "@/components/SelectionCard";
import SelectionSection from "@/components/SelectionSection";

export default function ProductForm() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(
    null
  );
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedHeight, setSelectedHeight] = useState<string | null>(null);

  const handleMaterialSelect = (material: Material) => {
    setSelectedMaterial(material);
    setSelectedStyle(null);
    setSelectedColor(null);
    setSelectedHeight(null);
  };

  const handleStyleSelect = (styleId: string) => {
    setSelectedStyle(styleId);
    setSelectedColor(null);
    setSelectedHeight(null);
  };

  const handleColorSelect = (colorId: string) => {
    setSelectedColor(colorId);
    setSelectedHeight(null);
  };

  const handleHeightSelect = (heightId: string) => {
    setSelectedHeight(heightId);
  };

  const handleAddNewMaterial = () => {
    // Handle adding a new material here
  };

  const handleAddNewStyle = () => {
    // Handle adding a new style here
  };

  const handleAddNewColor = () => {
    // Handle adding a new color here
  };

  const handleAddNewHeight = () => {
    // Handle adding a new height here
  };

  useEffect(() => {
    const data = fetchMaterials();
    data.then((materials) => {
      setMaterials(materials);
      console.log(materials);
    });
  }, []);

  return (
    <section className="w-full">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <SelectionSection
            title="Materials"
            items={materials.map((material) => ({
              id: material.id,
              name: material.name,
              imageUrl: material.imageUrl,
            }))}
            selectedId={selectedMaterial?.id || null}
            onSelect={(id) =>
              handleMaterialSelect(
                materials.find((m) => m.id === id) as Material
              )
            }
            onAddNew={handleAddNewMaterial}
          />
          {selectedMaterial && (
            <SelectionSection
              title="Styles"
              items={selectedMaterial.styles}
              selectedId={selectedStyle}
              onSelect={handleStyleSelect}
              onAddNew={handleAddNewStyle}
            />
          )}
          {selectedMaterial && selectedStyle && (
            <SelectionSection
              title="Colors"
              items={
                selectedMaterial.styles.find(
                  (style) => style.id === selectedStyle
                )?.colors || []
              }
              selectedId={selectedColor}
              onSelect={handleColorSelect}
              onAddNew={handleAddNewColor}
            />
          )}
          {selectedMaterial && selectedStyle && selectedColor && (
            <SelectionSection
              title="Heights"
              items={
                selectedMaterial.styles
                  .find((style) => style.id === selectedStyle)
                  ?.colors.find((color) => color.id === selectedColor)
                  ?.heights.map((height) => ({
                    id: height.id,
                    name: `${height.feet} ft`,
                    imageUrl: height.imageUrl,
                  })) || []
              }
              selectedId={selectedHeight}
              onSelect={handleHeightSelect}
              onAddNew={handleAddNewHeight}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export async function fetchMaterials() {
  return await fetch(
    `${process.env.NEXT_PUBLIC_FENCIER_API_URL}/material`
  ).then((response) => response.json());
}
