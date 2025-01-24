// "use client";

// import React from 'react';

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { createClient } from "next-sanity";
// import { useCart } from "../context/CartContext";
// import { useWishlist } from "../WishlistContext";
// import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
// import Reviews from "../components/Reviews/Reviews";
// import ReviewForm from "../components/Reviews/ReviewForm";
// import RatingStars from "../components/Reviews/RatingStars";


// import {
//   FaTag,
//   FaCheck,
//   FaTimes,
//   FaUtensils,
//   FaPizzaSlice,
//   FaHamburger,
//   FaIceCream,
//   FaCoffee,
// } from "react-icons/fa";
// import debounce from "lodash.debounce";

// interface Food {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   originalPrice: number;
//   tags: string[];
//   image: {
//     asset: {
//       url: string;
//     };
//   };
//   category: string;
//   available: boolean;
// }

// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
//   apiVersion: "2023-03-04",
//   useCdn: false,
// });

// const ShopListPage: React.FC = () => {
//   const [foods, setFoods] = useState<Food[]>([]);
//   const [categories, setCategories] = useState<string[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<string>("");
//   const { addToCart } = useCart();
//   const { addToWishlist } = useWishlist();
//   const [selectedFood, setSelectedFood] = useState<Food | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const foodQuery = `*[_type == "food"]{
//           _id,
//           name,
//           description,
//           price,
//           originalPrice,
//           tags,
//           image {
//             asset->{
//               _id,
//               url
//             }
//           },
//           category,
//           available
//         }`;

//         const foodData = await client.fetch<Food[]>(foodQuery);
//         setFoods(foodData);

//         const foodCategories = [
//           ...new Set(foodData.map((food: Food) => food.category)),
//         ];
//         setCategories(foodCategories);
//       } catch (error) {
//         console.error("Error fetching food data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleCategoryFilter = (category: string) => {
//     setSelectedCategory(category);
//   };

//   const handleClearCategoryFilter = () => {
//     setSelectedCategory("");
//   };

//   const filteredFoods = selectedCategory
//     ? foods.filter((food) => food.category === selectedCategory)
//     : foods;

//   const handleAddToCart = (food: Food) => {
//     const cartItem = {
//       id: food._id,
//       name: food.name,
//       price: food.price,
//       image: food.image.asset.url,
//       quantity: 1,
//     };
//     addToCart(cartItem);
//   };

//   const handleAddToWishlist = (food: Food) => {
//     const wishlistItem = {
//       id: food._id,
//       name: food.name,
//       price: food.price,
//       image: food.image.asset.url,
//     };
//     addToWishlist(wishlistItem);
//   };

//   const handleOpenModal = (food: Food) => {
//     setSelectedFood(food);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedFood(null);
//   };

//   const debouncedSearch = debounce((value: string) => {
//     setSearchTerm(value);
//   }, 300);

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     debouncedSearch(e.target.value);
//   };

//   const searchedFoods = searchTerm
//     ? filteredFoods.filter((food) =>
//         food.name.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : filteredFoods;

//   const getCategoryIcon = (category: string) => {
//     switch (category.toLowerCase()) {
//       case "pizza":
//         return <FaPizzaSlice className="w-6 h-6 text-orange-500" />;
//       case "burger":
//         return <FaHamburger className="w-6 h-6 text-orange-500" />;
//       case "ice cream":
//         return <FaIceCream className="w-6 h-6 text-orange-500" />;
//       case "coffee":
//         return <FaCoffee className="w-6 h-6 text-orange-500" />;
//       default:
//         return <FaUtensils className="w-6 h-6 text-orange-500" />;
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 grid grid-cols-12 gap-8 py-10 mt-24">
//       <aside className="col-span-12 md:col-span-3 space-y-8">
//         <div>
//           <h3 className="text-2xl font-semibold mb-4 text-gray-800">
//             Search Product
//           </h3>
//           <div className="flex rounded-md shadow-sm">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full border border-gray-300 rounded-l-md p-3 focus:ring-orange-500 focus:border-orange-500"
//               onChange={handleSearch}
//             />
//             <button className="bg-orange-500 text-white px-4 rounded-r-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
//               <MagnifyingGlassIcon className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         <div>
//           <h3 className="text-2xl font-semibold mb-4 text-gray-800">
//             Category
//           </h3>
//           <div className="space-y-4">
//             {categories.map((category) => (
//               <div
//                 key={category}
//                 className={`flex items-center space-x-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
//                   selectedCategory === category
//                     ? "bg-orange-500 text-white"
//                     : "bg-gray-100 hover:bg-orange-200"
//                 }`}
//                 onClick={() => handleCategoryFilter(category)}
//               >
//                 <div className="flex-shrink-0">{getCategoryIcon(category)}</div>
//                 <span className="text-lg font-medium">{category}</span>
//               </div>
//             ))}
//             {selectedCategory && (
//               <button
//                 onClick={handleClearCategoryFilter}
//                 className="mt-4 text-orange-500 underline hover:text-orange-600 flex items-center space-x-2"
//               >
//                 <FaTimes className="w-4 h-4" />
//                 <span>Clear Category Filter</span>
//               </button>
//             )}
//           </div>
//         </div>
//       </aside>

//       <main className="col-span-12 md:col-span-9 mt-8 md:mt-0">
//         {isLoading ? (
//           <div className="text-center text-xl text-gray-700">
//             Loading products...
//           </div>
//         ) : searchedFoods.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {searchedFoods.map((food) => (
//               <div
//                 key={food._id}
//                 className="border border-gray-200 rounded-lg p-4 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg bg-white flex flex-col"
//               >
//                 <div className="relative h-48 mb-4 overflow-hidden rounded-md">
//                   {food.image?.asset?.url ? (
//                     <Image
//                       src={food.image.asset.url}
//                       alt={food.name}
//                       layout="fill"
//                       objectFit="cover"
//                       className="transition-transform duration-300 ease-in-out hover:scale-110"
//                     />
//                   ) : (
//                     <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
//                       <span className="text-gray-500">No Image</span>
//                     </div>
//                   )}
//                 </div>
//                 <h4 className="font-semibold text-lg mb-2 text-gray-800">
//                   {food.name}
//                 </h4>
//                 <p className="text-gray-600 mb-4 flex-1">{food.description}</p>
//                 <div className="mt-auto">
//                   <p className="font-semibold text-xl text-orange-500 mb-2">
//                     ${food.price.toFixed(2)}
//                   </p>
//                   <p className="text-gray-500 text-sm line-through mb-4">
//                     ${food.originalPrice.toFixed(2)}
//                   </p>
//                   <button
//                     onClick={() => handleOpenModal(food)}
//                     className="mt-2 bg-orange-500 text-white py-2 px-4 rounded-full w-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition"
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center text-xl text-gray-700">
//             No products found.
//           </div>
//         )}
//       </main>

//       {isModalOpen && selectedFood && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4"
//           role="dialog"
//           aria-modal="true"
//         >
//           <div className="bg-white p-6 rounded-lg w-full max-w-3xl relative">
//             <button
//               onClick={handleCloseModal}
//               className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
//               aria-label="Close Modal"
//             >
//               <XMarkIcon className="w-6 h-6" />
//             </button>
//             <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
//               <div className="relative w-full md:w-1/2 h-64 md:h-96 overflow-hidden rounded-md mb-4 md:mb-0">
//                 {selectedFood.image?.asset?.url ? (
//                   <Image
//                     src={selectedFood.image.asset.url}
//                     alt={selectedFood.name}
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                 ) : (
//                   <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
//                     <span className="text-gray-500">No Image</span>
//                   </div>
//                 )}
//               </div>
//               <div className="w-full md:w-1/2 md:pl-6">
//                 <h3 className="text-3xl font-semibold mb-3 text-gray-800">
//                   {selectedFood.name}
//                 </h3>
//                 <p className="text-gray-600 mb-4 text-lg">
//                   {selectedFood.description}
//                 </p>
//                 <div className="flex items-center mb-4">
//                   <RatingStars rating={0} />
//                   <span className="ml-2 text-gray-600">(0 Reviews)</span>
//                 </div>
//                 <p className="font-semibold text-2xl text-orange-500 mb-2">
//                   ${selectedFood.price.toFixed(2)}
//                 </p>
//                 <p className="text-gray-500 text-sm line-through mb-4">
//                   ${selectedFood.originalPrice.toFixed(2)}
//                 </p>
//                 <button
//                   onClick={() => handleAddToCart(selectedFood)}
//                   className="mt-2 bg-orange-500 text-white py-2 px-4 rounded-full w-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition"
//                 >
//                   Add to Cart
//                 </button>
//                 <button
//                   onClick={() => handleAddToWishlist(selectedFood)}
//                   className="mt-4 bg-red-600 text-white py-2 px-4 rounded-full w-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition"
//                 >
//                   Add to Wishlist
//                 </button>
//               </div>
//             </div>
//             <div className="mt-6">
//               <Reviews foodId={selectedFood._id} />
//               <ReviewForm
//                 foodId={selectedFood._id}
//                 onClose={handleCloseModal}
//               />
//             </div>
//           </div>
//         </div>
//       )}
 
//     </div>
//   );
// };

// export default ShopListPage;


'use client'


// ShopListPage.tsx
import { useState, useEffect } from "react";
import Image from "next/image";
import { createClient } from "next-sanity";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../WishlistContext";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Reviews from "../components/Reviews/Reviews";
import ReviewForm from "../components/Reviews/ReviewForm";
import RatingStars from "../components/Reviews/RatingStars";
import StatsSection from "@/components/StatsSection";
import {
  FaTag,
  FaCheck,
  FaTimes,
  FaUtensils,
  FaPizzaSlice,
  FaHamburger,
  FaIceCream,
  FaCoffee,
} from "react-icons/fa";
// import debounce from "lodash.debounce";
import debounce from "lodash/debounce";


interface Food {
  _id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  tags: string[];
  image: {
    asset: {
      url: string;
    };
  };
  category: string;
  available: boolean;
}

interface Review {
  foodId: string;
  user: string;
  rating: number;
  comment: string;
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-03-04",
  useCdn: false,
});

const ShopListPage: React.FC = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Reviews State
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch food data
        const foodQuery = `*[_type == "food"]{
          _id,
          name,
          description,
          price,
          originalPrice,
          tags,
          image {
            asset->{
              _id,
              url
            }
          },
          category,
          available
        }`;
        const foodData = await client.fetch<Food[]>(foodQuery);
        setFoods(foodData);

        // Fetch unique categories
        const foodCategories = [
          ...new Set(foodData.map((food: Food) => food.category)),
        ];
        setCategories(foodCategories);

        // Fetch reviews
        const reviewQuery = `*[_type == "review"]{
          foodId,
          user,
          rating,
          comment
        }`;
        const reviewData = await client.fetch<Review[]>(reviewQuery);
        setReviews(reviewData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleClearCategoryFilter = () => {
    setSelectedCategory("");
    setCurrentPage(1);
  };

  const filteredFoods = selectedCategory
    ? foods.filter((food) => food.category === selectedCategory)
    : foods;

  const handleAddToCart = (food: Food) => {
    const cartItem = {
      id: food._id,
      name: food.name,
      price: food.price,
      image: food.image.asset.url,
      quantity: 1,
    };
    addToCart(cartItem);
  };

  const handleAddToWishlist = (food: Food) => {
    const wishlistItem = {
      id: food._id,
      name: food.name,
      price: food.price,
      image: food.image.asset.url,
    };
    addToWishlist(wishlistItem);
  };

  const handleOpenModal = (food: Food) => {
    setSelectedFood(food);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFood(null);
  };

  const debouncedSearch = debounce((value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  }, 300);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const searchedFoods = searchTerm
    ? filteredFoods.filter((food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredFoods;

  // Pagination Logic
  const totalPages = Math.ceil(searchedFoods.length / itemsPerPage);
  const paginatedFoods = searchedFoods.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "pizza":
        return <FaPizzaSlice className="w-6 h-6 text-orange-500" />;
      case "burger":
        return <FaHamburger className="w-6 h-6 text-orange-500" />;
      case "ice cream":
        return <FaIceCream className="w-6 h-6 text-orange-500" />;
      case "coffee":
        return <FaCoffee className="w-6 h-6 text-orange-500" />;
      default:
        return <FaUtensils className="w-6 h-6 text-orange-500" />;
    }
  };

  return (
    <div className="container mx-auto px-4 grid grid-cols-12 gap-8 py-10 mt-24">
      {/* Sidebar */}
      <aside className="col-span-12 md:col-span-3 space-y-8">
        {/* Search */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Search Product
          </h3>
          <div className="flex rounded-md shadow-sm">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-l-md p-3 focus:ring-orange-500 focus:border-orange-500"
              onChange={handleSearch}
            />
            <button className="bg-orange-500 text-white px-4 rounded-r-md hover:bg-orange-600">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Category
          </h3>
          <div className="space-y-4">
            {categories.map((category) => (
              <div
                key={category}
                className={`flex items-center space-x-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 hover:bg-orange-200"
                }`}
                onClick={() => handleCategoryFilter(category)}
              >
                <div className="flex-shrink-0">{getCategoryIcon(category)}</div>
                <span className="text-lg font-medium">{category}</span>
              </div>
            ))}
            {selectedCategory && (
              <button
                onClick={handleClearCategoryFilter}
                className="mt-4 text-orange-500 underline hover:text-orange-600 flex items-center space-x-2"
              >
                <FaTimes className="w-4 h-4" />
                <span>Clear Category Filter</span>
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="col-span-12 md:col-span-9 mt-8 md:mt-0">
        {isLoading ? (
          <div className="text-center text-xl text-gray-700">
            Loading products...
          </div>
        ) : paginatedFoods.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {paginatedFoods.map((food) => (
              <div
                key={food._id}
                className="border border-gray-200 rounded-lg p-4 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg bg-white flex flex-col"
              >
                <div className="relative h-72 mb-4 overflow-hidden rounded-md">
                  {food.image?.asset?.url ? (
                    <Image
                      src={food.image.asset.url}
                      alt={food.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  ) : (
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                </div>
                <h4 className="font-semibold text-lg mb-2 text-gray-800">
                  {food.name}
                </h4>
                <p className="text-gray-600 mb-4 flex-1">{food.description}</p>
                <div className="mt-auto">
                  <p className="font-semibold text-xl text-orange-500 mb-2">
                    ${food.price.toFixed(2)}
                  </p>
                  <p className="text-gray-500 text-sm line-through mb-4">
                    ${food.originalPrice.toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleOpenModal(food)}
                    className="mt-2 bg-orange-500 text-white py-2 px-4 rounded-full w-full hover:bg-orange-600"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-xl text-gray-700">
            No products found.
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-full ${
                  currentPage === index + 1
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-orange-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </main>

      {/* Modal */}
      {isModalOpen && selectedFood && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white p-6 rounded-lg w-full max-w-5xl relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              aria-label="Close Modal"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
              <div className="relative w-full md:w-1/2 h-64 md:h-96 overflow-hidden rounded-md">
                {selectedFood.image?.asset?.url ? (
                  <Image
                    src={selectedFood.image.asset.url}
                    alt={selectedFood.name}
                    layout="fill"
                    objectFit="cover"
                  />
                ) : (
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
              </div>
              <div className="w-full md:w-1/2 md:pl-6">
                <h3 className="text-3xl font-semibold mb-3 text-gray-800">
                  {selectedFood.name}
                </h3>
                <p className="text-gray-600 mb-4 text-lg">
                  {selectedFood.description}
                </p>
                <div className="flex items-center mb-4">
                  <RatingStars rating={0} />
                  <span className="ml-2 text-gray-600">(0 Reviews)</span>
                </div>
                <p className="font-semibold text-2xl text-orange-500 mb-2">
                  ${selectedFood.price.toFixed(2)}
                </p>
                <p className="text-gray-500 text-sm line-through mb-4">
                  ${selectedFood.originalPrice.toFixed(2)}
                </p>
                <button
                  onClick={() => handleAddToCart(selectedFood)}
                  className="mt-2 bg-orange-500 text-white py-2 px-4 rounded-full w-full hover:bg-orange-600"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleAddToWishlist(selectedFood)}
                  className="mt-4 bg-red-600 text-white py-2 px-4 rounded-full w-full hover:bg-red-700"
                >
                  Add to Wishlist
                </button>
              </div>
            </div>

            <hr className="my-6" />

            <Reviews
              reviews={reviews.filter(
                (review) => review.foodId === selectedFood._id
              )}
            />

            <ReviewForm
              foodId={selectedFood._id}
              onSubmit={(newReview) => {
                setReviews((prevReviews) => [...prevReviews, newReview]);
              }}
            />
          </div>
        </div>
      )}

      <div className="w-screen h-60  mb-28 -ml-20 ">
        <StatsSection />
      </div>
    </div>
  );
};

export default ShopListPage;

