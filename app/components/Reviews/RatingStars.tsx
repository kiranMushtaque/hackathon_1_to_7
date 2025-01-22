import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const RatingStars: React.FC<{
  rating: number;
  setRating?: (rating: number) => void;
}> = ({ rating, setRating }) => {
  const handleSetRating = (newRating: number) => {
    if (setRating) setRating(newRating);
  };

  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }, (_, i) => (
        <button
          key={i}
          onClick={() => handleSetRating(i + 1)}
          disabled={!setRating}
          className="focus:outline-none"
        >
          {i < rating ? (
            <FaStar className="text-yellow-500 w-5 h-5" />
          ) : (
            <FaRegStar className="text-gray-300 w-5 h-5" />
          )}
        </button>
      ))}
    </div>
  );
};

export default RatingStars;
