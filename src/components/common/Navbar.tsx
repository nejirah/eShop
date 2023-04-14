import React from 'react';
import { Grid, Typography, Toolbar, Stack, Button } from '@mui/material';
import MainButtonComponent from './Button';
import { Link } from 'react-router-dom';

const ButtonStyle = {
  color: 'inherit',
  textTransform: 'capitalize'
};

const ContainerStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  position: 'static',
  my: 3
};

const StackStyle = {
  spacing: 2,
  justifyContent: 'end'
};

const ButtonText = [
  { id: 1, name: 'homepage' },
  { id: 2, name: 'products' }
];

const NavBarComponent = () => (
  <Grid container sx={ContainerStyle}>
    <Grid item xs={3}>
      <Toolbar>
        <Typography variant="h5">eShop logo</Typography>
      </Toolbar>
    </Grid>
    <Grid item xs={7}>
      <Stack sx={StackStyle} direction="row">
        {ButtonText.map((bt) => (
          <Link to={'/' + bt.name} key={bt.id} style={{ color: 'black' }}>
            <Button sx={ButtonStyle}>{bt.name}</Button>
          </Link>
        ))}
        <MainButtonComponent text="Buy now"></MainButtonComponent>
      </Stack>
    </Grid>
  </Grid>
);

export default NavBarComponent;
