/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, ReactNode, useContext } from 'react';
import Cookies from 'js-cookie';
import { CartItem } from '../@types/types';

interface CartContextProps {
  children: ReactNode;
}

type CartContextValue = [
  CartItem[],
  (cartItem: CartItem) => void,
  (index: number) => void,
];

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const useCartContext = (): CartContextValue => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCartContext must be used within a CartContextProvider');
  }

  return context;
};

export const CartContextProvider: React.FC<CartContextProps> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>(
    JSON.parse(Cookies.get('cart') ?? '[]') as CartItem[]
  );

  const add = (cartItem: CartItem) => {
    const updatedCart = [...cart, cartItem];
    setCart(updatedCart);
    Cookies.set('cart', JSON.stringify(updatedCart));
  };

  const remove = (index: number) => {
    const newCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
    setCart(newCart);
    Cookies.set('cart', JSON.stringify(newCart));
  };

  const contextValue: CartContextValue = [cart, add, remove];

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
