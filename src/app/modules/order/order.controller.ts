import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import { ProductModel } from '../product/product.model';
import { OrderModel } from './order.model';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    const product = await ProductModel.findById(orderData.productId);

    // console.log(product);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    if (product.inventory.quantity < orderData.quantity) {
      return res.status(400).json({
        success: false,
        message: 'Insufficient quantity available in inventory',
      });
    }

    product.inventory.quantity -= orderData.quantity;
    product.inventory.inStock = product.inventory.quantity > 0;

    await product.save();

    const result = await OrderModel.create(orderData);

    res.status(201).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Could not create order',
      error: error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrders();
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Could not fetch orders',
      error: error,
    });
  }
};

const getOrdersByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    const result = await OrderServices.getOrdersByEmail(email);
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully for user email!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Could not fetch orders',
      error: error,
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
};
