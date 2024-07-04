import { Request, Response } from 'express';
import { OrderService } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    // Validate order data
    // const parsedOrderData = ProductValidation.productSchema.parse(productData);

    const result = await OrderService.createOrder(orderData);
    // console.log(result);

    res.status(200).json({
      success: true,
      message: 'Order Created Successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Order is Not Successfully Created',
      error,
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.getAllOrders();

    res.status(200).json({
      success: true,
      message: 'Order Fetched Successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Order is Not Successfully Fetched',
      error,
    });
  }
};


export const OrderController = {
    createOrder,
    getAllOrder
}