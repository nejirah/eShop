import React from 'react';
import { Typography, Rating, Button, Box, Grid } from '@mui/material';
import TypographyH6Component from '../../common/TypographyH6';
import { grey } from '@mui/material/colors';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CardStyle = {
  width: '300px',
  heigth: '350px',
  margin: '10px'
};

const ImageStyle = {
  height: '300px',
  backgroundImage: "url('https://assets.maccarianagency.com/backgrounds/img56.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  borderRadius: '10px'
};

const BoxStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  mt: '15px'
};

const RatingBoxStyle = {
  display: 'flex',
  mt: '10px',
  alignItems: 'center'
};

const StyleButton = {
  textTransform: 'none',
  display: 'flex',
  justifyContent: 'space-between'
};

const FullWidthButtonStyle = {
  marginLeft: '5px'
};

const TypographyStyle = {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
};

type ProductCardProps = {
  productName: string;
  productPrice: number;
  image: string;
  rating: number;
};

const ProductCardComponent = (props: ProductCardProps) => (
  <Box sx={CardStyle}>
    <Grid sx={ImageStyle} style={{ backgroundImage: "url('" + props.image + "')" }}></Grid>
    <Box>
      <Box sx={BoxStyle}>
        <Typography sx={TypographyStyle}>{props.productName}</Typography>
        <TypographyH6Component text={props.productPrice.toString() + '$'}></TypographyH6Component>
      </Box>
      <Box sx={RatingBoxStyle}>
        <Rating name="half-rating" readOnly value={props.rating} precision={0.25} />
        <Typography color={grey[500]} ml={1}>
          12 Review
        </Typography>
      </Box>
      <Box sx={RatingBoxStyle}>
        <Button variant="contained" fullWidth sx={FullWidthButtonStyle}>
          <ShoppingCartIcon></ShoppingCartIcon>
        </Button>
        <Button variant="outlined" fullWidth sx={FullWidthButtonStyle}>
          <VisibilityIcon></VisibilityIcon>
        </Button>
      </Box>
      <div>
        <Button sx={StyleButton} fullWidth>
          <Typography>See the detail</Typography>
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </Button>
      </div>
    </Box>
  </Box>
);

export default ProductCardComponent;
