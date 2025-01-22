












"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const { cart } = useCart();
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "USA",
  });

  const [paymentMethod, setPaymentMethod] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.zipCode ||
      !paymentMethod
    ) {
      setErrorMessage(
        "Please fill in all required fields and select a payment method."
      );
      return;
    }
    setErrorMessage(""); // Clear error message if form is valid
    router.push("/order-confirmation");
  };

  const totalAmount = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const shippingCost = 0;
  const discount = totalAmount * 0.25;
  const tax = 54.76;
  const grandTotal = totalAmount + shippingCost + tax - discount;

  return (
    <div className="main-container mx-auto mt-20 w-full max-w-screen-xl relative">
      <form onSubmit={handleSubmit} className="flex w-full gap-8">
        {/* Shipping Information Form */}
        <div className="flex-1">
          <span className="block font-bold text-[20px] text-[#333333] mb-6">
            Shipping Address
          </span>

          {/* Form Fields */}
          <div className="flex gap-8 mb-6">
            <div className="w-[48%]">
              <label className="block text-[16px] text-[#333333] mb-2">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full h-10 border border-solid border-[#e0e0e0] px-4"
              />
            </div>
            <div className="w-[48%]">
              <label className="block text-[16px] text-[#333333] mb-2">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full h-10 border border-solid border-[#e0e0e0] px-4"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[16px] text-[#333333] mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full h-10 border border-solid border-[#e0e0e0] px-4"
            />
          </div>

          <div className="flex gap-8 mb-6">
            <div className="w-[48%]">
              <label className="block text-[16px] text-[#333333] mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full h-10 border border-solid border-[#e0e0e0] px-4"
              />
            </div>
            <div className="w-[48%]">
              <label className="block text-[16px] text-[#333333] mb-2">
                State
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full h-10 border border-solid border-[#e0e0e0] px-4"
              />
            </div>
          </div>

          <div className="flex gap-8 mb-6">
            <div className="w-[48%]">
              <label className="block text-[16px] text-[#333333] mb-2">
                Zip Code
              </label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full h-10 border border-solid border-[#e0e0e0] px-4"
              />
            </div>
            <div className="w-[48%]">
              <label className="block text-[16px] text-[#333333] mb-2">
                Country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full h-10 border border-solid border-[#e0e0e0] px-4"
              >
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
          </div>

          {/* More Fields */}
          <div className="flex gap-8 mb-6">
            <div className="w-[48%]">
              <label className="block text-[16px] text-[#333333] mb-2">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-10 border border-solid border-[#e0e0e0] px-4"
              />
            </div>
            <div className="w-[48%]">
              <label className="block text-[16px] text-[#333333] mb-2">
                Phone number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-10 border border-solid border-[#e0e0e0] px-4"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <span className="block font-bold text-[20px] text-[#333333] mb-6">
              Payment Method
            </span>
            <label className="block mb-4">
              <input
                type="radio"
                name="payment"
                value="Credit Card"
                onChange={handlePaymentChange}
                className="mr-2"
              />
              Credit Card
            </label>
            <label className="block mb-4">
              <input
                type="radio"
                name="payment"
                value="PayPal"
                onChange={handlePaymentChange}
                className="mr-2"
              />
              PayPal
            </label>
          </div>

          {/* Error Message */}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          {/* Place Order Button */}
          <button
            type="submit"
            className="w-[328px] h-10 bg-[#ff9f0d] text-white text-[18px] rounded-[6px]"
          >
            Place an order
          </button>
        </div>

        {/* Cart Items Section */}
        <div className="w-[380px] border border-solid border-[#e0e0e0] p-4">
          <span className="block font-bold text-[20px] text-[#333333] mb-6">
            Cart Summary
          </span>
          {cart.map((product) => (
            <div
              key={product.id}
              className="w-full h-[104px] border-b border-[#e0e0e0] p-4 flex items-center gap-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-[60px] h-[60px] object-cover rounded-md"
              />
              <div>
                <span className="block font-bold text-[16px] text-[#333333]">
                  {product.name}
                </span>
                <span className="block text-[14px] text-[#4f4f4f]">
                  {product.quantity} x ${product.price.toFixed(2)}
                </span>
                <span className="block text-[14px] text-[#4f4f4f]">
                  Total: ${(product.price * product.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          ))}

          <div className="p-4">
            <div className="flex justify-between text-[16px]">
              <span>Sub-total</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[16px] mt-2">
              <span>Shipping</span>
              <span>${shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[16px] mt-2">
              <span>Discount</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[16px] mt-2">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[18px] font-bold mt-4">
              <span>Total</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
