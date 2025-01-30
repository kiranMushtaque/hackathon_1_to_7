
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  shipmentId: string | null; // Added shipmentId here
  updateQuantity: (id: string, delta: number) => void;
  removeProduct: (id: string) => void;
  addToCart: (product: CartItem) => void;
  setShipmentId: (id: string) => void; 
}

interface CartProviderProps {
  children: ReactNode;
}

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
  const [shipmentId, setShipmentId] = useState<string | null>(null); // Initialize shipmentId state

  // Function to update product quantity
  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + delta) }
          : product
      )
    );
  };

  // Function to remove a product from the cart
  const removeProduct = (id: string) => {
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  // Function to add a product to the cart
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

  // Function to set the shipment ID after an order is placed
  const setShipment = (id: string) => {
    setShipmentId(id);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        shipmentId,
        updateQuantity,
        removeProduct,
        addToCart,
        setShipmentId: setShipment, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
