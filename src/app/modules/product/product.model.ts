import { model, Schema } from 'mongoose';
import TProduct, { TInventory, TVariant } from './product.interface';

const variantSchema = new Schema<TVariant>(
  {
    type: {
      type: String,
      required: true,
      trim: true,
    },
    value: {
      type: String,
      required: true,
      trim: true,
    },
  },

  {
    _id: false,
  }
);

const inventorySchema = new Schema<TInventory>(
  {
    quantity: {
      type: Number,
      required: [true, 'Product Quantity is Must'],
      trim: true,
    },
    inStock: {
      type: Boolean,
      required: true,
      trim: true,
    },
  },
  { _id: false }
);

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
      trim: true,
    },
  ],
  variants: [variantSchema],
  inventory: inventorySchema,
});

export const ProductModel = model<TProduct>('Product', productSchema);
