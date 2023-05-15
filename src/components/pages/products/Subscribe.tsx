import React from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import TypographyH4Component from '../../common/TypographyH4';

const ContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  p: '50px',
  backgroundColor: '#f7fafe',
  mt: '20px'
};

const GridItemStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  mt: '15px'
};

const ButtonStyle = {
  textTransform: 'none'
};

const SubscribeComponent = () => (
  <Grid container sx={ContainerStyle} xs={12}>
    <Typography color="grey">SUBSCRIBE</Typography>
    <TypographyH4Component text="Get the latest from our store"></TypographyH4Component>
    <Grid item sx={GridItemStyle} xs={12}>
      <TextField fullWidth id="outlined-basic" label="Email" variant="standard" />
      <Button variant="contained" size="large" sx={ButtonStyle}>
        Subscribe
      </Button>
    </Grid>
  </Grid>
);

export default SubscribeComponent;
