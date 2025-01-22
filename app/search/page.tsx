// "use client";

// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";

// const SearchPage = () => {
//   const searchParams = useSearchParams();
//   const query = searchParams?.get("query") || ""; // Search term from URL
//   const category = searchParams?.get("category") || ""; // Category filter
//   const minPrice = parseFloat(searchParams?.get("minPrice") || "0"); // Min price
//   const maxPrice = parseFloat(searchParams?.get("maxPrice") || "10000"); // Max price
//   const tag = searchParams?.get("tag") || ""; // Tag filter

//   // Static list of products
//   const staticProducts = [
//     {
//       name: "Fresh Lime",
//       category: "Drinks",
//       price: 38.0,
//       originalPrice: 45.0,
//       tags: ["Healthy", "Popular"],
//       image: "https://sanity-nextjs-rouge.vercel.app/food/food-1.png",
//       description: "Refreshing fresh lime drink made with natural ingredients.",
//       available: true,
//     },
//     {
//       name: "Chocolate Muffin",
//       category: "Desserts",
//       price: 28.0,
//       originalPrice: 30.0,
//       tags: ["Sell", "Sweet"],
//       image: "https://sanity-nextjs-rouge.vercel.app/food/food-2.png",
//       description:
//         "Soft and rich chocolate muffin topped with chocolate chips.",
//       available: true,
//     },
//     {
//       name: "Burger",
//       category: "Burgers",
//       price: 21.0,
//       originalPrice: 45.0,
//       tags: ["Popular"],
//       image: "https://sanity-nextjs-rouge.vercel.app/food/food-3.png",
//       description:
//         "Juicy beef burger with fresh lettuce, tomatoes, and cheese.",
//       available: true,
//     },
//     {
//       name: "Country Burger",
//       category: "Burgers",
//       price: 45.0,
//       originalPrice: 50.0,
//       tags: ["Recommended"],
//       image: "https://sanity-nextjs-rouge.vercel.app/food/food-4.png",
//       description: "Classic country-style burger served with fries.",
//       available: true,
//     },
//     {
//       name: "Pizza",
//       category: "Main Course",
//       price: 43.0,
//       originalPrice: 50.0,
//       tags: ["Cheesy", "Vegetarian"],
//       image: "https://sanity-nextjs-rouge.vercel.app/food/food-5.png",
//       description:
//         "Delicious vegetarian pizza topped with fresh vegetables and cheese.",
//       available: true,
//     },
//     {
//       name: "Chicken Chup",
//       category: "Appetizers",
//       price: 12.0,
//       originalPrice: 15.0,
//       tags: ["Sell", "Crispy"],
//       image: "https://sanity-nextjs-rouge.vercel.app/food/food-6.png",
//       description: "Crispy fried chicken bites served with dipping sauce.",
//       available: true,
//     },
//   ];

//   // Filtered products state
//   const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

//   useEffect(() => {
//     const filtered = staticProducts.filter((product) => {
//       const matchesQuery =
//         !query || product.name.toLowerCase().includes(query.toLowerCase());
//       const matchesCategory = !category || product.category === category;
//       const matchesPrice =
//         product.price >= minPrice && product.price <= maxPrice;
//       const matchesTag =
//         !tag ||
//         product.tags.some((t: string) => t.toLowerCase() === tag.toLowerCase());

//       return matchesQuery && matchesCategory && matchesPrice && matchesTag;
//     });

//     setFilteredProducts(filtered);
//   }, [query, category, minPrice, maxPrice, tag]);

//   // Dynamically extract unique categories and tags
//   const categories = Array.from(
//     new Set(staticProducts.map((product) => product.category))
//   );
//   const tags = Array.from(
//     new Set(staticProducts.flatMap((product) => product.tags))
//   );

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center mb-8">
//         Search Results for "{query || "All"}"
//       </h1>

//       {/* Filters Section */}
//       <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
//         <h2 className="text-2xl font-semibold mb-4">Filters</h2>
//         <div className="flex flex-wrap gap-4">
//           {/* Category Filter */}
//           <select
//             value={category}
//             onChange={(e) => {
//               const selectedCategory = e.target.value;
//               window.location.href = `/search?query=${query}&category=${selectedCategory}&minPrice=${minPrice}&maxPrice=${maxPrice}&tag=${tag}`;
//             }}
//             className="p-3 border rounded-lg bg-white shadow-sm w-full md:w-auto"
//           >
//             <option value="">All Categories</option>
//             {categories.map((cat) => (
//               <option key={cat} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>

//           {/* Tag Filter */}
//           <select
//             value={tag}
//             onChange={(e) => {
//               const selectedTag = e.target.value;
//               window.location.href = `/search?query=${query}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&tag=${selectedTag}`;
//             }}
//             className="p-3 border rounded-lg bg-white shadow-sm w-full md:w-auto"
//           >
//             <option value="">All Tags</option>
//             {tags.map((tag) => (
//               <option key={tag} value={tag}>
//                 {tag}
//               </option>
//             ))}
//           </select>

//           {/* Min and Max Price Filters */}
//           <input
//             type="number"
//             value={minPrice}
//             onChange={(e) => {
//               const newMinPrice = e.target.value;
//               window.location.href = `/search?query=${query}&category=${category}&minPrice=${newMinPrice}&maxPrice=${maxPrice}&tag=${tag}`;
//             }}
//             placeholder="Min Price"
//             className="p-3 border rounded-lg bg-white shadow-sm w-full md:w-auto"
//           />
//           <input
//             type="number"
//             value={maxPrice}
//             onChange={(e) => {
//               const newMaxPrice = e.target.value;
//               window.location.href = `/search?query=${query}&category=${category}&minPrice=${minPrice}&maxPrice=${newMaxPrice}&tag=${tag}`;
//             }}
//             placeholder="Max Price"
//             className="p-3 border rounded-lg bg-white shadow-sm w-full md:w-auto"
//           />
//         </div>
//       </div>

//       {/* Products Section */}
//       {filteredProducts.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.name}
//               className="border rounded-lg shadow-md overflow-hidden bg-white"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//                 <p className="text-gray-700 text-sm mb-1">
//                   Category: {product.category}
//                 </p>
//                 <p className="text-gray-500 text-sm mb-4">
//                   Tags: {product.tags.join(", ")}
//                 </p>
//                 <p className="text-lg font-bold mb-2">
//                   ${product.price.toFixed(2)}
//                 </p>
//                 <p className="text-sm text-gray-600">{product.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center text-gray-500">
//           <p>No products found. Try adjusting your filters.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchPage;










"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// Define the type for a product
interface Product {
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  tags: string[];
  image: string;
  description: string;
  available: boolean;
}

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams?.get("query") || ""; // Search term from URL
  const category = searchParams?.get("category") || ""; // Category filter
  const minPrice = parseFloat(searchParams?.get("minPrice") || "0"); // Min price
  const maxPrice = parseFloat(searchParams?.get("maxPrice") || "10000"); // Max price
  const tag = searchParams?.get("tag") || ""; // Tag filter

  // Static list of products with explicit typing
  const staticProducts: Product[] = [
    {
      name: "Fresh Lime",
      category: "Drinks",
      price: 38.0,
      originalPrice: 45.0,
      tags: ["Healthy", "Popular"],
      image: "https://sanity-nextjs-rouge.vercel.app/food/food-1.png",
      description: "Refreshing fresh lime drink made with natural ingredients.",
      available: true,
    },
    {
      name: "Chocolate Muffin",
      category: "Desserts",
      price: 28.0,
      originalPrice: 30.0,
      tags: ["Sell", "Sweet"],
      image: "https://sanity-nextjs-rouge.vercel.app/food/food-2.png",
      description:
        "Soft and rich chocolate muffin topped with chocolate chips.",
      available: true,
    },
    {
      name: "Burger",
      category: "Burgers",
      price: 21.0,
      originalPrice: 45.0,
      tags: ["Popular"],
      image: "https://sanity-nextjs-rouge.vercel.app/food/food-3.png",
      description:
        "Juicy beef burger with fresh lettuce, tomatoes, and cheese.",
      available: true,
    },
    {
      name: "Country Burger",
      category: "Burgers",
      price: 45.0,
      originalPrice: 50.0,
      tags: ["Recommended"],
      image: "https://sanity-nextjs-rouge.vercel.app/food/food-4.png",
      description: "Classic country-style burger served with fries.",
      available: true,
    },
    {
      name: "Pizza",
      category: "Main Course",
      price: 43.0,
      originalPrice: 50.0,
      tags: ["Cheesy", "Vegetarian"],
      image: "https://sanity-nextjs-rouge.vercel.app/food/food-5.png",
      description:
        "Delicious vegetarian pizza topped with fresh vegetables and cheese.",
      available: true,
    },
    {
      name: "Chicken Chup",
      category: "Appetizers",
      price: 12.0,
      originalPrice: 15.0,
      tags: ["Sell", "Crispy"],
      image: "https://sanity-nextjs-rouge.vercel.app/food/food-6.png",
      description: "Crispy fried chicken bites served with dipping sauce.",
      available: true,
    },
  ];

  // Filtered products state
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const filtered = staticProducts.filter((product) => {
      const matchesQuery =
        !query || product.name.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = !category || product.category === category;
      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;
      const matchesTag =
        !tag ||
        product.tags.some((t: string) => t.toLowerCase() === tag.toLowerCase());

      return matchesQuery && matchesCategory && matchesPrice && matchesTag;
    });

    setFilteredProducts(filtered);
  }, [query, category, minPrice, maxPrice, tag]);

  // Dynamically extract unique categories and tags
  const categories = Array.from(
    new Set(staticProducts.map((product) => product.category))
  );
  const tags = Array.from(
    new Set(staticProducts.flatMap((product) => product.tags))
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Search Results for "{query || "All"}"
      </h1>

      {/* Filters Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Filters</h2>
        <div className="flex flex-wrap gap-4">
          {/* Category Filter */}
          <select
            value={category}
            onChange={(e) => {
              const selectedCategory = e.target.value;
              window.location.href = `/search?query=${query}&category=${selectedCategory}&minPrice=${minPrice}&maxPrice=${maxPrice}&tag=${tag}`;
            }}
            className="p-3 border rounded-lg bg-white shadow-sm w-full md:w-auto"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Tag Filter */}
          <select
            value={tag}
            onChange={(e) => {
              const selectedTag = e.target.value;
              window.location.href = `/search?query=${query}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&tag=${selectedTag}`;
            }}
            className="p-3 border rounded-lg bg-white shadow-sm w-full md:w-auto"
          >
            <option value="">All Tags</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>

          {/* Min and Max Price Filters */}
          <input
            type="number"
            value={minPrice}
            onChange={(e) => {
              const newMinPrice = e.target.value;
              window.location.href = `/search?query=${query}&category=${category}&minPrice=${newMinPrice}&maxPrice=${maxPrice}&tag=${tag}`;
            }}
            placeholder="Min Price"
            className="p-3 border rounded-lg bg-white shadow-sm w-full md:w-auto"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => {
              const newMaxPrice = e.target.value;
              window.location.href = `/search?query=${query}&category=${category}&minPrice=${minPrice}&maxPrice=${newMaxPrice}&tag=${tag}`;
            }}
            placeholder="Max Price"
            className="p-3 border rounded-lg bg-white shadow-sm w-full md:w-auto"
          />
        </div>
      </div>

      {/* Products Section */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.name}
              className="border rounded-lg shadow-md overflow-hidden bg-white"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 text-sm mb-1">
                  Category: {product.category}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  Tags: {product.tags.join(", ")}
                </p>
                <p className="text-lg font-bold mb-2">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p>No products found. Try adjusting your filters.</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
