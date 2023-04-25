export type Product = {
  id?: number;
  title: string;
  price: number;
  rating: number;
  images?: string[];
};

export interface ProductData extends Omit<Product, 'images'> {
  image?: string;
}
