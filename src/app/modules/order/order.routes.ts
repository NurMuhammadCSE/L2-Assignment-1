import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router.post('/order', OrderController.createOrder);

router.get('/orders', OrderController.getAllOrder);

export const OrderRoutes = router;
