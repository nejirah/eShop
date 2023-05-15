import React from 'react';
import TypographyH6Component from '../../common/TypographyH6';
import {
  GridStyled,
  GridItem,
  Icon,
  TypographyStyled,
  ImageStyled,
  BoxStyled,
  TypographyParagraph,
  GridInline,
  IconButtonContainer,
  PriceBoxStyle,
  SelectStyled,
  OrderDescriptionTextStyled,
  OrderSummaryStyled,
  TextBoxStyled,
  ButtonStyled,
  PriceStyled,
  OrderDescriptionText,
  MainButtonStyled
} from './syles';
import MainButtonComponent from '../../common/Button';
import SubscribeComponent from '../products/Subscribe';
import { useParams } from 'react-router-dom';
import { Box, Divider, FormControl, Grid, MenuItem, Typography } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Contact from '../../common/Contact';

const Cart = () => {
  const { id = '0' } = useParams<{ id?: string }>();
  const productId = parseInt(id, 10);

  if (productId == 1) {
    return (
      <GridInline container xs={12}>
        <Grid item xs={6}>
          <TypographyH6Component text={'Shopping cart'}></TypographyH6Component>
          <BoxStyled>
            <GridInline>
              <ImageStyled
                image={'https://assets.maccarianagency.com/backgrounds/img56.jpg'}
              ></ImageStyled>
              <Box>
                <Typography mb={1}>Addidas shoes</Typography>
                <IconButtonContainer>
                  <TypographyParagraph>Brand: </TypographyParagraph>
                  <PriceStyled>Something</PriceStyled>
                </IconButtonContainer>
                <IconButtonContainer>
                  <TypographyParagraph>Category: </TypographyParagraph>
                  <PriceStyled>Shoes</PriceStyled>
                </IconButtonContainer>
              </Box>
            </GridInline>
            <Box>
              <IconButtonContainer>
                <DeleteOutlineOutlinedIcon />
                <Typography>Remove</Typography>
              </IconButtonContainer>
              <IconButtonContainer>
                <FavoriteBorderOutlinedIcon />
                <Typography>Save</Typography>
              </IconButtonContainer>
            </Box>
            <PriceBoxStyle>
              <FormControl>
                <SelectStyled
                // value={age}
                // onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {Array.from({ length: 9 }, (_, index) => (
                    <MenuItem key={index + 1} value={index + 1}>{index + 1}</MenuItem>
                  ))}
                </SelectStyled>
              </FormControl>
              <Typography mt={0.5}>$69.90</Typography>
            </PriceBoxStyle>
          </BoxStyled>
          <Divider />
        </Grid>
        <Grid item xs={3}>
          <OrderSummaryStyled>
            <TypographyH6Component text="Order summary"></TypographyH6Component>
            <Box mt={3}>
              <TextBoxStyled id="filled-basic" label="Discount code" fullWidth />
              <ButtonStyled fullWidth variant="contained" disabled>
                Apply the code
              </ButtonStyled>
            </Box>
            <Box>
              <OrderDescriptionTextStyled>
                <Typography>Subtotal</Typography>
                <PriceStyled>$179,70</PriceStyled>
              </OrderDescriptionTextStyled>
              <Divider />
            </Box>
            <OrderDescriptionText mt={3}>
              <TypographyH6Component text="Order total" />
              <TypographyH6Component text="$215,64" />
            </OrderDescriptionText>
            <MainButtonStyled fullWidth variant="contained">
              Checkout
            </MainButtonStyled>
          </OrderSummaryStyled>
          <Contact />
        </Grid>
      </GridInline>
    );
  }
  return (
    <GridStyled container xs={12}>
      <GridItem item xs={4}>
        <Icon />
        <TypographyH6Component text={'Your cart is currently empty'} />
        <TypographyStyled>
          Before proceed to checkout you must add some products to your shopping cart. You will find
          a lot of interesting products on our page.
        </TypographyStyled>
        <MainButtonComponent text="Start shopping"></MainButtonComponent>
      </GridItem>

      <SubscribeComponent />
    </GridStyled>
  );
};

export default Cart;
