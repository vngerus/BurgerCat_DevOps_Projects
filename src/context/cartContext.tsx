import React, { createContext, useContext, useState } from 'react';

interface CartItem {
  name: string;
  quantity: number;
  image: string;
  price: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (name: string, quantity: number, image: string, price: number) => void;
  removeFromCart: (name: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<React.PropsWithChildren<object>> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (name: string, quantity: number, image: string, price: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.name === name);
      if (existingItem) {
        return prevItems.map(item =>
          item.name === name ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevItems, { name, quantity, image, price }];
      }
    });
  };

  const removeFromCart = (name: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.name !== name));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
