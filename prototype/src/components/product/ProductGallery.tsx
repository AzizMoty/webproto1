import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const SAMPLE_IMAGES = [
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
  'https://images.unsplash.com/photo-1505740106531-4243f3831c78',
  'https://images.unsplash.com/photo-1505740106531-4243f3831c79',
];

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={SAMPLE_IMAGES[selectedImage]}
          alt="Product"
          className="w-full h-full object-cover"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white">
          <Maximize2 className="w-5 h-5" />
        </button>
        
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button 
            onClick={() => setSelectedImage(prev => prev > 0 ? prev - 1 : SAMPLE_IMAGES.length - 1)}
            className="p-2 bg-white/80 rounded-full hover:bg-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setSelectedImage(prev => (prev + 1) % SAMPLE_IMAGES.length)}
            className="p-2 bg-white/80 rounded-full hover:bg-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-6 gap-2">
        {SAMPLE_IMAGES.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square rounded-md overflow-hidden ${
              selectedImage === index ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <img src={image} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}