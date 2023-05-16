import styled from '@emotion/styled';
import { Box, Button, CardMedia, Grid, Select, TextField, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';

export const GridStyled = styled(Grid)`
  display: flex;
  min-height: 50vh;
  flex-direction: column;
  align-items: center;
`;

export const GridInline = styled(Grid)`
  display: flex;
  justify-content: center;
`;

export const GridItem = styled(GridStyled)`
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const Icon = styled(ShoppingCartOutlinedIcon)`
  font-size: 150px;
  color: ${grey[100]};
  margin-bottom: 20px;
`;

export const TypographyStyled = styled(Typography)`
  color: ${grey[600]};
  text-align: center;
  margin-bottom: 20px;
`;

export const ImageStyled = styled(CardMedia)`
  height: 130px;
  width: 200px;
  background-size: contain;
  background-position: center center;
  border-radius: 10px;
  margin-right: 20px;
`;

export const BoxStyled = styled(Grid)`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TypographyParagraph = styled(Typography)`
  color: ${grey[500]};
  margin-right: 5px;
  margin-bottom: 5px;
`;

export const IconButtonContainer = styled(Box)`
  display: flex;
  color: ${grey[500]};
  margin-bottom: 5px;
`;

export const PriceBoxStyle = styled(Box)`
  display: flex;
`;

export const SelectStyled = styled(Select)`
  height: 30px;
  margin-right: 10px;
`;

export const OrderDescriptionText = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const OrderDescriptionTextStyled = styled(OrderDescriptionText)`
  color: grey;
  margin-bottom: 10px;
`;

export const OrderSummaryStyled = styled(Box)`
  background-color: #f7fafe;
  padding: 30px;
  border-radius: 10px;
  margin: 20px;
`;

export const TextBoxStyled = styled(TextField)`
  background-color: white !important ;
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

export const PriceStyled = styled(Typography)`
  font-weight: bold;
`;

export const IconButton = styled(Button)`
  text-transform: none;
  color: ${grey[500]};
  display: flex;
  justify-content: flex-start;
`;

export const BoxButton = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const LinkComponent = styled(Link)({
  color: 'black',
  textDecoration: 'none'
});

export const TypographyTitle = styled(Typography)`
  text-overflow: ellipsis;
  font-weight: semi-bold;
`;
