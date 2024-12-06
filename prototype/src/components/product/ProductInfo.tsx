import React from 'react';
import { Star, Check } from 'lucide-react';

export default function ProductInfo() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Premium Wireless Noise-Cancelling Headphones
        </h1>
        <p className="text-sm text-gray-500">by Brand Name</p>
      </div>

      {/* Rating */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <a href="#reviews" className="text-sm text-blue-600 hover:underline">
          4.2 out of 5 (1,234 ratings)
        </a>
      </div>

      {/* Prime Badge */}
      <div className="flex items-center space-x-2">
        <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Prime</div>
        <span className="text-sm text-gray-600">FREE delivery by tomorrow</span>
      </div>

      {/* Key Features */}
      <div className="space-y-2">
        <h2 className="font-semibold text-gray-900">Key Features:</h2>
        <ul className="space-y-1">
          {[
            'Active Noise Cancellation',
            '30-hour battery life',
            'Premium sound quality',
            'Comfortable fit'
          ].map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}