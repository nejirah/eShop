import React from 'react';
import { GridItem, GridStyled, LinkComponent, TypographyStyled, Icon } from './syles';
import TypographyH6Component from '../../../common/TypographyH6';
import { LinkText } from '../../../../constants/constants';
import MainButtonComponent from '../../../common/Button';

const EmptyCart = () => (
  <GridStyled container xs={12}>
    <GridItem item xs={4}>
      <Icon />
      <TypographyH6Component text={'Your cart is currently empty'} />
      <TypographyStyled>
        Before proceed to checkout you must add some products to your shopping cart. You will find a
        lot of interesting products on our page.
      </TypographyStyled>
      <LinkComponent to={`/${LinkText.products}`}>
        <MainButtonComponent text="Start shopping"></MainButtonComponent>
      </LinkComponent>
    </GridItem>
  </GridStyled>
);

export default EmptyCart;
