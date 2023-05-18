import styled from '@emotion/styled';
import { Box, Button, CardMedia, Grid, Select, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export const BoxStyled = styled(Grid)`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const GridInline = styled(Grid)`
  display: flex;
  justify-content: center;
`;

export const ImageStyled = styled(CardMedia)`
  height: 130px;
  width: 200px;
  background-size: contain;
  background-position: center center;
  border-radius: 10px;
  margin-right: 20px;
`;

export const TypographyTitle = styled(Typography)`
  text-overflow: ellipsis;
  font-weight: semi-bold;
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

export const SelectStyled = styled(Select)`
  height: 30px;
  margin-right: 10px;
`;

export const PriceStyled = styled(Typography)`
  font-weight: bold;
`;
