import { Request, Response } from 'express';
import { ProductService } from './product.service';
import { ProductValidation } from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    // Validate order data
    const parsedProductData = ProductValidation.productSchema.parse(productData);

    const result = await ProductService.createProduct(parsedProductData);
    // console.log(result);

    res.status(200).json({
      success: true,
      message: 'Product Created Successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Product is Not Successfully Created',
      error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  if (Object.keys(req.query).length == 0) {
    try {
      const result = await ProductService.getAllProducts();
      //   console.log(result);

      res.status(200).json({
        success: true,
        message: 'Product Fetched Successfully!',
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Product is Not Successfully Fetched',
        error,
      });
    }
  } else {
    try {
      const searchTerm = req.query.searchTerm as string | undefined;
      const result = await ProductService.getAllProducts(searchTerm);

      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Product is Not Successfully Fetched',
        error,
      });
    }
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const result = await ProductService.getSingleProduct(productId);
    //   console.log(result);

    res.status(200).json({
      success: true,
      message: 'Single Product Fetched Successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Single Product is Not Successfully Fetched',
      error,
    });
  }
};

const productUpdate = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const result = await ProductService.productUpdate(productId, req.body);
    //   console.log(result);

    res.status(200).json({
      success: true,
      message: 'Single Product Update Successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Single Product is Not Successfully Updated',
      error,
    });
  }
};

const productDelete = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const result = await ProductService.productDelete(productId);
    //   console.log(result);

    res.status(200).json({
      success: true,
      message: 'Single Product Deleted Successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Single Product is Not Successfully Delete',
      error,
    });
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  productUpdate,
  productDelete,
};
