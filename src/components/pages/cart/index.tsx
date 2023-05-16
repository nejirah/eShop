import React, { useContext, useEffect, useState } from 'react';
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
  MainButtonStyled,
  IconButton,
  BoxButton,
  LinkComponent,
  TypographyTitle
} from './syles';
import MainButtonComponent from '../../common/Button';
import SubscribeComponent from '../products/Subscribe';
import {
  Alert,
  Box,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  SelectChangeEvent,
  Snackbar,
  Typography
} from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Contact from '../../common/Contact';
import { CartContext } from '../../../App';
import { LinkText } from '../../../constants/constants';
import { Product } from '../products/productCard/types';
import { getProducts } from '../../../services';

const Cart = () => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Product[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProducts();
        setData(result);
      } catch (error) {
        setErrorMessage('An error occurred while fetching product data.');
      }
    };
    fetchData();
  }, []);

  const filteredData = data.filter((product) => cartItems.includes(product.id ? product.id : 0));

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleClick = (id: number): void => {
    const newArray = cartItems.filter((index) => index !== id);
    setCartItems(newArray);
    setOpen(true);
  };

  const handleChange = (event: SelectChangeEvent<unknown>): void => {
    setQuantity(Number(event.target.value));
  };

  const displayProducts = () => {
    return filteredData.map((p) => (
      <>
        <BoxStyled>
          <GridInline>
            <ImageStyled image={p?.images && p.images[0]}></ImageStyled>
            <Box>
              <TypographyTitle mb={1}>{p.title}</TypographyTitle>
              <IconButtonContainer>
                <TypographyParagraph>Brand: </TypographyParagraph>
                <PriceStyled>{p.rating}</PriceStyled>
              </IconButtonContainer>
              <IconButtonContainer>
                <TypographyParagraph>Category: </TypographyParagraph>
                <PriceStyled>{p.category}</PriceStyled>
              </IconButtonContainer>
            </Box>
          </GridInline>
          <BoxButton>
            <IconButton onClick={() => handleClick(p.id ? p.id : 0)}>
              <DeleteOutlineOutlinedIcon />
              <Typography>Remove</Typography>
            </IconButton>
            <IconButton>
              <FavoriteBorderOutlinedIcon />
              <Typography>Save</Typography>
            </IconButton>
          </BoxButton>
          <PriceBoxStyle>
            <FormControl>
              <SelectStyled value={quantity} onChange={handleChange}>
                {Array.from({ length: 9 }, (_, index) => (
                  <MenuItem key={index + 1} value={index + 1}>
                    {index + 1}
                  </MenuItem>
                ))}
              </SelectStyled>
            </FormControl>
            <Typography mt={0.5}>${p.price}</Typography>
          </PriceBoxStyle>
        </BoxStyled>
        <Divider />
      </>
    ));
  };

  if (cartItems.length != 0) {
    return (
      <>
        <GridInline container xs={12}>
          <Grid item xs={6}>
            <TypographyH6Component text={'Shopping cart'}></TypographyH6Component>
            {!errorMessage ? displayProducts() : <>errorMessage</>}
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
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Product is successfully removed from a cart !
          </Alert>
        </Snackbar>
      </>
    );
  }
  return (
    <>
      <GridStyled container xs={12}>
        <GridItem item xs={4}>
          <Icon />
          <TypographyH6Component text={'Your cart is currently empty'} />
          <TypographyStyled>
            Before proceed to checkout you must add some products to your shopping cart. You will
            find a lot of interesting products on our page.
          </TypographyStyled>
          <LinkComponent to={`/${LinkText.products}`}>
            <MainButtonComponent text="Start shopping"></MainButtonComponent>
          </LinkComponent>
        </GridItem>
        <SubscribeComponent />
      </GridStyled>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Product is successfully removed from a cart !
        </Alert>
      </Snackbar>
    </>
  );
};

export default Cart;
