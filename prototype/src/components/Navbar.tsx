import React from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const categories = [
    "Today's Deals",
    'Customer Service',
    'Registry',
    'Gift Cards',
    'Sell'
  ];

  return (
    <nav className="bg-[#232f3e] text-white">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-center h-10 px-4">
          <button className="flex items-center hover:bg-[#485769] px-2 h-full">
            <Menu className="w-4 h-4 mr-2" />
            All
          </button>
          
          <div className="flex items-center space-x-4 ml-4">
            {categories.map((category) => (
              <button
                key={category}
                className="hover:bg-[#485769] px-2 h-full text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}