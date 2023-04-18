import React from 'react';
import { Grid, Typography } from '@mui/material';
import { red, blue, grey } from '@mui/material/colors';
import MainButtonComponent from '../../common/Button';
import TypographyH3Component from '../../common/TypographyH3';

const ImageSource = 'https://assets.maccarianagency.com/backgrounds/img34.png';

const ContainerStyle = {
  textAlign: 'left',
  justifyContent: 'center',
  my: 5
};

const GridStyle = {
  my: 2
};

const ProductComericalComponent = () => (
  <Grid container sx={ContainerStyle}>
    <Grid item xs={5}>
      <Grid sx={GridStyle}>
        <TypographyH3Component
          text="Experience your music"
          color={blue[500]}
        ></TypographyH3Component>
        <TypographyH3Component text="like never before"></TypographyH3Component>
      </Grid>

      <Grid sx={GridStyle}>
        <Typography variant="h6" color="gray">
          Supper offer till the end of June. All the original headphones at maximum:
        </Typography>
        <TypographyH3Component text="$299.95" color={red[400]}></TypographyH3Component>
      </Grid>

      <Grid sx={GridStyle}>
        <MainButtonComponent text="Discover the offer"></MainButtonComponent>
      </Grid>

      <Grid bgcolor={grey[100]} borderRadius="10px" p={1} xs={9}>
        <Typography>$60 Apple Music gift card with purchase of select Beats products.*</Typography>
      </Grid>
    </Grid>

    <Grid item xs={5} justifyContent="end" display="flex">
      <img src={ImageSource}></img>
    </Grid>
  </Grid>
);

export default ProductComericalComponent;
