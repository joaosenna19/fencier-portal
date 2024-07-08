import { uploadImage } from "@/services/uploadImage";
import { MaterialFormSchema } from "@/components/AddMaterialModal";
import { UseFormReset } from "react-hook-form";
import { StyleFormSchema } from "@/components/AddStyleModal";
import { ColorFormSchema } from "@/components/AddColorModal";
import { HeightFormSchema } from "@/components/AddHeightModal";

export const handleAddMaterialSubmitForm = async (
  data: MaterialFormSchema,
  reset: UseFormReset<MaterialFormSchema>,
  tenantId: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    const materialImageUrl = await uploadImage(data.materialImage);
    const stylesWithUrls = await Promise.all(
      data.styles.map(async (style) => {
        const styleImageUrl = await uploadImage(style.styleImage);
        const colorsWithUrls = await Promise.all(
          style.colors.map(async (color) => {
            const colorImageUrl = await uploadImage(color.colorImage);
            return {
              ...color,
              colorImageUrl,
            };
          })
        );
        return {
          ...style,
          styleImageUrl,
          colors: colorsWithUrls,
        };
      })
    );

    const payload = {
      name: data.materialName,
      materialImageUrl,
      styles: stylesWithUrls.map((style) => ({
        name: style.name,
        styleImageUrl: style.styleImageUrl,
        colors: style.colors.map((color) => ({
          name: color.name,
          colorImageUrl: color.colorImageUrl,
          heights: color.heights,
        })),
      })),
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_FENCIER_API_URL}/material?tenantId=${tenantId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      return { success: false, error: "Something went wrong" };
    }

    await response.json();
    reset();
    return { success: true };
  } catch (error) {
    return { success: false, error: "Something went wrong" };
  }
};

export const handleAddStyleSubmitForm = async (
  data: StyleFormSchema,
  materialId: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    const styleImageUrl = await uploadImage(data.styleImage);
    const colorsWithUrls = await Promise.all(
      data.colors.map(async (color) => {
        const colorImageUrl = await uploadImage(color.colorImage);
        return {
          ...color,
          colorImageUrl,
        };
      })
    );

    const payload = {
      name: data.name,
      styleImageUrl,
      colors: colorsWithUrls.map((color) => ({
        name: color.name,
        colorImageUrl: color.colorImageUrl,
        heights: color.heights,
      })),
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_FENCIER_API_URL}/style?materialId=${materialId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      return { success: false, error: "Something went wrong" };
    }

    await response.json();
    return { success: true };
  } catch (error) {
    return { success: false, error: "Something went wrong" };
  }
};

export const handleAddColorSubmitForm = async (
  data: ColorFormSchema,
  styleId: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    const colorImageUrl = await uploadImage(data.colorImage);
    const payload = {
      name: data.name,
      colorImageUrl,
      heights: data.heights,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_FENCIER_API_URL}/color?styleId=${styleId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      return { success: false, error: "Something went wrong" };
    }

    await response.json();
    return { success: true };
  } catch (error) {
    return { success: false, error: "Something went wrong" };
  }
};

export const handleAddHeightSubmitForm = async (
  data: HeightFormSchema,
  colorId: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    const payload = {
      ...data,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_FENCIER_API_URL}/height?colorId=${colorId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      return { success: false, error: "Something went wrong" };
    }

    await response.json();
    return { success: true };
  } catch (error) {
    console.error("Error during form submission:", error);
    return { success: false, error: "Something went wrong" };
  }
};
