'use client';

import { Star } from 'lucide-react';

export function StarRating({ rating, totalReviews, size = "md" }) {
  const starSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${starSizes[size]} ${
              star <= rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
            }`}
          />
        ))}
      </div>
      {totalReviews !== undefined && (
        <span className={`${textSizes[size]} text-muted-foreground`}>
          ({totalReviews} reviews)
        </span>
      )}
    </div>
  );
}
