
'use client'

import React, { createContext, useContext, useState } from "react";

interface Review {
  foodId: string;
  username: string;
  rating: number;
  comment: string;
}

interface ReviewsContextType {
  reviews: Review[];
  addReview: (review: Review) => void;
}

const ReviewsContext = createContext<ReviewsContextType | undefined>(undefined);

export const ReviewsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const addReview = (review: Review) => {
    setReviews((prev) => [...prev, review]);
  };

  return (
    <ReviewsContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewsContext.Provider>
  );
};

export const useReviews = () => {
  const context = useContext(ReviewsContext);
  if (!context)
    throw new Error("useReviews must be used within a ReviewsProvider");
  return context;
};
