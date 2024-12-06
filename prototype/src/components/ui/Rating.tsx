import React from 'react';
import { Star } from 'lucide-react';
import { validateRating } from '../../utils/validation';

interface RatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
  count?: number;
}

export default function Rating({
  rating,
  size = 'md',
  showCount = false,
  count
}: RatingProps) {
  if (!validateRating(rating)) {
    console.warn('Invalid rating value:', rating);
    rating = 0;
  }

  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`${sizeClasses[size]} ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="ml-2 text-sm text-gray-600">
          ({count})
        </span>
      )}
    </div>
  );
}