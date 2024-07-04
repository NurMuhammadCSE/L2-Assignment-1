import express from 'express';
import { productController } from './product.controller';

const router = express.Router();

router.post('/', productController.createProduct);
//! Mistake 2
router.get('/', productController.getAllProducts);

router.get('/:productId', productController.getSingleProduct);

router.put('/:productId', productController.productUpdate)

router.delete('/:productId', productController.productDelete)

export const ProductRouter = router;
