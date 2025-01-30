"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";

const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeProduct } = useCart();

  const totalAmount = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="main-container mx-auto py-8 px-4 sm:px-8 md:px-12">
      {/* Header Row */}
      <div className="flex justify-between items-center py-4 border-b text-sm sm:text-base md:text-lg">
        <span className="font-bold">Product</span>
        <span className="font-bold">Price</span>
        <span className="font-bold">Quantity</span>
        <span className="font-bold">Total</span>
        <span className="font-bold">Remove</span>
      </div>

      {/* Product Rows */}
      {cart.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-5xl text-[#FF9F0D]">Your cart is empty.</p>
          <Link href="/shop">
            <button className="mt-4 px-6 py-3 text-white bg-[#FF9F0D] rounded-md hover:bg-orange-400">
              Go to Shop
            </button>
          </Link>
        </div>
      ) : (
        cart.map((product) => (
          <div
            key={product.id}
            className="flex flex-wrap items-center justify-between py-4 border-b text-sm sm:text-base md:text-lg"
          >
            {/* Image Section */}
            <div className="flex items-center space-x-4 w-full sm:w-1/3">
              <Image
                src={product.image}
                alt={product.name}
                width={64}
                height={64}
                className="w-16 h-16"
              />
              <span>{product.name}</span>
            </div>

            {/* Price */}
            <span className="w-full sm:w-1/6 text-center">
              ${product.price.toFixed(2)}
            </span>

            {/* Quantity Controls */}
            <div className="w-full sm:w-1/6 flex items-center justify-center space-x-2 mt-2 sm:mt-0">
              <button
                className="px-2 py-1 border rounded"
                onClick={() => updateQuantity(product.id, -1)}
              >
                -
              </button>
              <span>{product.quantity}</span>
              <button
                className="px-2 py-1 border rounded"
                onClick={() => updateQuantity(product.id, 1)}
              >
                +
              </button>
            </div>

            {/* Total */}
            <span className="w-full sm:w-1/6 text-center">
              ${(product.price * product.quantity).toFixed(2)}
            </span>

            {/* Remove Button */}
            <button
              onClick={() => removeProduct(product.id)}
              className="text-red-500 font-bold w-full sm:w-auto mt-2 sm:mt-0"
            >
              X
            </button>
          </div>
        ))
      )}

      {/* Divider */}
      <div className="w-full h-px bg-[url(/images/62c99905-d174-4e05-8b85-c832801debee.png)] bg-no-repeat mt-8" />

      {/* Cart Summary */}
      <div className="flex flex-wrap justify-between mt-8">
        <span className="w-full sm:w-1/2 text-lg font-bold">Coupon Code</span>
        <span className="w-full sm:w-1/2 text-lg font-bold text-right">
          Total Bill
        </span>
      </div>

      <div className="flex flex-wrap justify-between mt-4">
        {/* Coupon Section */}
        <div className="w-full sm:w-1/2 bg-[#f8f8f8] border p-4 rounded-md">
          <span className="text-gray-700 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non.
          </span>
          <div className="mt-4 flex items-center">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="w-full sm:w-4/5 p-2 border border-gray-300 rounded-md"
            />
            <button className="w-full sm:w-1/5 ml-2 bg-[#FF9F0D] text-white py-2 rounded-md">
              Apply
            </button>
          </div>
        </div>

        {/* Total Amount Section */}
        <div className="w-full sm:w-1/2 bg-[#f8f8f8] border p-4 rounded-md">
          <div className="flex justify-between">
            <span>Cart Subtotal</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Shipping Charge</span>
            <span>$10.00</span>
          </div>
          <div className="flex justify-between mt-4 font-bold">
            <span>Total Amount</span>
            <span>${(totalAmount + 10).toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <Link href="/checkout">
        <button className="w-full sm:w-auto bg-[#FF9F0D] text-white py-3 px-6 rounded-md mt-8 mx-auto block text-center font-semibold">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
};

export default CartPage;
