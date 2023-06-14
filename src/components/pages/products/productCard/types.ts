export type Product = {
  id?: number;
  title: string;
  price: number;
  rating: number;
  images?: string[];
  category: string;
  brand?: string;
};

export interface ProductData extends Omit<Product, 'images'> {
  image?: string;
}
