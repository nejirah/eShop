import { Product } from '../productCard/types';
import { SortStates } from '../productsContainer/constants';

export const Rating = [
  { id: 1, name: '1 star', value: 1 },
  { id: 2, name: '2 star', value: 2 },
  { id: 3, name: '3 star', value: 3 },
  { id: 4, name: '4 star', value: 4 },
  { id: 5, name: '5 star', value: 5 }
];

export type FilterProps = {
  categories: string[];
  rating: number[];
  price: number[];
};

export type ProductData = {
  data: Product[];
  dataLength: number;
  pageCount: number;
  sortingType: SortStates;
};

export type FilterState = {
  filters: FilterProps;
  setFilters: React.Dispatch<React.SetStateAction<FilterProps>>;
  checked: boolean;
};
