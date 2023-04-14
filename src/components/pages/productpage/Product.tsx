import React from 'react';
import { Grid, Typography, Select, MenuItem } from '@mui/material';
import ProductCardComponent from './ProductCard';
import PaginationComponent from '../../common/Pagination';

const age = 'A-Z';

const GridItemStyle = {
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center'
};

const ProductComponent = () => (
  <Grid container xs={12}>
    <Grid item xs={6} display={'flex'} alignItems={'center'}>
      <Typography variant="body1" fontWeight="bold">
        118 results found
      </Typography>
    </Grid>
    <Grid item xs={6} sx={GridItemStyle}>
      <Typography mr="10px">Sort by: </Typography>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
        value={age} // use default value here
      >
        <MenuItem value={'A-Z'}>A-Z</MenuItem>
        <MenuItem value={'10'}>Ten</MenuItem>
        <MenuItem value={'20'}>Twenty</MenuItem>
        <MenuItem value={'30'}>Thirty</MenuItem>
      </Select>
    </Grid>
    <ProductCardComponent />
    <PaginationComponent></PaginationComponent>
  </Grid>
);

export default ProductComponent;
