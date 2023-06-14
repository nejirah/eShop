import styled from '@emotion/styled';
import { Box, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const GridStyled = styled(Grid)`
  display: flex;
  min-height: 50vh;
  flex-direction: column;
  align-items: center;
`;

export const OrderSummaryStyled = styled(Box)`
  background-color: #f7fafe;
  padding: 30px;
  border-radius: 10px;
  margin: 20px;
`;

export const GridItem = styled(GridStyled)`
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const TypographyStyled = styled(Typography)`
  color: ${grey[600]};
  text-align: center;
  margin-bottom: 20px;
`;

export const LinkComponent = styled(Link)({
  color: 'black',
  textDecoration: 'none'
});

export const Icon = styled(ShoppingCartOutlinedIcon)`
  font-size: 150px;
  color: ${grey[100]};
  margin-bottom: 20px;
`;
