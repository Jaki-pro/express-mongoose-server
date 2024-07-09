import { z } from "zod";

const productValidationSchema = z.object({
  body: z.object({
    name: z.string().trim().min(1, { message: "Name is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    category: z.string().min(1, { message: "Category is required" }),
    brand: z.string().min(1, { message: "Brand is required" }),
    stock: z
      .number()
      .int()
      .nonnegative({ message: "Stock must be a non-negative integer" }),
    rating: z
      .number()
      .min(0, { message: "Rating must be at least 0" })
      .max(5, { message: "Rating must be at most 5" }),
    price: z
      .number()
      .nonnegative({ message: "Price must be a non-negative number" }),
    image: z.string().min(1, { message: "Image is required" }).optional(),
  }),
});
export const productValidations = {
  productValidationSchema,
};
