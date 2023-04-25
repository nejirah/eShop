import React from 'react';
import { CircularProgress, Grid } from '@mui/material';

interface LoaderProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const LoaderStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px'
};

export const Loader = (props: LoaderProps) => {
  return props.isLoading ? (
    <Grid xs={12} sx={LoaderStyle}>
      <CircularProgress size="60px" />
    </Grid>
  ) : (
    <>{props.children}</>
  );
};
