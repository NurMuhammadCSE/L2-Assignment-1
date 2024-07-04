import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrder = async(payload: TOrder) => {
    const result = await OrderModel.create(payload);
    return result;
}

const getAllOrders = async() => {
    const result = await OrderModel.find();
    return result;
}

export const OrderService = {
    createOrder,
    getAllOrders
}