import { CircularProgress, Grid } from '@mui/material';
import React from 'react';

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
  if (props.isLoading) {
    return (
      <Grid xs={12} sx={LoaderStyle}>
        <CircularProgress size="60px" />
      </Grid>
    );
  }
  return <>{props.children}</>;
};
