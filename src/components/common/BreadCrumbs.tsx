import React from 'react';
import { Breadcrumbs, Link, Typography, Grid } from '@mui/material';

const GridStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  px: '160px',
  py: '20px',
  backgroundColor: '#f7fafe'
};

const BreadCrumbsComponent = () => (
  <Grid xs={12} sx={GridStyle}>
    <Typography>Product listing</Typography>
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" href="/homepage">
        Home
      </Link>
      <Typography>Products</Typography>
    </Breadcrumbs>
  </Grid>
);

export default BreadCrumbsComponent;
