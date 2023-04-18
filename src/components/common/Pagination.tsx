import React from 'react';
import { Pagination, Grid } from '@mui/material';

const GridStyle = {
  display: 'flex',
  justifyContent: 'center',
  mt: '50px'
};

const PaginationComponent = () => (
  <Grid xs={12} sx={GridStyle}>
    <Pagination count={10} color="primary" />
  </Grid>
);

export default PaginationComponent;
