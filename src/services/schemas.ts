import { z } from "zod";

export const heightSchema = z.object({
  feet: z.number().min(1, "Height must be at least 1 foot"),
  pricePer8Ft: z.number().min(0, "Price must be a positive number"),
  pricePer4Ft: z.number().min(0, "Price must be a positive number"),
  priceSingleGate: z.number().min(0, "Price must be a positive number"),
  priceDoubleGate: z.number().min(0, "Price must be a positive number"),
  gateFeet: z.number().min(0, "Gate height must be a positive number"),
});

export const colorSchema = z.object({
  name: z.string().min(1, "Color name is required"),
  colorImage: z.instanceof(File).refine((file) => file.size > 0, {
    message: "Image file is required",
  }),
  heights: z.array(heightSchema).min(1, "At least one height is required"),
});

export const styleSchema = z.object({
  name: z.string().min(1, "Style name is required"),
  styleImage: z.instanceof(File).refine((file) => file.size > 0, {
    message: "Image file is required",
  }),
  colors: z.array(colorSchema).min(1, "At least one color is required"),
});

export const materialSchema = z.object({
  materialName: z.string().min(1, "Material name is required"),
  materialImage: z.instanceof(File).refine((file) => file.size > 0, {
    message: "Image file is required",
  }),
  styles: z.array(styleSchema).min(1, "At least one style is required"),
});
