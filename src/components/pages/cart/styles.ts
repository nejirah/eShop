import styled from '@emotion/styled';
import { Box, Button, Grid } from '@mui/material';

export const GridInline = styled(Grid)`
  display: flex;
  justify-content: center;
  min-height: 70vh;
`;

export const OrderDescriptionText = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const OrderSummaryStyled = styled(Box)`
  background-color: #f7fafe;
  padding: 30px;
  border-radius: 10px;
  margin: 20px;
`;

export const ButtonStyled = styled(Button)`
  text-transform: none;
  margin-top: 10px;
  margin-bottom: 30px;
  height: 54px;
  color: #1e2022 !important;
`;

export const MainButtonStyled = styled(ButtonStyled)`
  color: white !important;
`;

export const ContactStyled = styled(Box)`
  margin-left: 20px;
`;
