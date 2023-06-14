import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const OrderDescriptionText = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const OrderDescriptionTextStyled = styled(OrderDescriptionText)`
  color: grey;
  margin-bottom: 10px;
`;

export const PriceStyled = styled(Typography)`
  font-weight: bold;
`;
