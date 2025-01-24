// 'use client'
// import React from 'react';





// import { useState } from "react";

// import RatingStars from "./RatingStars";

// import { useReviews } from "../../context/ReviewsContext";

// const ReviewForm: React.FC<{ foodId: string; onClose: () => void }> = ({
//   foodId,
//   onClose,
// }) => {
//   const { addReview } = useReviews();
//   const [username, setUsername] = useState("");
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!username || rating === 0 || !comment) return;

//     addReview({ username, rating, comment, foodId });
//     onClose();
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
//       <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
//       <input
//         type="text"
//         placeholder="Your Name"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         className="w-full mb-4 border-gray-300 rounded-md p-2 focus:ring focus:ring-orange-300"
//       />
//       <RatingStars rating={rating} setRating={setRating} />
//       <textarea
//         placeholder="Write your review..."
//         value={comment}
//         onChange={(e) => setComment(e.target.value)}
//         className="w-full h-24 mt-4 mb-4 border-gray-300 rounded-md p-2 focus:ring focus:ring-orange-300"
//       ></textarea>
//       <div className="flex space-x-2">
//         <button
//           type="submit"
//           className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:ring focus:ring-orange-300"
//         >
//           Submit
//         </button>
//         <button
//           type="button"
//           onClick={onClose}
//           className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 focus:ring focus:ring-gray-300"
//         >
//           Cancel
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ReviewForm;













// ReviewForm.tsx
import React, { useState } from "react";

interface ReviewFormProps {
  foodId: string;
  onSubmit: (review: { foodId: string; user: string; rating: number; comment: string }) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ foodId, onSubmit }) => {
  const [user, setUser] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user && rating && comment) {
      const newReview = { foodId, user, rating, comment };
      onSubmit(newReview);
      setUser("");
      setRating(0);
      setComment("");
    } else {
      alert("Please fill out all fields before submitting.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <h4 className="text-2xl font-semibold mb-4">Leave a Review</h4>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="user">
          Your Name
        </label>
        <input
          id="user"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="rating">
          Rating
        </label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full border border-gray-300 p-2 rounded-md"
        >
          <option value="0">Select a rating</option>
          <option value="1">1 - Poor</option>
          <option value="2">2 - Fair</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="comment">
          Comment
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="Write your review"
        />
      </div>
      <button
        type="submit"
        className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
