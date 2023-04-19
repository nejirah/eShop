export type ProductCardProps = {
  productName: string;
  productPrice: number;
  image?: string;
  rating: number;
};

export interface ProductData {
  id: number;
  title: string;
  price: number;
  images: string;
  rating: number;
}
