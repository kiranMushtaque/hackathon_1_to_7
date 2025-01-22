

"use client";

import { useState } from "react";
import Image from "next/image";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");

  const recentPosts = [
    {
      date: "June 22, 2020",
      title: "Lorem ipsum dolor sit cing elit, sed do.",
      image: "/images/unsplash_-GFCYhoRe48.png",
    },
    {
      date: "June 22, 2020",
      title: "Lorem ipsum dolor sit cing elit, sed do.",
      image: "/images/unsplash_MqT0asuoIcU.png",
    },
    {
      date: "June 22, 2020",
      title: "Lorem ipsum dolor sit cing elit, sed do.",
      image: "/images/unsplash_XoByiBymX20.png",
    },
    {
      date: "June 22, 2020",
      title: "Lorem ipsum dolor sit cing elit, sed do.",
      image: "/images/unsplash_-GFCYhoRe48.png",
    },
  ];

  const filterMenu = [
    { name: "Chicken Fry", count: 26, image: "/images/tikka.png" },
    { name: "Burger Food", count: 46, image: "/images/tikka.png" },
    { name: "Pizza", count: 16, image: "/images/tikka.png" },
    { name: "Fresh Fruits", count: 36, image: "/images/tikka.png" },
    { name: "Vegetables", count: 16, image: "/images/tikka.png" },
  ];

  const tags = [
    "Sandwich",
    "Tikka",
    "BBQ",
    "Restaurant",
    "Chicken Sharma",
    "Health",
    "Fastfood",
    "Food",
    "Pizza",
    "Burger",
    "Chicken",
  ];

  const HeroSection = () => (
    <div className="lg:col-span-2 relative">
      <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden">
        <Image
          src="/images/unsplash_lP5MCM6nZ5A.png"
          alt="Blog hero"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
        <div className="absolute top-6 left-6 bg-orange-500 text-white rounded-lg p-2 text-center">
          <div className="text-lg font-bold">14</div>
          <div className="text-sm">Feb</div>
        </div>
      </div>
    </div>
  );

  const AuthorProfile = () => (
    <div className="border rounded-xl p-6">
      <div className="flex flex-col items-center">
        <div className="relative w-28 h-28 mb-4">
          <Image
            src="/images/profile.png"
            alt="Profile"
            layout="fill"
            className="rounded-full"
            objectFit="cover"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-800">Prince Miyako</h3>
        <p className="text-gray-500">Blogger/Photographer</p>
        <div className="flex items-center mt-2 space-x-1">
          <span className="text-gray-500 text-sm ml-2">(1 Review)</span>
        </div>
        <p className="text-gray-600 text-center mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          distinctio, odio eligendi suscipit reprehenderit atque
        </p>
      </div>
    </div>
  );

  const RecentPostsSection = () => (
    <div className="border rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Posts</h3>
      <div className="space-y-6">
        {recentPosts.map((post, index) => (
          <div key={index} className="flex space-x-4">
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                className="rounded-lg"
                objectFit="cover"
              />
            </div>
            <div>
              <p className="text-gray-500 text-sm">{post.date}</p>
              <h4 className="text-gray-700 font-medium mt-1">{post.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const FilterMenuSection = () => (
    <div className="border rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Filter By Menu</h3>
      <div className="space-y-4">
        {filterMenu.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  className="rounded-lg"
                  objectFit="cover"
                />
              </div>
              <span className="text-gray-800 font-medium">{item.name}</span>
            </div>
            <span className="text-gray-600">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const PopularTagsSection = () => (
    <div className="border rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Popular Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <button
            key={index}
            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-sm"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );

  const Sidebar = () => (
    <div className="space-y-8">
      <RecentPostsSection />
      <FilterMenuSection />
      <PopularTagsSection />
      <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden">
        <Image
          src="/images/unsplash_XoByiBymX20.png"
          alt="Blog final"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
    </div>
  );

  const MainContent = () => (
    <div className="lg:col-span-2">
      <div className="flex items-center text-gray-600 text-sm mb-4">
        <span className="ml-2">Feb 14, 2022</span>
        <span className="ml-2">3 min read</span>
        <span className="mx-2">•</span>
        <span className="ml-2">Admin</span>
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        10 Reasons To Do A Digital Detox Challenge
      </h1>
      <div className="border-b mb-6"></div>
      <p className="text-gray-600 mb-6">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat
      </p>
      <button
        className="border border-orange-500 text-orange-500 px-6 py-2 rounded-lg 
                   flex items-center hover:bg-orange-50 transition-colors"
      >
        Read More
      </button>
      <div className="relative h-80 sm:h-96 mt-8 rounded-xl overflow-hidden">
        <Image
          src="/images/unsplash_MqT0asuoIcU.png"
          alt="Blog content"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <HeroSection />
        <div className="lg:col-span-1">
          <AuthorProfile />
        </div>
      </div>
      {/* Main Content and Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <MainContent />
        <Sidebar />
      </div>
    </div>
  );
}