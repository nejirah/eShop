import React, { useContext } from 'react';
import {
  BoxStyled,
  GridInline,
  IconButtonContainer,
  ImageStyled,
  TypographyParagraph,
  TypographyTitle,
  BoxButton,
  PriceBoxStyle,
  SelectStyled,
  PriceStyled,
  IconButton
} from './styles';
import { Box, Divider, FormControl, MenuItem, SelectChangeEvent, Typography } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { CartContext } from '../../../../App';

type cartItemProps = {
  id?: number;
  title: string;
  category: string;
  rating: number;
  images?: string[];
  price: number;
  brand?: string;
};

const CartItem = (props: cartItemProps) => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const selectedValue = cartItems.find((item) => item.id === props.id)?.quantity || 0;

  const removeProduct = (id: number): void => {
    const newArray = cartItems.filter((index) => index.id !== id);
    setCartItems(newArray);
  };

  const handleSelectChange = (event: SelectChangeEvent<unknown>): void => {
    const value = Number(event.target.value);
    const newArray = cartItems.map((item) => {
      if (item.id === (props.id ? props.id : 0)) {
        return { ...item, quantity: value };
      }
      return item;
    });
    setCartItems(newArray);
  };

  return (
    <>
      <BoxStyled>
        <GridInline>
          <ImageStyled image={props?.images && props.images[0]}></ImageStyled>
          <Box>
            <TypographyTitle mb={1}>{props.title}</TypographyTitle>
            <IconButtonContainer>
              <TypographyParagraph>Brand: </TypographyParagraph>
              <PriceStyled>{props.brand}</PriceStyled>
            </IconButtonContainer>
            <IconButtonContainer>
              <TypographyParagraph>Category: </TypographyParagraph>
              <PriceStyled>{props.category}</PriceStyled>
            </IconButtonContainer>
          </Box>
        </GridInline>
        <BoxButton>
          <IconButton onClick={() => removeProduct(props.id ? props.id : 0)}>
            <DeleteOutlineOutlinedIcon />
            <Typography>Remove</Typography>
          </IconButton>
        </BoxButton>
        <PriceBoxStyle>
          <FormControl>
            <SelectStyled onChange={handleSelectChange} value={selectedValue}>
              {Array.from({ length: 9 }, (_, index) => (
                <MenuItem key={index + 1} value={index + 1}>
                  {index + 1}
                </MenuItem>
              ))}
            </SelectStyled>
          </FormControl>
          <Typography mt={0.5}>${props.price}</Typography>
        </PriceBoxStyle>
      </BoxStyled>
      <Divider />
    </>
  );
};

export default CartItem;
