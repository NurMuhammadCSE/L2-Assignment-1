import { Router } from 'express';
import { OrderController } from './order.controller';

const router = Router();

router.post('/', OrderController.createOrder);
router.get('/', OrderController.getAllOrders);
router.get('/', OrderController.getOrdersByEmail);

export const OrderRoutes = router;
