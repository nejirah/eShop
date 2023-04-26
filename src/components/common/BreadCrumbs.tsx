import React from 'react';
import { Breadcrumbs, Link, Typography, Grid } from '@mui/material';

const GridStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  px: '160px',
  py: '20px',
  backgroundColor: '#f7fafe'
};

type BreadCrumbsProps = {
  text: string;
};

const BreadCrumbsComponent = (props: BreadCrumbsProps) => (
  <Grid xs={12} sx={GridStyle}>
    <Typography>Product listing</Typography>
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" href="/homepage">
        Home
      </Link>
      <Typography>{props.text}</Typography>
    </Breadcrumbs>
  </Grid>
);

export default BreadCrumbsComponent;
