import React, { useContext, useState } from 'react';
import { Typography, Rating, Box } from '@mui/material';
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
import AlertSnackbar from '../../../common/Alert';

const LinkComponent = styled(Link)({
  color: 'black',
  textDecoration: 'none'
});

const ProductCardComponent = (props: ProductData) => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [openAlert, setOpenAlert] = useState(false);

  const addToCart = () => {
    const newArray = [...cartItems];
    if (props.id != null) {
      const Itemid = props.id;
      newArray.push({ id: Itemid, quantity: 1 });
    }
    setCartItems(newArray);
    setOpenAlert(true);
  };

  const handleCloseAlert = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
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
            <FullWidthButtonStyled variant="contained" fullWidth onClick={addToCart}>
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
      <AlertSnackbar
        open={openAlert}
        handleClose={handleCloseAlert}
        text={`Product: ${props.title} is successfully added to the cart!`}
      />
    </>
  );
};

export default ProductCardComponent;
