import { ProductData } from '../components/pages/products/productCard/types';
import { instance } from './axios';
import { products } from './constants';

export const getProductById = async (id: number): Promise<ProductData> => {
  try {
    const response = await instance.get(`${products}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
