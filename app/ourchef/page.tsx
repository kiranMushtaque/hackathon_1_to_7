"use client";

import Image from "next/image";
import { useState } from "react";

type Chef = {
  name: string;
  position: string;
  experience: number;
  specialty: string;
  image: string;
  description: string;
};

const chefs: Chef[] = [
  {
    name: "Tahmina Rumi",
    position: "Head Chef",
    experience: 12,
    specialty: "Italian Cuisine",
    image: "https://sanity-nextjs-rouge.vercel.app/chef/chef-1.png",
    description: "Expert in crafting authentic Italian dishes and pastries.",
  },
  {
    name: "Jorina Begum",
    position: "Sous Chef",
    experience: 8,
    specialty: "Pastry and Desserts",
    image: "https://sanity-nextjs-rouge.vercel.app/chef/chef-2.png",
    description: "Specializes in creative pastries and dessert innovations.",
  },
  {
    name: "M. Mohammad",
    position: "Grill Master",
    experience: 10,
    specialty: "Grilled Dishes",
    image: "https://sanity-nextjs-rouge.vercel.app/chef/chef-3.png",
    description:
      "Renowned for creating perfectly grilled meats and vegetables.",
  },
  {
    name: "Munna Kathy",
    position: "Culinary Instructor",
    experience: 15,
    specialty: "Asian Fusion",
    image: "https://sanity-nextjs-rouge.vercel.app/chef/chef-4.png",
    description:
      "Pioneer in Asian fusion dishes blending traditional flavors with modern techniques.",
  },
  {
    name: "Bisnu Devgon",
    position: "Executive Chef",
    experience: 20,
    specialty: "Global Cuisine",
    image: "https://sanity-nextjs-rouge.vercel.app/chef/chef-5.png",
    description: "Expert in international cuisines and menu planning.",
  },
  {
    name: "William Rumi",
    position: "Chef de Cuisine",
    experience: 18,
    specialty: "Seafood Specialties",
    image: "https://sanity-nextjs-rouge.vercel.app/chef/chef-6.png",
    description:
      "Master of crafting exquisite seafood dishes with unique flavors.",
  },
];

const ChefProfiles = () => {
  const [activeChef, setActiveChef] = useState<Chef | null>(null);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 tracking-tight">
          Our Culinary Masters
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="h-96 w-full relative">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {chef.name}
                </h3>
                <p className="text-gray-600 mb-1">{chef.position}</p>
                <p className="text-sm text-gray-500 mb-4">{chef.specialty}</p>

                <button
                  onClick={() => setActiveChef(chef)}
                  className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors duration-300 font-semibold"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Chef Details */}
        {activeChef && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setActiveChef(null)}
          >
            <div
              className="bg-white rounded-xl max-w-3xl w-full mx-auto flex shadow-2xl overflow-hidden relative scale-100 transform transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveChef(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10 text-2xl"
              >
                ✕
              </button>

              <div className="w-1/2 relative">
                <Image
                  src={activeChef.image}
                  alt={activeChef.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="w-1/2 p-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {activeChef.name}
                </h2>
                <p className="text-xl text-gray-600 mb-2">
                  {activeChef.position}
                </p>
                <div className="border-b border-gray-200 my-4"></div>
                <p className="text-gray-700 mb-2">
                  <strong>Experience:</strong> {activeChef.experience} years
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Specialty:</strong> {activeChef.specialty}
                </p>
                <p className="text-gray-600">{activeChef.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChefProfiles;
