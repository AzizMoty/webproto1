import React from 'react';

export default function Filters() {
  return (
    <aside className="w-64 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-2">Price Range</h3>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="1000"
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>$0</span>
              <span>$1000</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Categories</h3>
          <div className="space-y-2">
            {['Electronics', 'Fashion', 'Home', 'Books', 'Sports'].map((category) => (
              <label key={category} className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Deal Type</h3>
          <div className="space-y-2">
            {['Daily Deals', 'Lightning Deals', 'Clearance'].map((type) => (
              <label key={type} className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Rating</h3>
          <div className="space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">{rating}+ Stars</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}