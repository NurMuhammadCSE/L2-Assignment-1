import { z } from "zod";

// Variant Schema
const variantSchema = z.object({
  type: z.string().min(1, "Type is required").trim(),
  value: z.string().min(1, "Value is required").trim(),
});

// Inventory Schema
const inventorySchema = z.object({
  quantity: z.number().min(0, "Quantity must be at least 0"),
  inStock: z.boolean(),
});

// Product Schema
const productSchema = z.object({
  name: z.string().min(1, "Name is required").trim(),
  description: z.string().min(1, "Description is required").trim(),
  price: z.number().min(0, "Price must be at least 0"),
  category: z.string().min(1, "Category is required").trim(),
  tags: z.array(z.string().trim()),
  variants: z.array(variantSchema),
  inventory: inventorySchema,
});

// Export the schemas
export const ProductValidation = {
  productSchema,
};
