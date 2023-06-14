import styled from '@emotion/styled';
import { CardMedia, Grid, Box, Typography, Button } from '@mui/material';

export const MainImageStyled = styled(CardMedia)`
  height: 600px;
  width: 600px;
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ImageStyled = styled(CardMedia)`
  height: 300px;
  width: 300px;
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
  margin: 2px;
`;

export const GridStyled = styled(Grid)`
  justify-content: center;
  display: flex;
  margin-top: 30px;
`;

export const BoxStyled = styled(Box)`
  display: flex;
  margin-bottom: 20px;
`;

export const TextBoxStyled = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TypographyStyled = styled(Typography)`
  font-weight: bold !important;
`;

export const ButtonStyled = styled(Button)`
  height: 45px;
  text-transform: none;
  margin-bottom: 20px;
`;
