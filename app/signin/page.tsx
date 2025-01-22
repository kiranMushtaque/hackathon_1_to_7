"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function Signin() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateInput = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateInput()) {
      console.log("Form submitted:", formData);
    } else {
      console.log("Form validation failed:", errors);
    }
  };

  return (
    <div className="main-container max-w-sm mx-auto p-6 shadow-lg rounded-md bg-white">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Sign In</h1>
      <form onSubmit={handleSubmit}>
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

        <button
          type="submit"
          className="w-full p-2 bg-orange-400 text-white font-medium text-lg rounded hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          Sign In
        </button>

        <p className="text-right text-sm text-gray-500 mt-2">
          <a href="#" className="hover:underline">
            Forgot password?
          </a>
        </p>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center p-2 border border-gray-300 rounded mb-4 hover:bg-gray-100"
        >
          Sign up with Google
        </button>

        <button
          type="button"
          className="w-full flex items-center justify-center p-2 border border-gray-300 rounded hover:bg-gray-100"
        >
          Sign up with Apple
        </button>
      </form>

      {/* Sign Up Link */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">
          Dont have an account?{" "}
          <Link href="/signup" className="text-orange-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
