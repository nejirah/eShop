import { Box, Button, CardMedia, Typography, styled } from '@mui/material';

export const CardStyled = styled(Box)`
  width: 300px;
  margin: 10px;
`;

export const ImageStyled = styled(CardMedia)`
  height: 300px;
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
`;

export const BoxStyled = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const RatingBoxStyled = styled(Box)`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

export const ButtonStyled = styled(Button)`
  text-transform: none !important;
  color: black !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  margin-top: 5px !important;
`;

export const FullWidthButtonStyled = styled(Button)`
  margin-left: 5px !important;
`;

export const TypographyStyled = styled(Typography)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
