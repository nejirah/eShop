import React, { useEffect, useState } from 'react';
import BreadCrumbsComponent from '../../common/BreadCrumbs/BreadCrumbs';
import PromotionComponent from './Promotion';
import FilterComponent from './filter/Filter';
import { Grid } from '@mui/material';
import ProductComponent from './productsContainer';
import SubscribeComponent from './Subscribe';
import { BreadcrumbText } from '../../common/BreadCrumbs/constants';
import { FilterProps } from './filter/constants';
import { Product } from './productCard/types';
import { getProducts } from '../../../services';
import { PRODUCTS_PER_PAGE } from './productsContainer/constants';
import { Loader } from '../../common/Loader';
import PaginationComponent from '../../common/Pagination';

const GridStyle = {
  justifyContent: 'center'
};

const ProductsPage = () => {
  const [filters, setFilters] = useState<FilterProps>({
    categories: [],
    rating: [],
    price: [1, 3000]
  });

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

  const dataLength = data.filter(
    (c) =>
      (!filters.categories.length || filters.categories.includes(c.category)) &&
      (!filters.rating.length || filters.rating.includes(Math.ceil(c.rating))) &&
      (!filters.price.length || (c.price > filters.price[0] && c.price < filters.price[1]))
  ).length;
  const pageCount = Math.ceil(dataLength / PRODUCTS_PER_PAGE);

  const productsToDisplay = data
    .filter(
      (p) =>
        (!filters.categories.length || filters.categories.includes(p.category)) &&
        (!filters.rating.length || filters.rating.includes(Math.ceil(p.rating))) &&
        (!filters.price.length || (p.price > filters.price[0] && p.price < filters.price[1]))
    )
    .slice((pageNumber - 1) * 20, pageNumber * PRODUCTS_PER_PAGE);

  const changePage = (event: React.ChangeEvent<unknown>, selected: number) => {
    setPageNumber(selected);
  };

  return (
    <div className="ProductPage">
      <BreadCrumbsComponent text={BreadcrumbText.Products} />
      <PromotionComponent />
      <Grid container sx={GridStyle}>
        <Grid item xs={3}>
          <FilterComponent filters={filters} setFilters={setFilters} />
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
