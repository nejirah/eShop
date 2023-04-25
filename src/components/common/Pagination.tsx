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

const PaginationComponent = ({ count, page, onChange }: PaginationProps) => (
  <Grid xs={12} sx={GridStyle}>
    <Pagination count={count} page={page} onChange={onChange} color="primary" />
  </Grid>
);

export default PaginationComponent;
