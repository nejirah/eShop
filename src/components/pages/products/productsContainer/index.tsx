import React from 'react';
import { Grid, Typography, Select, MenuItem } from '@mui/material';
import ProductCardComponent from '../productCard';
import { Product } from '../productCard/types';
import { Filter } from './constants';
import { GridStyled, GridEndStyled } from './styles';
import { ProductData } from '../filter/constants';

const ProductComponent = (props: ProductData) => {
  const displayProducts = (data: Product[]) => {
    return data.map((p) => (
      <ProductCardComponent
        key={p?.id}
        id={p?.id}
        title={p?.title}
        price={p?.price}
        image={p?.images && p.images[0]}
        rating={p?.rating}
        category={p?.category}
      />
    ));
  };

  return (
    <Grid container xs={12}>
      <GridStyled item xs={6}>
        <Typography variant="body1" fontWeight="bold">
          {props.dataLength} results found
        </Typography>
      </GridStyled>
      <GridEndStyled item xs={6}>
        <Typography mr="10px">Sort by: </Typography>
        <Select label="Sort" defaultValue="A-Z">
          {Filter.map((p) => (
            <MenuItem key={p.id} value={p.name}>
              {p.name}
            </MenuItem>
          ))}
        </Select>
      </GridEndStyled>
      {displayProducts(props.data)}
    </Grid>
  );
};

export default ProductComponent;
