import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction
} from 'react';
import { CartItem } from '../components/pages/cart/cartItem/constants';

export const CartContext = createContext<[CartItem[], Dispatch<SetStateAction<CartItem[]>>]>([
  [],
  () => {
    //
  }
]);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  return <CartContext.Provider value={[cartItems, setCartItems]}>{children}</CartContext.Provider>;
};

export const useCartItem = () => {
  const [cartItems, setCartItems] = useContext(CartContext);
  return { cartItems, setCartItems };
};
