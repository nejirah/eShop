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
} from './ProductCardSyles';

type ProductCardProps = {
  productName: string;
  productPrice: number;
  image: string;
  rating: number;
};

const ProductCardComponent = (props: ProductCardProps) => (
  <CardStyled>
    <ImageStyled image={props.image}></ImageStyled>
    <Box>
      <BoxStyled>
        <TypographyStyled>{props.productName}</TypographyStyled>
        <TypographyH6Component text={`${props.productPrice.toString()} $`}></TypographyH6Component>
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
        <ButtonStyled fullWidth>
          <Typography>See the detail</Typography>
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </ButtonStyled>
      </div>
    </Box>
  </CardStyled>
);

export default ProductCardComponent;
