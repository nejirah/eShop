import { instance } from './axios';
import { categories } from './constants';

export const getCategories = async (): Promise<string[]> => {
  try {
    const response = await instance.get(categories);
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
