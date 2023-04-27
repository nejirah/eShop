import React from 'react';
import BreadCrumbsComponent from '../../common/BreadCrumbs/BreadCrumbs';
import PromotionComponent from './Promotion';
import FilterComponent from './Filter';
import { Grid } from '@mui/material';
import ProductComponent from './productsContainer';
import SubscribeComponent from './Subscribe';
import { BreadcrumbText } from '../../common/BreadCrumbs/constants';

const GridStyle = {
  justifyContent: 'center'
};

const ProductsPage = () => {
  return (
    <div className="ProductPage">
      <BreadCrumbsComponent text={BreadcrumbText.Products} />
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
