import React, { useState } from 'react';
import { ShoppingCart, Heart, Share2 } from 'lucide-react';

export default function ProductPurchase() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="border rounded-lg p-6 space-y-6">
      {/* Price */}
      <div>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-gray-900">$299.99</span>
          <span className="ml-2 text-lg text-gray-500 line-through">$399.99</span>
          <span className="ml-2 text-lg text-green-600">Save 25%</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">FREE Returns</p>
      </div>

      {/* Stock Status */}
      <p className="text-green-600">In Stock</p>

      {/* Quantity Selector */}
      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <select
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-4 rounded-full font-semibold">
          Buy Now
        </button>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-full font-semibold flex items-center justify-center">
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add to Cart
        </button>
      </div>

      {/* Secondary Actions */}
      <div className="flex justify-between pt-4 border-t">
        <button className="flex items-center text-gray-600 hover:text-gray-900">
          <Heart className="w-5 h-5 mr-1" />
          Add to List
        </button>
        <button className="flex items-center text-gray-600 hover:text-gray-900">
          <Share2 className="w-5 h-5 mr-1" />
          Share
        </button>
      </div>
    </div>
  );
}