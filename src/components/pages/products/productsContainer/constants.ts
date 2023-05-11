export const SortType = {
  None: 'None',
  A_Z: 'A_Z',
  Z_A: 'Z_A',
  Price_ASC: 'Price_ASC',
  Price_DESC: 'Price_DESC'
};

export const SortValues = [
  { id: SortType.None, name: 'None' },
  { id: SortType.A_Z, name: 'A-Z' },
  { id: SortType.Z_A, name: 'Z-A' },
  { id: SortType.Price_ASC, name: 'Price: low to high' },
  { id: SortType.Price_DESC, name: 'Price: high to low' }
];

export type SortStates = {
  sortType: string;
  setSortType: React.Dispatch<React.SetStateAction<string>>;
};

export const PRODUCTS_PER_PAGE = 20;
