import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';
import validator from 'validator';

const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: true,
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: 'Valid Email',
      },
      trim: true,
    },
    productId: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const OrderModel = model<TOrder>('Order', orderSchema);
