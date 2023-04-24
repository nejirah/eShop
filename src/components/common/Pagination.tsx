import React from 'react';
import { Pagination, Grid } from '@mui/material';

const GridStyle = {
  display: 'flex',
  justifyContent: 'center',
  mt: '50px'
};

type PaginationProps = {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, selected: number) => void;
};

const PaginationComponent = (props: PaginationProps) => (
  <Grid xs={12} sx={GridStyle}>
    <Pagination count={props.count} page={props.page} onChange={props.onChange} color="primary" />
  </Grid>
);

export default PaginationComponent;
