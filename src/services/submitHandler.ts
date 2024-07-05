import { uploadImage } from "@/services/uploadImage";
import { MaterialFormSchema } from "@/components/AddMaterialModal";
import { UseFormReset } from "react-hook-form";

export const handleSubmitForm = async (
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
