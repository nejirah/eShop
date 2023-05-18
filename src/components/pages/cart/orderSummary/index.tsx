import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { OrderDescriptionTextStyled, PriceStyled } from './styles';

type OrderSummaryProps = {
  title: string;
  price: number;
  quantity: number;
};

const OrderSummary = ({ title, price, quantity }: OrderSummaryProps) => {
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
