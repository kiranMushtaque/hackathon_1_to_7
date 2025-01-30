import React from "react";
import RatingStars from "./RatingStars";

interface Review {
  foodId: string;
  user: string;
  rating: number;
  comment: string;
}

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div>
      <h4 className="text-2xl font-semibold mb-4">Reviews</h4>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="mb-4">
            <p className="font-bold text-gray-800">{review.user}</p>
            <RatingStars rating={review.rating} />
            <p className="text-gray-600">{review.comment}</p>
            <hr className="my-4" />
          </div>
        ))
      ) : (
        <p className="text-gray-600">No reviews yet. Be the first to review!</p>
      )}
    </div>
  );
};

export default Reviews;









