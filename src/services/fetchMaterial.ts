import { Color, Style, Material } from "@/interfaces/material";

export async function fetchColors(styleId: string): Promise<Color[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_FENCIER_API_URL}/color?styleId=${styleId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch colors");
  }
  return response.json();
}

export async function fetchStyles(materialId: string): Promise<Style[]> {
  return await fetch(
    `${process.env.NEXT_PUBLIC_FENCIER_API_URL}/style?materialId=${materialId}`
  ).then((response) => response.json());
}

export async function fetchMaterials(): Promise<Material[]> {
  return await fetch(
    `${process.env.NEXT_PUBLIC_FENCIER_API_URL}/material`
  ).then((response) => response.json());
}
