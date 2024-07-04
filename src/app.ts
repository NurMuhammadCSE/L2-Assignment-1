import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { ProductRouter } from './app/modules/product/product.routes';
import { OrderRoutes } from './app/modules/order/order.routes';
const app = express();

dotenv.config();

// Parser
app.use(cors());
app.use(express.json());

// Application
app.use('/api', ProductRouter);
app.use('/api', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
