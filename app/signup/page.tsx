"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validate input fields
  const validateInput = () => {
    const newErrors: { [key: string]: string } = {};

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    // Validate Email (Basic email validation)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Validate Password (min 8 characters)
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form before submitting
    if (validateInput()) {
      console.log("Form submitted:", formData);
    } else {
      console.log("Form validation failed:", errors);
    }
  };

  return (
    <div className="main-container max-w-sm mx-auto p-6 shadow-lg rounded-md bg-white">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
          {errors.name && (
            <span className="text-red-500 text-sm mt-1">{errors.name}</span>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">{errors.email}</span>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
          {errors.password && (
            <span className="text-red-500 text-sm mt-1">{errors.password}</span>
          )}
        </div>

        {/* Remember Me Checkbox */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="w-4 h-4 text-orange-400 border-gray-300 rounded focus:ring-2 focus:ring-orange-400"
          />
          <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
            Remember me?
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 bg-orange-400 text-white font-medium text-lg rounded hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          Sign Up
        </button>

        {/* Forget Password Link */}
        <p className="text-right text-sm text-gray-500 mt-2">
          <a href="#" className="hover:underline">
            Forgot password?
          </a>
        </p>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Signup Buttons */}
        <button
          type="button"
          className="w-full flex items-center justify-center p-2 border border-gray-300 rounded mb-4 hover:bg-gray-100"
        >
          <Image
            src="/images/Google.png"
            alt="Google Icon"
            width={15}
            height={5}
            className="mr-2"
          />
          Sign up with Google
        </button>

        <button
          type="button"
          className="w-full flex items-center justify-center p-2 border border-gray-300 rounded hover:bg-gray-100"
        >
          <Image
            src="/images/Vector.png"
            alt="Apple Icon"
            width={15}
            height={5}
            className="mr-2"
          />
          Sign up with Apple
        </button>
      </form>
    </div>
  );
}
