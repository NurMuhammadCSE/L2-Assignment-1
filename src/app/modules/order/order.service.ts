import { ProductModel } from '../product/product.model';
import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrder = async (payload: TOrder) => {
  const result = await OrderModel.create(payload);
  return result;
};

const getAllOrders = async () => {
  return OrderModel.find();
};

const getOrdersByEmail = async (email: string) => {
  return OrderModel.find({ email });
};

export const OrderServices = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
};
