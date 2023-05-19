import React, { useEffect, useState } from 'react';
import TypographyH6Component from '../../common/TypographyH6';
import {
  GridInline,
  OrderSummaryStyled,
  OrderDescriptionText,
  MainButtonStyled,
  ContactStyled
} from './styles';
import SubscribeComponent from '../products/Subscribe';
import { Grid } from '@mui/material';
import Contact from '../../common/Contact';
import { Product } from '../products/productCard/types';
import { getProducts } from '../../../services';
import EmptyCart from './emptyCart';
import CartItem from './cartItem';
import OrderSummary from './orderSummary';
import { CartItem as CartItemProps } from './cartItem/constants';
import { useCartItem } from '../../../hooks/useCart';
import AlertSnackbar from '../../common/Alert';

const Cart = () => {
  const [data, setData] = useState<Product[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const { cartItems } = useCartItem();
  const [openAlert, setOpenAlert] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProducts();
        setData(result);
      } catch (error) {
        setErrorMessage('An error occurred while fetching product data.');
      }
    };
    fetchData();
  }, []);

  const filteredData = data.filter((product) => {
    const foundCartItem = cartItems.find((item) => item.id === (product.id || 0));
    return foundCartItem !== undefined;
  });

  const handleCloseAlert = (event?: React.SyntheticEvent | Event, reason?: string) =>
    reason !== 'clickaway' && setOpenAlert(false);

  const displayProducts = (data: Product[]) =>
    data.map((p) => (
      <CartItem
        key={p.id}
        images={p.images}
        id={p.id}
        title={p.title}
        category={p.category}
        rating={p.rating}
        price={p.price}
        brand={p.brand}
      />
    ));

  const displayOrderSummary = (data: Product[]) => {
    return data.map((p) => {
      return (
        <OrderSummary
          key={p.id}
          title={p.title}
          price={p.price}
          id={p.id ? p.id : 0}
        ></OrderSummary>
      );
    });
  };

  const totalPrice = (products: Product[], cartItems: CartItemProps[]) => {
    let totalPrice = 0;
    cartItems.forEach((cartItem) => {
      const product = products.find((product) => product.id === cartItem.id);
      if (product) {
        totalPrice += product.price * cartItem.quantity;
      }
    });
    return `$${totalPrice}`;
  };

  if (cartItems.length) {
    return (
      <>
        <GridInline container xs={12}>
          <Grid item xs={6}>
            <>
              <TypographyH6Component text={'Shopping cart'}></TypographyH6Component>
              {!errorMessage ? displayProducts(filteredData) : <>errorMessage</>}
            </>
          </Grid>
          <Grid item xs={3}>
            <OrderSummaryStyled>
              <TypographyH6Component text="Order summary"></TypographyH6Component>
              {!errorMessage ? (
                <>
                  {displayOrderSummary(filteredData)}
                  <OrderDescriptionText mt={3}>
                    <TypographyH6Component text="Order total" />
                    <TypographyH6Component text={totalPrice(filteredData, cartItems)} />
                  </OrderDescriptionText>
                  <MainButtonStyled fullWidth variant="contained">
                    Checkout
                  </MainButtonStyled>
                </>
              ) : (
                <>errorMessage</>
              )}
            </OrderSummaryStyled>
            <ContactStyled>
              <Contact />
            </ContactStyled>
          </Grid>
        </GridInline>
        <SubscribeComponent />
        <AlertSnackbar
          open={openAlert}
          handleClose={handleCloseAlert}
          text="Product is successfully removed from a cart !"
        />
      </>
    );
  }
  return (
    <>
      <EmptyCart />
      <SubscribeComponent />
    </>
  );
};

export default Cart;
