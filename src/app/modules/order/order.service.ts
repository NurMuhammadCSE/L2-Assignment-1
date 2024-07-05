import { ProductModel } from '../product/product.model';
import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrder = async (payload: TOrder) => {
  const result = await OrderModel.create(payload);
  return result;
};

const getAllOrders = async (email?: string) => {
    let filter = {};
  if (email) {
    filter = {
      $or: [
        {
          email: { $regex: email, $options: 'i' },
        },
      ],
    };
  }
  const result = await OrderModel.find(filter);
  return result;
};

// const getOrdersByEmail = async (email?: string) => {
//   let filter = {};
//   if (email) {
//     filter = {
//       $or: [
//         {
//           email: { $regex: email, $options: 'i' },
//         },
//       ],
//     };
//   }

//   // const result = await OrderModel.find({ email });
//   const result = await OrderModel.find(filter);
//   return result;
// };

export const OrderServices = {
  createOrder,
  getAllOrders,
  // getOrdersByEmail,
};
