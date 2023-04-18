import React from 'react';
import { Grid, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import TypographyH4Component from '../../common/TypographyH4';

const ImageSource = 'https://assets.maccarianagency.com/backgrounds/img35.png';
const ImageSource2 = 'https://assets.maccarianagency.com/backgrounds/img36.png';

const ContainerStyle = {
  justifyContent: 'center',
  my: 3
};

const GridItemStyle = {
  bgcolor: blue[500],
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around'
};

const GridStyle = {
  color: 'white',
  mx: '150px',
  textAlign: 'center'
};

const MoreProductsComponent = () => (
  <Grid container sx={ContainerStyle}>
    <Grid item xs={10} sx={GridItemStyle}>
      <Grid item justifyContent="start">
        <img src={ImageSource}></img>
      </Grid>

      <Grid sx={GridStyle}>
        <TypographyH4Component text="Fide more products"></TypographyH4Component>
        <Typography variant="body1">
          If we are no longer the right solution for you, we will allow you to export and take your
          data at anytime for any reason.
        </Typography>
      </Grid>

      <Grid item justifyContent="end">
        <img src={ImageSource2}></img>
      </Grid>
    </Grid>
  </Grid>
);

export default MoreProductsComponent;
