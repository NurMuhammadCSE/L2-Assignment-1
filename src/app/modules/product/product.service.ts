import TProduct from './product.interface';
import { ProductModel } from './product.model';

const createProduct = async (payload: TProduct) => {
  //! Mistake 1
  const result = await ProductModel.create(payload);
  return result;
};

const getAllProducts = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProduct = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};

const productUpdate = async (id: string, updateProductData:TProduct) => {
    //! Hard Mistake
  const result = await ProductModel.findByIdAndUpdate(id, updateProductData, {new: true});
  return result;
};

const productDelete = async (id: string,) => {
    //! Hard Mistake
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  productUpdate,
  productDelete
};
