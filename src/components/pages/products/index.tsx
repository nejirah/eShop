import React from 'react';
import BreadCrumbsComponent from '../../common/BreadCrumbs';
import PromotionComponent from './Promotion';
import FilterComponent from './Filter';
import { Grid } from '@mui/material';
import ProductComponent from './productsContainer';
import SubscribeComponent from './Subscribe';

const GridStyle = {
  justifyContent: 'center'
};

const ProductsPage = () => {
  return (
    <div className="ProductPage">
      <BreadCrumbsComponent />
      <PromotionComponent />
      <Grid container sx={GridStyle}>
        <Grid item xs={3}>
          <FilterComponent />
        </Grid>
        <Grid item xs={7}>
          <ProductComponent />
        </Grid>
      </Grid>
      <SubscribeComponent />
    </div>
  );
};

export default ProductsPage;
