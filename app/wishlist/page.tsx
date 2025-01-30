"use client";

import React from "react";

import { useState, useEffect } from "react";
import { FaHeart, FaBroom, FaTrash, FaShareAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const productList = [
  {
    id: 1,
    name: "Fresh Lime",
    price: 38.0,
    originalPrice: 45.0,
    image: "https://sanity-nextjs-rouge.vercel.app/food/food-1.png",
    description: "Refreshing fresh lime drink made with natural ingredients.",
    available: true,
  },
  {
    id: 2,
    name: "Chocolate Muffin",
    price: 28.0,
    originalPrice: 30.0,
    image: "https://sanity-nextjs-rouge.vercel.app/food/food-2.png",
    description: "Soft and rich chocolate muffin topped with chocolate chips.",
    available: true,
  },
  {
    id: 3,
    name: "Burger",
    price: 21.0,
    originalPrice: 45.0,
    image: "https://sanity-nextjs-rouge.vercel.app/food/food-3.png",
    description: "Juicy beef burger with fresh lettuce, tomatoes, and cheese.",
    available: true,
  },
  {
    id: 4,
    name: "Country Burger",
    price: 45.0,
    originalPrice: 50.0,
    image: "https://sanity-nextjs-rouge.vercel.app/food/food-4.png",
    description: "Classic country-style burger served with fries.",
    available: true,
  },
  {
    id: 5,
    name: "Pizza",
    price: 43.0,
    originalPrice: 50.0,
    image: "https://sanity-nextjs-rouge.vercel.app/food/food-5.png",
    description:
      "Delicious vegetarian pizza topped with fresh vegetables and cheese.",
    available: true,
  },
  {
    id: 6,
    name: "Chicken Chup",
    price: 12.0,
    originalPrice: 15.0,
    image: "https://sanity-nextjs-rouge.vercel.app/food/food-6.png",
    description: "Crispy fried chicken bites served with dipping sauce.",
    available: true,
  },
];

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string; // Add description here
}

const WishlistPage: React.FC = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    // Load the wishlist from localStorage when the page is loaded
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(savedWishlist);
  }, []);

  // Add a product to the wishlist
  const addToWishlist = (product: WishlistItem) => {
    // Check if the product is already in the wishlist
    if (wishlist.some((item) => item.id === product.id)) {
      toast.error(`${product.name} is already in your wishlist!`);
      return;
    }

    // Add the product to the wishlist and update the state
    const updatedWishlist = [...wishlist, product];
    setWishlist(updatedWishlist);

    // Save the updated wishlist to localStorage
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    toast.success(`${product.name} added to wishlist!`);
  };

  // Remove a product from the wishlist
  const removeFromWishlist = (id: number) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);

    // Save the updated wishlist to localStorage
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    toast.success("Item removed from wishlist");
  };

  // Clear all products from the wishlist
  const clearWishlist = () => {
    setWishlist([]);
    localStorage.removeItem("wishlist");
    toast.success("Wishlist cleared");
  };

  // Calculate the total value of products in the wishlist
  const calculateTotal = () => {
    return wishlist.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  };

  // Share the item on platforms like WhatsApp, Facebook, etc.
  const shareItem = (item: WishlistItem) => {
    const shareText = `${item.name} - $${item.price.toFixed(2)}\n${item.description}`;
    const shareUrl = window.location.href; // Current page URL

    // If Web Share API is supported, use it
    if (navigator.share) {
      navigator
        .share({
          title: item.name,
          text: shareText,
          url: shareUrl,
        })
        .then(() => toast.success("Item shared successfully"))
        .catch((error) => toast.error("Failed to share item"));
    } else {
      // Fallback for browsers without Web Share API, show share options
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

      // Open WhatsApp and Facebook share links in new tabs
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 py-12 px-6">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="flex items-center mb-6">
            <FaHeart className="text-red-500 text-4xl mr-3 animate-pulse" />
            <h1 className="text-5xl font-extrabold text-gray-800">
              My Wishlist
            </h1>
          </div>
          {wishlist.length > 0 && (
            <div className="flex gap-4 mb-8">
              <button
                onClick={clearWishlist}
                className="flex items-center bg-gray-500 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition-colors duration-200"
              >
                <FaBroom className="mr-2" />
                Clear All
              </button>
            </div>
          )}
          {wishlist.length > 0 && (
            <p className="text-2xl font-bold text-gray-800">
              Total: ${calculateTotal()}
            </p>
          )}
        </div>

        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    {item.name}
                  </h2>
                  <p className="text-orange-500 font-bold text-xl mb-5">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="flex items-center justify-center bg-red-500 text-white py-3 px-4 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all duration-200 transform active:scale-95"
                      aria-label={`Remove ${item.name} from wishlist`}
                    >
                      <FaTrash className="mr-2" />
                      Remove
                    </button>
                    <button
                      onClick={() => shareItem(item)}
                      className="flex items-center justify-center bg-blue-500 text-white py-3 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 transform active:scale-95"
                      aria-label={`Share ${item.name}`}
                    >
                      <FaShareAlt className="mr-2" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-20">
            <div className="bg-white border-4 border-dashed border-red-400 rounded-full w-32 h-32 flex items-center justify-center mb-6 animate-pulse shadow-xl">
              <FaHeart className="text-red-400 text-4xl" />
            </div>
            <p className="text-3xl text-gray-700 mb-6 font-semibold">
              Your wishlist is empty
            </p>
            <p className="text-gray-600 mb-8 text-center max-w-md">
              Start adding items to your wishlist to keep track of things you
              love!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
