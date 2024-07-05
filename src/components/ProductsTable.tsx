"use client";
import React, { useState, useEffect } from "react";
import { Material } from "@/interfaces/material";
import SelectionSection from "@/components/SelectionSection";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function ProductForm() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(
    null
  );
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedHeight, setSelectedHeight] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const params = useSearchParams();

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

  useEffect(() => {
    const fetchAndSetMaterials = async () => {
      setIsLoading(true);
      const data = await fetchMaterials();
      setMaterials(data);
      setIsLoading(false);
    };
    fetchAndSetMaterials();
  }, []);

  useEffect(() => {
    const fetchAndSetMaterials = async () => {
      if (!params.get("addMaterial") && !params.get("deleteMaterials")) {
        setIsLoading(true);
        const data = await fetchMaterials();
        setMaterials(data);
        setIsLoading(false);
      }
    };
    fetchAndSetMaterials();
  }, [params]);

  return (
    <section className="w-full">
      <div className="flex flex-col">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loader2 className="animate-spin" />
          </div>
        ) : (
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
            />
            {selectedMaterial && (
              <SelectionSection
                title="Styles"
                items={selectedMaterial.styles}
                selectedId={selectedStyle}
                onSelect={handleStyleSelect}
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
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export async function fetchMaterials() {
  return await fetch(
    `${process.env.NEXT_PUBLIC_FENCIER_API_URL}/material`
  ).then((response) => response.json());
}
