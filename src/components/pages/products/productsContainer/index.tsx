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

const ProductComponent = () => {
  const [data, setData] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await GetProducts;
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

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
        {data.map((p) => (
          <ProductCardComponent
            key={p?.id}
            productName={p?.title}
            productPrice={p?.price}
            image={p?.images[0]}
            rating={p?.rating}
          />
        ))}
        <PaginationComponent></PaginationComponent>
      </Loader>
    </Grid>
  );
};

export default ProductComponent;
