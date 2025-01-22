"use client";

import React, { useState } from "react";
// import RatingStars from "../RatingStars";
import RatingStars from "./RatingStars";
import { useReviews } from "../../context/ReviewsContext";
import ReviewForm from "./ReviewForm";

const Reviews: React.FC<{ foodId: string }> = ({ foodId }) => {
  const { reviews, addReview } = useReviews();
  const foodReviews = reviews.filter((review) => review.foodId === foodId);

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-gray-50 p-6 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
      <div className="space-y-4">
        {foodReviews.length > 0 ? (
          foodReviews.map((review, idx) => (
            <div key={idx} className="border-b pb-4">
              <div className="flex items-center space-x-2">
                <RatingStars rating={review.rating} />
                <p className="text-sm text-gray-500">{review.username}</p>
              </div>
              <p className="mt-2 text-gray-700">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            No reviews yet. Be the first to review!
          </p>
        )}
      </div>
      <button
        onClick={() => setShowForm(true)}
        className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:ring focus:ring-orange-300"
      >
        Add a Review
      </button>
      {showForm && (
        <ReviewForm foodId={foodId} onClose={() => setShowForm(false)} />
      )}
    </div>
  );
};

export default Reviews;
