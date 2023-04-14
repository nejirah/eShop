import React from 'react';
import { Grid, Typography } from '@mui/material';
import TypographyH6Component from '../../common/TypographyH6';
import MainButtonComponent from '../../common/Button';

const ImageSource = 'https://assets.maccarianagency.com/backgrounds/img66.png';

const ContainerStyle = {
  justifyContent: 'center',
  my: 3
};

const GridItemStyle = {
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '20px',
  border: '1px solid lightgrey'
};

const PromotionComponent = () => (
  <Grid container sx={ContainerStyle}>
    <Grid item xs={10} sx={GridItemStyle}>
      <Grid item justifyContent="start" xs={2}>
        <img src={ImageSource} width="auto" height="100px"></img>
      </Grid>

      <Grid xs={8}>
        <TypographyH6Component text="Save up to 30%! Discover our latest promotions"></TypographyH6Component>
        <Typography variant="body1" color="grey">
          We believe lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat elit
          vitae enim lacinia semper.
        </Typography>
      </Grid>

      <Grid item display="flex" justifyContent="center" xs={2}>
        <MainButtonComponent text="Shop now"></MainButtonComponent>
      </Grid>
    </Grid>
  </Grid>
);

export default PromotionComponent;
