import { ProductData } from '../components/pages/products/productCard/types';
import { instance } from './axios';
import { products } from './constants';

export const getProducts = async (): Promise<ProductData[]> => {
  try {
    const response = await instance.get(products);
    return response.data.products;
  } catch (error) {
    throw new Error();
  }
};
