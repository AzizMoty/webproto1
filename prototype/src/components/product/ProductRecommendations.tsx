import React from 'react';
import ProductCard from './ProductCard';

export default function ProductRecommendations() {
  const recommendations = [
    {
      id: '2',
      title: 'Premium Wireless Earbuds',
      description: 'True wireless earbuds with noise cancellation',
      price: 199.99,
      originalPrice: 249.99,
      category: 'Electronics',
      imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df',
      rating: 4.6,
      reviewCount: 892,
    },
    {
      id: '3',
      title: 'Professional Studio Headphones',
      description: 'High-fidelity studio monitoring headphones',
      price: 349.99,
      originalPrice: 399.99,
      category: 'Electronics',
      imageUrl: 'https://images.unsplash.com/photo-1599669454699-248893623440',
      rating: 4.8,
      reviewCount: 567,
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Recommended Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}