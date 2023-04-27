import { get } from './GetProducts';
import { getById } from './GetProductById';

export const GetProducts = () => {
    return get();
};
export const GetProductsById = (id: number) => {
    return getById(id);
}
