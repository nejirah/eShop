import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../products/productCard/types';
import { getProductById } from '../../../services';
import BreadCrumbsComponent from '../../common/BreadCrumbs/BreadCrumbs';
import { BreadcrumbText } from '../../common/BreadCrumbs/constants';
import { Grid, Box, Typography, Rating, Divider } from '@mui/material';
import { Loader } from '../../common/Loader';
import {
  MainImageStyled,
  GridStyled,
  ImageStyled,
  BoxStyled,
  TextBoxStyled,
  TypographyStyled,
  ButtonStyled
} from './syles';
import { grey } from '@mui/material/colors';
import SyncIcon from '@mui/icons-material/Sync';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Contact from '../../common/Contact';
import { CartContext } from '../../../App';
import AlertSnackbar from '../../common/Alert';

const ProductDetailsComponent = () => {
  const [data, setData] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const { id = '0' } = useParams<{ id?: string }>();
  const productId = parseInt(id, 10);
  const [cartItems, setCartItems] = useContext(CartContext);
  const [openAlert, setOpenAlert] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProductById(productId);
        setData(result);
        setLoading(false);
      } catch (error) {
        setErrorMessage('An error occurred while fetching product details.');
      }
    };

    setLoading(true);
    fetchData();
  }, [productId]);

  const addToCart = () => {
    const newArray = [...cartItems];
    if (data?.id != null) {
      const Itemid = data.id;
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
      <BreadCrumbsComponent text={`${BreadcrumbText.Listing} / ${BreadcrumbText.ProductDetails}`} />
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <Loader isLoading={loading}>
          <GridStyled container>
            <Grid item xs={5}>
              <MainImageStyled image={data?.images?.[0]}></MainImageStyled>
              <BoxStyled>
                <ImageStyled image={data?.images?.[1]}></ImageStyled>
                <ImageStyled image={data?.images?.[2]}></ImageStyled>
              </BoxStyled>
            </Grid>
            <Grid item xs={5}>
              <TextBoxStyled>
                <TypographyStyled>{data?.title}</TypographyStyled>
                <TypographyStyled>$ {data?.price.toString()}</TypographyStyled>
              </TextBoxStyled>
              <BoxStyled>
                <TypographyStyled color={grey[500]} mr={2}>
                  {data?.rating}
                </TypographyStyled>
                <Rating readOnly value={data ? data.rating : 0} precision={0.25} />
              </BoxStyled>
              <ButtonStyled variant="contained" fullWidth onClick={addToCart}>
                Add to cart
              </ButtonStyled>
              <Divider></Divider>
              <TextBoxStyled>
                <BoxStyled>
                  <SyncIcon />
                  <Box>
                    <Typography> 30 days return</Typography>
                    <Typography color={grey[500]}>
                      We offer you a full refund within 30 days of purchase.
                    </Typography>
                  </Box>
                </BoxStyled>
                <BoxStyled>
                  <LocalShippingIcon />
                  <Box>
                    <Typography> Fast shipping</Typography>
                    <Typography color={grey[500]}>
                      Automatically receive free standard shipping on every order.
                    </Typography>
                  </Box>
                </BoxStyled>
              </TextBoxStyled>
              <ButtonStyled variant="outlined" fullWidth>
                Add to favorite
              </ButtonStyled>
              <Contact></Contact>
            </Grid>
          </GridStyled>
        </Loader>
      )}
      <AlertSnackbar
        open={openAlert}
        handleClose={handleCloseAlert}
        text={`Product: ${data?.title} is successfully added to the cart!`}
      />
    </>
  );
};

export default ProductDetailsComponent;
