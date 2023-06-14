import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { OrderDescriptionTextStyled, PriceStyled } from './styles';
import { useCartItem } from '../../../../hooks/useCart';

type OrderSummaryProps = {
  id: number;
  title: string;
  price: number;
};

const OrderSummary = ({ id, title, price }: OrderSummaryProps) => {
  const { cartItems } = useCartItem();
  const cartItem = cartItems.find((item) => item.id === id);
  const quantity = cartItem ? cartItem.quantity : 1;

  return (
    <Box mt={2} mb={2}>
      <OrderDescriptionTextStyled>
        <Typography>{title}</Typography>
        <PriceStyled>${price * quantity}</PriceStyled>
      </OrderDescriptionTextStyled>
      <Divider />
    </Box>
  );
};

export default OrderSummary;
