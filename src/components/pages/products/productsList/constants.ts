export const SortType = {
  NONE: '-',
  A_Z: 'A - Z',
  Z_A: 'Z - A',
  PRICE_ASC: 'Price: low to high',
  PRICE_DESC: 'Price: high to low'
};

export const SortMenuItems = Object.values(SortType).map((value) => ({ id: value, name: value }));

export const PRODUCTS_PER_PAGE = 20;
