"use client";

import { useState } from "react";
import Image from "next/image";
import { HeartIcon, ShareIcon, StarIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";

const ShopDetailsPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const dummyImages = Array(4).fill(null);
  const similarProducts = [
    {
      name: "Fresh Lime",
      price: 38,
      isNew: true,
      image: "/images/unsplash_MRHyv-hHxgk.png",
    },
    {
      name: "Chocolate Muffin",
      price: 28,
      isNew: false,
      image: "/images/Rectangle 8885.png",
    },
    {
      name: "Burger",
      price: 21,
      isSale: true,
      image: "/images/unsplash_dphM2U1xq0U (2).png",
    },
    {
      name: "Fresh Juice",
      price: 38,
      isNew: true,
      image: "/images/Mask Group (9).png",
    },
  ];

  const productImages = [
    "/images/Rectangle 8883.png",
    "/images/Rectangle 8885.png",
    "/images/Rectangle 8886.png",
    "/images/Rectangle 8886.png",
    "/images/Rectangle 8884.png",
    "/images/Rectangle 8885.png",
    "/images/Rectangle 8886.png",
    "/images/Rectangle 8886.png",
  ];

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(
      isWishlisted ? "Removed from wishlist!" : "Added to wishlist!",
      {
        position: "bottom-right",
        duration: 2000,
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Section - Images */}
            <div className="md:col-span-5 space-y-4">
              <div
                className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-zoom-in"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
              >
                <div
                  className={`bg-gray-200 w-full h-full transition-transform duration-500 ${
                    isZoomed ? "scale-110" : "scale-100"
                  }`}
                >
                  <Image
                    src={productImages[0]}
                    alt="main product image"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {selectedImage === 0 && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </span>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-4 gap-4">
                {dummyImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index + 1)}
                    className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-200 ${
                      selectedImage === index + 1
                        ? "ring-2 ring-yellow-500 ring-offset-2"
                        : "hover:opacity-75"
                    }`}
                  >
                    <div className="bg-gray-200 w-full h-full">
                      <Image
                        src={productImages[index + 1]}
                        alt={`product image ${index + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Section - Product Info */}
            <div className="md:col-span-7">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Yummy Chicken Chup
                  </h1>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-gray-500">(22 Reviews)</span>
                  </div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed">
                  Premium quality chicken with our special house sauce, fresh
                  vegetables, and signature seasoning. Made fresh to order.
                </p>

                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-yellow-500">
                    $54.00
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    $64.00
                  </span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    Save 15%
                  </span>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-gray-500">Category:</span>
                      <span className="ml-2 font-medium">Fast Food</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Tags:</span>
                      <span className="ml-2 font-medium">
                        Chicken, Hot, Spicy
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <button
                    onClick={handleWishlist}
                    className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
                  >
                    {isWishlisted ? (
                      <HeartSolidIcon className="w-5 h-5 text-red-500" />
                    ) : (
                      <HeartIcon className="w-5 h-5" />
                    )}
                    <span>Wishlist</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                    <ShareIcon className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="md:col-span-12">
              <div className="border-b border-gray-200">
                <div className="flex space-x-8">
                  {["description", "reviews", "shipping"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-4 px-2 capitalize transition-colors ${
                        activeTab === tab
                          ? "border-b-2 border-yellow-500 text-yellow-500 font-medium"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {tab} {tab === "reviews" }
                    </button>
                  ))}
                </div>
              </div>
              <div className="py-6">
                {activeTab === "description" && (
                  <div className="prose max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      Our signature Chicken Chup is made with the finest
                      ingredients and prepared fresh daily. Each serving comes
                      with our special house sauce that's been perfected over
                      generations.
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
                        Premium quality chicken breast
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
                        House-made special sauce
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
                        Fresh vegetables and herbs
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Similar Products */}
            <div className="md:col-span-12">
              <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {similarProducts.map((product, index) => (
                  <div
                    key={index}
                    className="group relative bg-white border rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden mb-4">
                      <div className="bg-gray-200 w-full h-full group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      {product.isNew && (
                        <span className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          New
                        </span>
                      )}
                      {product.isSale && (
                        <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Sale
                        </span>
                      )}
                    </div>
                    <h3 className="font-medium text-gray-900 group-hover:text-yellow-500 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-yellow-500 font-medium mt-1">
                      ${product.price}.00
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetailsPage;
