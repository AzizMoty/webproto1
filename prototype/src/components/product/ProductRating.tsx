import React from 'react';
import { Star } from 'lucide-react';

interface ProductRatingProps {
  rating: number;
  reviewCount: number;
}

export default function ProductRating({ rating, reviewCount }: ProductRatingProps) {
  return (
    <div className="flex items-center mb-2">
      <div className="flex items-center text-yellow-400">
        <Star className="h-4 w-4 fill-current" />
        <span className="ml-1 text-sm text-gray-600">
          {rating} ({reviewCount})
        </span>
      </div>
    </div>
  );
}