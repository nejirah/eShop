import React, { useEffect, useState } from 'react';
import BreadCrumbsComponent from '../../common/BreadCrumbs/BreadCrumbs';
import PromotionComponent from './Promotion';
import FilterComponent from './filter/Filter';
import { Grid } from '@mui/material';
import ProductComponent from './productsList';
import SubscribeComponent from './Subscribe';
import { BreadcrumbText } from '../../common/BreadCrumbs/constants';
import { FilterProps } from './filter/constants';
import { Product } from './productCard/types';
import { getProducts } from '../../../services';
import { PRODUCTS_PER_PAGE } from './productsList/constants';
import { Loader } from '../../common/Loader';
import PaginationComponent from '../../common/Pagination';
import { SortType } from './productsList/constants';

const GridStyle = {
  justifyContent: 'center'
};

const ProductsPage = () => {
  const [filters, setFilters] = useState<FilterProps>({
    categories: [],
    rating: [],
    price: [1, 3000]
  });

  const [sortType, setSortType] = useState<string>('-');
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProducts();
        setData(result);
        setLoading(false);
      } catch (error) {
        setErrorMessage('An error occurred while fetching product data.');
      }
    };
    setLoading(true);
    fetchData();
  }, []);

  function sortData(a: Product, b: Product): number {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    const priceA = a.price;
    const priceB = b.price;

    switch (sortType) {
      case SortType.A_Z:
        if (titleA < titleB) {
          return -1;
        } else if (titleA > titleB) {
          return 1;
        } else {
          return 0;
        }
      case SortType.Z_A:
        if (titleA < titleB) {
          return 1;
        } else if (titleA > titleB) {
          return -1;
        } else {
          return 0;
        }
      case SortType.PRICE_ASC:
        return priceA - priceB;
      case SortType.PRICE_DESC:
        return priceB - priceA;
      default:
        return 0;
    }
  }

  const filteredData = data
    .filter(
      (c) =>
        (!filters.categories.length || filters.categories.includes(c.category)) &&
        (!filters.rating.length || filters.rating.includes(Math.ceil(c.rating))) &&
        (!filters.price.length || (c.price > filters.price[0] && c.price < filters.price[1]))
    )
    .sort(sortData);
  const dataLength = filteredData.length;
  const pageCount = Math.ceil(dataLength / PRODUCTS_PER_PAGE);
  const productsToDisplay = filteredData.slice(
    (pageNumber - 1) * 20,
    pageNumber * PRODUCTS_PER_PAGE
  );

  const changePage = (event: React.ChangeEvent<unknown>, selected: number) => {
    setPageNumber(selected);
  };

  return (
    <div className="ProductPage">
      <BreadCrumbsComponent text={BreadcrumbText.Products} />
      <PromotionComponent />
      <Grid container sx={GridStyle}>
        <Grid item xs={3}>
          <FilterComponent filters={filters} setFilters={setFilters} checked />
        </Grid>
        <Grid item xs={7}>
          {errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            <>
              <Loader isLoading={loading}>
                <ProductComponent
                  data={productsToDisplay}
                  dataLength={dataLength}
                  pageCount={pageCount}
                  sortingType={sortType}
                  setSortType={setSortType}
                />
              </Loader>
              <PaginationComponent count={pageCount} onChange={changePage} page={pageNumber} />
            </>
          )}
        </Grid>
      </Grid>
      <SubscribeComponent />
    </div>
  );
};

export default ProductsPage;
