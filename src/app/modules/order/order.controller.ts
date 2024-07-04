import { Request, Response } from 'express';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body;
        const result = await OrderServices.createOrder(orderData);

        res.status(201).json({
            success: true,
            message: 'Order created successfully!',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error,
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
