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
    <div className="main-container mx-auto py-8">
      {/* Header Row */}
      <div className="flex justify-between px-10 py-10 border-b">
        <span className="font-bold text-lg">Product</span>
        <span className="font-bold text-lg">Price</span>
        <span className="font-bold text-lg">Quantity</span>
        <span className="font-bold text-lg">Total</span>
        <span className="font-bold text-lg">Remove</span>
      </div>

      {/* Product Rows */}
      {cart.length === 0 ? (
        <div className="text-center pt-4">
          <p className="text-5xl text-center text-[#FF9F0D]">
            Your cart is empty.
          </p>
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
            className="flex items-center justify-between px-10 py-4 border-b"
          >
            {/* Image Section */}
            <div className="flex items-center space-x-4 w-1/3">
              <Image
                src={product.image}
                alt={product.name}
                width={64}
                height={64}
                className="w-16 h-16 mr-4"
              />
              <span>{product.name}</span>
            </div>

            {/* Price */}
            <span className="w-1/6">${product.price.toFixed(2)}</span>

            {/* Quantity Controls */}
            <div className="w-1/6 flex items-center space-x-2">
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
            <span className="w-1/6">
              ${(product.price * product.quantity).toFixed(2)}
            </span>

            {/* Remove Button */}
            <button
              onClick={() => removeProduct(product.id)}
              className="text-red-500 font-bold"
            >
              X
            </button>
          </div>
        ))
      )}

      {/* Divider */}
      <div className="w-[1320px] h-px bg-[url(/images/62c99905-d174-4e05-8b85-c832801debee.png)] bg-no-repeat relative z-[124] mt-[17.524px] mr-0 mb-0 ml-[301px]" />

      {/* Cart Summary */}
      <div className="flex w-[807px] h-[41px] justify-between items-center relative z-[168] mt-[119.5px] mr-0 mb-0 ml-[301px]">
        <span className="h-[40px] shrink-0 font-['Helvetica'] text-[32px] font-bold leading-[40px] text-[#333333] relative text-left whitespace-nowrap z-[153]">
          Coupon Code
        </span>
        <span className="h-[40px] shrink-0 font-['Helvetica'] text-[32px] font-bold leading-[40px] text-[#333333] relative text-left whitespace-nowrap z-[168]">
          Total Bill
        </span>
      </div>

      <div className="flex w-[1320px] h-[188px] justify-between items-center relative z-[169] mt-[23px] mr-0 mb-0 ml-[301px]">
        {/* Coupon Section */}
        <div className="w-[648px] h-[188px] shrink-0 text-[0px] rounded-[6px] border-solid border border-[#e0e0e0] relative z-[154]">
          <span className="flex w-[472px] h-[54px] justify-start items-start font-['Inter'] text-[18px] font-normal leading-[26px] text-[#828282] relative text-left z-[155] mt-[24px] mr-0 mb-0 ml-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non
          </span>
          <div className="w-[598px] h-[62px] rounded-[6px] border-solid border border-[#e0e0e0] relative z-[157] mt-[25px] mr-0 mb-0 ml-[20px]">
            <button className="w-[14.88%] h-full bg-[#ff9f0d] rounded-[6px] border-none absolute top-[-1.61%] left-[84.95%] z-[159] pointer">
              <span className="flex h-[41.94%] justify-start items-start font-['Inter'] text-[18px] font-normal leading-[26px] text-[#fff] absolute top-[29.03%] left-[21.35%] text-left whitespace-nowrap z-[160]">
                Apply
              </span>
            </button>
          </div>
        </div>

        {/* Total Amount Section */}
        <div className="w-[648px] h-[185px] shrink-0 rounded-[6px] border-solid border border-[#bdbdbd] relative z-[169]">
          <div className="flex w-[607px] h-[28px] justify-between items-center relative z-[165] mt-[24px] mr-0 mb-0 ml-[20px]">
            <span className="h-[28px] shrink-0 font-['Helvetica'] text-[20px] font-bold leading-[28px] text-[#333333] relative text-left whitespace-nowrap z-[162]">
              Cart Subtotal
            </span>
            <span className="h-[26px] shrink-0 font-['Inter'] text-[18px] font-bold leading-[26px] text-[#333333] relative text-left whitespace-nowrap z-[165]">
              ${totalAmount.toFixed(2)}
            </span>
          </div>
          <div className="flex w-[602px] h-[26px] justify-between items-center relative z-[166] mt-[16px] mr-0 mb-0 ml-[20px]">
            <span className="h-[26px] shrink-0 font-['Inter'] text-[18px] font-normal leading-[26px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[164]">
              Shipping Charge
            </span>
            <span className="h-[26px] shrink-0 font-['Inter'] text-[18px] font-normal leading-[26px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[166]">
              $10.00
            </span>
          </div>
          <div className="flex w-[610px] h-[28px] justify-between items-center relative z-[167] mt-[17px] mr-0 mb-0 ml-[20px]">
            <span className="h-[28px] shrink-0 font-['Helvetica'] text-[20px] font-bold leading-[28px] text-[#333333] relative text-left whitespace-nowrap z-[163]">
              Total Amount
            </span>
            <span className="h-[26px] shrink-0 font-['Inter'] text-[18px] font-bold leading-[26px] text-[#333333] relative text-left whitespace-nowrap z-[167]">
              ${(totalAmount + 10).toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Checkout Button - Wrapped with Link */}
      <Link href="/checkout">
        <button className="w-[648px] h-[64px] bg-[#ff9f0d] rounded-[6px] border-none flex justify-center left-96 items-center relative z-[171] mt-[27px] mx-auto">
          <span className="font-['Helvetica'] text-[24px] font-bold text-[#ffffff]">
            Proceed to Checkout
          </span>
        </button>
      </Link>
    </div>
  );
};

export default CartPage;
