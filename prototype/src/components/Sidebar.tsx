import React from 'react';
import { Star } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-56 flex-shrink-0">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="font-bold text-lg mb-4">Filters</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-sm mb-2">Delivery</h3>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 rounded text-blue-600" />
              <span className="ml-2 text-sm">
                <span className="text-[#007185]">Get It by Tomorrow</span>
              </span>
            </label>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-2">Customer Review</h3>
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <button key={rating} className="flex items-center w-full hover:bg-gray-100 p-1 rounded">
                  <div className="flex text-yellow-400">
                    {Array(rating).fill(null).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-[#007185] ml-2">& Up</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-2">Price</h3>
            <div className="space-y-1">
              {['Under $25', '$25 to $50', '$50 to $100', '$100 to $200', '$200 & Above'].map((range) => (
                <button
                  key={range}
                  className="text-sm text-[#007185] hover:text-[#C7511F] hover:underline w-full text-left"
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-2">Deal Type</h3>
            <div className="space-y-2">
              {['Deal of the Day', 'Lightning Deal', 'Savings & Sales', 'Prime Early Access'].map((type) => (
                <label key={type} className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="ml-2 text-sm">{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}