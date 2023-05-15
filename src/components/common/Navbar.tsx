import React from 'react';
import { Grid, Typography, Toolbar, Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { LinkText } from '../../constants/constants';

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

const NavBarLinkComponent = styled(Link)({
  color: 'black',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  margin: '20px'
});

const NavBarComponent = () => (
  <Grid container sx={ContainerStyle}>
    <Grid item xs={3}>
      <Toolbar>
        <Typography variant="h5">eShop logo</Typography>
      </Toolbar>
    </Grid>
    <Grid item xs={6}>
      <Stack sx={StackStyle} direction="row">
        {ButtonText.map((bt) => (
          <NavBarLinkComponent to={`/${bt.name}`} key={bt.id}>
            <Button sx={ButtonStyle}>{bt.name}</Button>
          </NavBarLinkComponent>
        ))}
        <NavBarLinkComponent to={`/${LinkText.homepage}/${LinkText.cart}/1`}>
          <ShoppingCartOutlinedIcon />
        </NavBarLinkComponent>
      </Stack>
    </Grid>
  </Grid>
);

export default NavBarComponent;
