// "use client";
// import React from 'react';

// import  { useState } from "react";
// // import RatingStars from "../RatingStars";
// import RatingStars from "./RatingStars";
// import { useReviews } from "../../context/ReviewsContext";
// import ReviewForm from "./ReviewForm";

// const Reviews: React.FC<{ foodId: string }> = ({ foodId }) => {
//   const { reviews, addReview } = useReviews();
//   const foodReviews = reviews.filter((review) => review.foodId === foodId);

//   const [showForm, setShowForm] = useState(false);

//   return (
//     <div className="bg-gray-50 p-6 rounded-md shadow-md">
//       <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
//       <div className="space-y-4">
//         {foodReviews.length > 0 ? (
//           foodReviews.map((review, idx) => (
//             <div key={idx} className="border-b pb-4">
//               <div className="flex items-center space-x-2">
//                 <RatingStars rating={review.rating} />
//                 <p className="text-sm text-gray-500">{review.username}</p>
//               </div>
//               <p className="mt-2 text-gray-700">{review.comment}</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">
//             No reviews yet. Be the first to review!
//           </p>
//         )}
//       </div>
//       <button
//         onClick={() => setShowForm(true)}
//         className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:ring focus:ring-orange-300"
//       >
//         Add a Review
//       </button>
//       {showForm && (
//         <ReviewForm foodId={foodId} onClose={() => setShowForm(false)} />
//       )}
//     </div>
//   );
// };

// export default Reviews;








// Reviews.tsx
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
