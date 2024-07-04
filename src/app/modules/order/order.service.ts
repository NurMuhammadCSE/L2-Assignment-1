import { ProductModel } from '../product/product.model';
import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrder = async (orderData: TOrder) => {
    const product = await ProductModel.findById(orderData.productId);
    
    if (!product) {
        throw new Error('Product not found');
    }
    
    if (product.inventory.quantity < orderData.quantity) {
        throw new Error('Insufficient quantity available in inventory');
    }
    
    product.inventory.quantity -= orderData.quantity;
    product.inventory.inStock = product.inventory.quantity > 0;
    
    await product.save();
    
    const order = new OrderModel(orderData);
    return order.save();
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
