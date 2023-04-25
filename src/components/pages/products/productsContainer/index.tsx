import React from 'react';
import { Grid, Typography, Select, MenuItem } from '@mui/material';
import ProductCardComponent from '../productCard';
import PaginationComponent from '../../../common/Pagination';
import { useEffect, useState } from 'react';
import { GetProducts } from '../../../../services';
import { ProductData } from '../productCard/types';
import { Filter } from './constants';
import { GridStyled, GridEndStyled } from './styles';
import { Loader } from '../../../common/Loader';
import { PRODUCTS_PER_PAGE } from './constants';

const ProductComponent = () => {
  const [data, setData] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  const pageCount = Math.ceil(data.length / PRODUCTS_PER_PAGE);

  const displayProducts = data
    .slice((pageNumber - 1) * 20, pageNumber * PRODUCTS_PER_PAGE)
    .map((p) => (
      <ProductCardComponent
        key={p?.id}
        productName={p?.title}
        productPrice={p?.price}
        image={p?.images[0]}
        rating={p?.rating}
      />
    ));

  useEffect(() => {
    const fetchData = async () => {
      const result = await GetProducts;
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  const changePage = (event: React.ChangeEvent<unknown>, selected: number) => {
    setPageNumber(selected);
  };

  return (
    <Grid container xs={12}>
      <GridStyled item xs={6}>
        <Typography variant="body1" fontWeight="bold">
          {data.length} results found
        </Typography>
      </GridStyled>
      <GridEndStyled item xs={6}>
        <Typography mr="10px">Sort by: </Typography>
        <Select label="Filter" defaultValue="A-Z">
          {Filter.map((p) => (
            <MenuItem key={p.id} value={p.name}>
              {p.name}
            </MenuItem>
          ))}
        </Select>
      </GridEndStyled>
      <Loader isLoading={loading}>
        {displayProducts}
        <PaginationComponent
          count={pageCount}
          onChange={changePage}
          page={pageNumber}
        ></PaginationComponent>
      </Loader>
    </Grid>
  );
};

export default ProductComponent;
