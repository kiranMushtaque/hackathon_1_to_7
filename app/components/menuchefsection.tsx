"use client";
import React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage(): JSX.Element {
  const [activeTab, setActiveTab] = useState("Breakfast");

  const menuItems = [
    {
      category: "Breakfast",
      name: "Lettuce Leaf",
      price: "12.55",
      image: "/images/unsplash_OFismyezPnY.png",
    },
    {
      category: "Breakfast",
      name: "Fresh Breakfast",
      price: "14.55",
      image: "/images/unsplash_-GFCYhoRe48.png",
    },
    {
      category: "Breakfast",
      name: "Mild Butter",
      price: "12.25",
      image: "/images/unsplash_Yr4n8O_3UPc.png",
    },
    {
      category: "Breakfast",
      name: "Fresh Bread",
      price: "12.95",
      image: "/images/unsplash_W9OKrxBqiZA.png",
    },
    {
      category: "Breakfast",
      name: "Glow Cheese",
      price: "12.55",
      image: "/images/unsplash_ZqREbckCRQA.png",
    },
    {
      category: "Breakfast",
      name: "Italian Pizza",
      price: "14.55",
      image: "/images/unsplash_cLpdEA23Z44.png",
    },
    {
      category: "Breakfast",
      name: "Slice Beef",
      price: "12.25",
      image: "/images/unsplash_mAQZ3X_8_l0.png",
    },
    {
      category: "Breakfast",
      name: "Mushroom Pizza",
      price: "12.95",
      image: "/images/unsplash_dphM2U1xq0U (3).png",
    },
  ];

  const chefs = [
    {
      name: "D. Estwood",
      title: "Chef Chef",
      image: "/images/Rectangle 8863.png",
    },
    {
      name: "D. Sooriesh",
      title: "Assistant Chef",
      image: "/images/Rectangle 8863 (2).png",
    },
    {
      name: "M. William",
      title: "Advertising Chef",
      image: "/images/Rectangle 8863 (1).png",
    },
    {
      name: "W. Roadfood",
      title: "Chef",
      image: "/images/Rectangle 8863 (2).png",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      {/* Menu Section */}
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-semibold mb-4">
          <span className="text-[#FF9F0D]">Choose &amp; Pick</span>
        </h2>
        <h3 className="text-center text-3xl font-bold mb-12">From Our Menu</h3>

        {/* Tabs */}
        <div className="flex justify-center space-x-40 text-lg font-semibold mb-8">
          {[
            "Breakfast",
            "Lunch",
            "Dinner",
            "Dessert",
            "Drink",
            "Snack",
            "Soups",
          ].map((tab) => (
            <button
              key={tab}
              className={`hover:text-[#FF9F0D] ${
                activeTab === tab ? "text-[#FF9F0D]" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <div className="flex flex-col items-center">
              <div className="absolute top-20 left-28 z-10">
                <Image
                  src="/images/unsplash_INjdgkCwHp0 (1).png"
                  alt="leaf"
                  width={515}
                  height={406}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="absolute top-32 left-44 z-20">
                <Image
                  src="/images/unsplash_Lv174o7fn7Y.png"
                  alt="Main Dish"
                  width={366}
                  height={362}
                  className="rounded-full transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {/* Menu Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Left Column */}
              <div className="space-y-8">
                {menuItems.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-md transition-transform duration-300 hover:scale-105"
                    />
                    <div>
                      <h4 className="text-xl font-semibold">{item.name}</h4>
                      <p className="text-lg font-bold text-[#FF9F0D]">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {menuItems.slice(4, 8).map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-md transition-transform duration-300 hover:scale-105"
                    />
                    <div>
                      <h4 className="text-xl font-semibold">{item.name}</h4>
                      <p className="text-lg font-bold text-[#FF9F0D]">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chef Section */}
      <div className="container mx-auto px-6 mt-20 text-center">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/images/Chefs.png"
            alt="Chef"
            width={56}
            height={40}
            className="mb-4"
          />
          <h3 className="text-center text-4xl font-bold">
            <span className="text-[#FF9F0D]">Me</span>et Our Chef
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.map((chef, index) => (
            <div key={index} className="text-center">
              <Image
                src={chef.image}
                alt={chef.name}
                width={312}
                height={391}
                className="rounded-md mx-auto transition-transform duration-300 hover:scale-105"
              />
              <h4 className="text-xl font-semibold mt-4">{chef.name}</h4>
              <p className="text-sm text-gray-400">{chef.title}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/ourchef">
            <button className="border-2 border-[#FF9F0D] text-white py-2 px-8 rounded-full hover:bg-white hover:text-[#FF9F0D] transition">
              See More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
