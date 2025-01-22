import React, { useState } from "react";

import RatingStars from "./RatingStars";

import { useReviews } from "../../context/ReviewsContext";

const ReviewForm: React.FC<{ foodId: string; onClose: () => void }> = ({
  foodId,
  onClose,
}) => {
  const { addReview } = useReviews();
  const [username, setUsername] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || rating === 0 || !comment) return;

    addReview({ username, rating, comment, foodId });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full mb-4 border-gray-300 rounded-md p-2 focus:ring focus:ring-orange-300"
      />
      <RatingStars rating={rating} setRating={setRating} />
      <textarea
        placeholder="Write your review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full h-24 mt-4 mb-4 border-gray-300 rounded-md p-2 focus:ring focus:ring-orange-300"
      ></textarea>
      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:ring focus:ring-orange-300"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 focus:ring focus:ring-gray-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
