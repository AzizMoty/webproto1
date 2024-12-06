import React from 'react';
import { Heart } from 'lucide-react';
import Badge from '../ui/Badge';

interface ProductImageProps {
  imageUrl: string;
  title: string;
  discount?: number;
  onWishlistClick?: () => void;
  isWishlisted?: boolean;
}

export default function ProductImage({ 
  imageUrl, 
  title, 
  discount,
  onWishlistClick,
  isWishlisted = false
}: ProductImageProps) {
  return (
    <div className="relative">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <button 
        onClick={onWishlistClick}
        className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-100"
      >
        <Heart 
          className={`h-5 w-5 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'}`}
        />
      </button>
      {discount && discount > 0 && (
        <div className="absolute top-2 left-2">
          <Badge variant="error" size="sm">{discount}% OFF</Badge>
        </div>
      )}
    </div>
  );
}