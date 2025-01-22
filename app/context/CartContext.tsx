"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Define types for the Cart context
interface CartContextType {
  cart: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  removeProduct: (id: string) => void;
  addToCart: (product: CartItem) => void;
}

// Define the props for the CartProvider, including children
interface CartProviderProps {
  children: ReactNode;
}

// Create context with default values
const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + delta) }
          : product
      )
    );
  };

  const removeProduct = (id: string) => {
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  const addToCart = (product: CartItem) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, product];
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, updateQuantity, removeProduct, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
