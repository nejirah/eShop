import React, { useContext, useState } from 'react';
import { Typography, Rating, Box, Alert, Snackbar } from '@mui/material';
import TypographyH6Component from '../../../common/TypographyH6';
import { grey } from '@mui/material/colors';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  CardStyled,
  ImageStyled,
  BoxStyled,
  TypographyStyled,
  RatingBoxStyled,
  ButtonStyled,
  FullWidthButtonStyled
} from './styles';
import { ProductData } from './types';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { LinkText } from '../../../../constants/constants';
import { CartContext } from '../../../../App';

const LinkComponent = styled(Link)({
  color: 'black',
  textDecoration: 'none'
});

const ProductCardComponent = (props: ProductData) => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [open, setOpen] = useState(false);

  function handleClick(): void {
    const newArray = [...cartItems];
    if (props.id != null) {
      const id = props.id;
      newArray.push(id);
    }
    setCartItems(newArray);
    setOpen(true);
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <CardStyled>
        <ImageStyled image={props.image}></ImageStyled>
        <Box>
          <BoxStyled>
            <TypographyStyled>{props.title}</TypographyStyled>
            <TypographyH6Component text={`${props.price.toString()} $`}></TypographyH6Component>
          </BoxStyled>
          <RatingBoxStyled>
            <Rating name="half-rating" readOnly value={props.rating} precision={0.25} />
            <Typography color={grey[500]} ml={1}>
              12 Review
            </Typography>
          </RatingBoxStyled>
          <RatingBoxStyled>
            <FullWidthButtonStyled variant="contained" fullWidth onClick={handleClick}>
              <ShoppingCartIcon />
            </FullWidthButtonStyled>
            <FullWidthButtonStyled variant="outlined" fullWidth>
              <VisibilityIcon></VisibilityIcon>
            </FullWidthButtonStyled>
          </RatingBoxStyled>
          <div>
            <LinkComponent to={`/${LinkText.products}/${LinkText.productDetails}/${props.id}`}>
              <ButtonStyled fullWidth>
                <Typography>See the detail</Typography>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
              </ButtonStyled>
            </LinkComponent>
          </div>
        </Box>
      </CardStyled>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Product: {props.title} is successfully added to a cart !
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductCardComponent;
