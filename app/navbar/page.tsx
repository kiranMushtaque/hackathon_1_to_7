"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { RxDropdownMenu } from "react-icons/rx";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { cart } = useCart();
  const router = useRouter();

  const dropdownItems = [
    { label: "Checkout", href: "/checkout" },
    { label: "Signin", href: "/signin" },
   
    { label: "Our Chef", href: "/ourchef" },
    { label: "Shop Details", href: "/shopdetails" },
    { label: "Shopping Cart", href: "/shoppingcart" },
    { label: "404 Page", href: "/404page" },
    { label: "Order-Confirmation", href: "/order-confirmation" },
  ];

  const totalItemsInCart = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?query=${searchTerm}`);
    }
  };

  return (
    <div className="relative z-20 bg-gray-900 text-white">
      {!isHomePage && (
        <Image
          src="/images/unsplash_4ycv3Ky1ZZU.png"
          alt="menu image"
          layout="responsive"
          width={1920}
          height={410}
          className="w-full h-auto z-10"
        />
      )}

      <div className="absolute inset-0 flex flex-col items-center space-y-6 z-20 px-4 md:px-0">
        <div className="flex items-center space-x-1 pt-5 z-20">
          <Link
            href="/"
            className="text-4xl font-bold text-[#FF9F0D] hover:text-white"
          >
            <span className="text-[#FF9F0D]">Food</span>
            <span className="text-white">tuck</span>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-10 lg:px-64 z-20">
          <nav className="flex flex-wrap space-x-6 z-20">
            <Link href="/" className="text-white hover:text-[#FF9F0D] z-20">
              Home
            </Link>
            <Link href="/menu" className="text-white hover:text-[#FF9F0D] z-20">
              Menu
            </Link>
            <Link href="/blog" className="text-white hover:text-[#FF9F0D] z-20">
              Blog
            </Link>

            <Link
              href="/about"
              className="text-white hover:text-[#FF9F0D] z-20"
            >
              About
            </Link>
            <Link href="/shop" className="text-white hover:text-[#FF9F0D] z-20">
              Shop
            </Link>
            <Link
              href="/CustomerCare"
              className="text-white hover:text-[#FF9F0D] z-20"
            >
              CustomerCare
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#FF9F0D] z-20"
            >
              Contact
            </Link>
            <Link href="/wishlist">
              <button className="text-white hover:text-[#FF9F0D]">
                Wishlist
              </button>
            </Link>

            <div className="relative z-20">
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="text-white hover:text-[#FF9F0D] flex items-center z-20"
              >
                <RxDropdownMenu className="mr-2 w-5 h-5" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 transform transition duration-300 ease-in-out scale-100 opacity-100">
                  {dropdownItems.map((item, index) => (
                    <li key={index} className="hover:bg-[#FF9F0D]">
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-gray-800"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>

          <div className="flex items-center flex-wrap space-x-36 mt-4 md:mt-0 z-20">
            <div className="relative z-20">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search products..."
                  className="text-[#FFFFFF] pl-10 py-2 px-4 border border-[#FF9F0D] bg-black rounded-full w-64"
                />
                <button
                  type="submit"
                  className="absolute top-2 right-4 w-6 h-6 z-20"
                >
                  <Image
                    src="/images/Group.png"
                    alt="Search Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </button>
              </form>
            </div>

            <div className="relative md:right-32 right-0 z-20 flex items-center space-x-6 mt-4 md:mt-0">
              <SignedOut>
                <Link href="/signin">
                  <div className="relative flex items-center cursor-pointer">
                    <FaUserCircle className="text-white w-8 h-8" />
                  </div>
                </Link>
              </SignedOut>

              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>

              <Link href="/shoppingcart">
                <div className="relative flex items-center cursor-pointer">
                  <FaShoppingCart className="text-white w-8 h-8" />
                  {totalItemsInCart > 0 && (
                    <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {totalItemsInCart}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {!isHomePage && (
        <div className="absolute top-48 w-full text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-2">
            {pathname.split("/").pop()?.toUpperCase()}
          </h1>
          <div className="text-sm">
            <Link href="/" className="hover:text-[#FF9F0D]">
              Home
            </Link>
            <span className="mx-2 text-[#FF9F0D]">&gt;</span>
            <span className="text-[#FF9F0D]">
              {pathname.split("/").pop()?.toUpperCase()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
