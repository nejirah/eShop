import React from 'react';
import { Grid, Typography, Select, MenuItem } from '@mui/material';
import ProductCardComponent from './ProductCard';
import PaginationComponent from '../../common/Pagination';
import data from '../../../data/productsresponse.json';

const Filter = [
  { id: 1, name: 'A-Z' },
  { id: 2, name: 'Z-A' },
  { id: 3, name: 'Best seller' },
  { id: 4, name: 'Best match' },
  { id: 5, name: 'Price: low to high' },
  { id: 6, name: 'Price: high to low' }
];
const datas = data.products;

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
        label="Filter"
        defaultValue="A-Z"
      >
        {Filter.map((p) => (
          <MenuItem key={p.id} value={p.name}>
            {p.name}
          </MenuItem>
        ))}
      </Select>
    </Grid>
    {datas.map((p) => (
      <ProductCardComponent
        key={p.id}
        productName={p.title}
        productPrice={p.price}
        image={p.images[0]}
        rating={p.rating}
      />
    ))}
    <PaginationComponent></PaginationComponent>
  </Grid>
);

export default ProductComponent;
