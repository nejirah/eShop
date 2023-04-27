import React from 'react';
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

const LinkComponent = styled(Link)({
  color: 'black',
  textDecoration: 'none'
});

const ProductCardComponent = (props: ProductData) => (
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
        <FullWidthButtonStyled variant="contained" fullWidth>
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
);

export default ProductCardComponent;
