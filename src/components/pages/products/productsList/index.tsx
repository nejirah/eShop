import React from 'react';
import { Grid, Typography, Select, MenuItem, FormControl, SelectChangeEvent } from '@mui/material';
import ProductCardComponent from '../productCard';
import { Product } from '../productCard/types';
import { SortMenuItems } from './constants';
import { GridStyled, GridEndStyled } from './styles';

type ProductProps = {
  data: Product[];
  dataLength: number;
  pageCount: number;
  sortingType: string;
  setSortType: React.Dispatch<React.SetStateAction<string>>;
};

const ProductsList = ({ data, dataLength, sortingType, setSortType }: ProductProps) => {
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

  const handleSortValueChange = (event: SelectChangeEvent) => {
    setSortType(event.target.value);
  };

  return (
    <Grid container xs={12}>
      <GridStyled item xs={6}>
        <Typography variant="body1" fontWeight="bold">
          {dataLength} results found
        </Typography>
      </GridStyled>
      <GridEndStyled item xs={6}>
        <Typography mr="10px">Sort by: </Typography>
        <FormControl>
          <Select onChange={handleSortValueChange} value={sortingType}>
            {SortMenuItems.map((p) => (
              <MenuItem key={p.id} value={p.name}>
                {p.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </GridEndStyled>
      {displayProducts(data)}
    </Grid>
  );
};

export default ProductsList;
