import React from 'react';
import ProductCard from './product/ProductCard';
import { Product } from '../types';

const DEAL_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Sony WH-1000XM4 Wireless Noise-Cancelling Headphones',
    description: 'Industry-leading noise cancellation with Dual Noise Sensor technology',
    price: 248.00,
    originalPrice: 349.99,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    rating: 4.8,
    reviewCount: 2547,
    dealEndsAt: new Date('2024-03-10')
  },
  {
    id: '2',
    title: 'Samsung 65" QLED 4K Smart TV QN65Q80C',
    description: 'Quantum HDR 12X, Object Tracking Sound+',
    price: 897.99,
    originalPrice: 1499.99,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1593784991095-a205069470b6',
    rating: 4.7,
    reviewCount: 1823
  },
  {
    id: '3',
    title: 'Dyson V15 Detect Cordless Vacuum',
    description: 'Laser dust detection and intelligent power optimization',
    price: 499.99,
    originalPrice: 749.99,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1558317374-067fb5f30001',
    rating: 4.9,
    reviewCount: 1256
  },
  {
    id: '4',
    title: 'Apple MacBook Air M2',
    description: 'Apple M2 chip, 13.6" Liquid Retina display',
    price: 949.00,
    originalPrice: 1199.00,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    rating: 4.9,
    reviewCount: 3421
  },
  {
    id: '5',
    title: 'Ninja Foodi 9-in-1 Deluxe XL Cooker',
    description: 'Pressure cooker, air fryer, and more',
    price: 149.99,
    originalPrice: 279.99,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1585515320310-259814833e62',
    rating: 4.7,
    reviewCount: 892
  },
  {
    id: '6',
    title: 'Bose QuietComfort Earbuds II',
    description: 'Wireless noise cancelling earbuds',
    price: 199.00,
    originalPrice: 299.00,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df',
    rating: 4.6,
    reviewCount: 754
  },
  {
    id: '7',
    title: 'KitchenAid Professional 5qt Mixer',
    description: 'Professional series stand mixer',
    price: 279.99,
    originalPrice: 449.99,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48',
    rating: 4.8,
    reviewCount: 2156
  },
  {
    id: '8',
    title: 'Samsung Galaxy S24 Ultra',
    description: 'Latest flagship smartphone with AI features',
    price: 999.99,
    originalPrice: 1299.99,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c',
    rating: 4.7,
    reviewCount: 1432
  },
  {
    id: '9',
    title: 'LG 27" UltraGear Gaming Monitor',
    description: '1ms response time, 165Hz refresh rate',
    price: 249.99,
    originalPrice: 399.99,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf',
    rating: 4.6,
    reviewCount: 892
  },
  {
    id: '10',
    title: 'Breville Barista Express',
    description: 'Semi-automatic espresso machine',
    price: 599.99,
    originalPrice: 749.99,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1587516053309-bae3d3b6a0f3',
    rating: 4.8,
    reviewCount: 1678
  },
  {
    id: '11',
    title: 'iRobot Roomba j7+',
    description: 'Self-emptying robot vacuum',
    price: 599.00,
    originalPrice: 799.99,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1563163447-12c1ed6cbd46',
    rating: 4.5,
    reviewCount: 923
  },
  {
    id: '12',
    title: 'Philips Hue Starter Kit',
    description: 'Smart LED lighting system',
    price: 129.99,
    originalPrice: 199.99,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8',
    rating: 4.6,
    reviewCount: 745
  },
  {
    id: '13',
    title: 'DJI Mini 3 Pro Drone',
    description: 'Lightweight drone with 4K camera',
    price: 669.00,
    originalPrice: 859.00,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f',
    rating: 4.7,
    reviewCount: 534
  },
  {
    id: '14',
    title: 'Theragun Elite',
    description: 'Premium percussion massage device',
    price: 299.00,
    originalPrice: 399.00,
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1662813930031-932938f6f618',
    rating: 4.8,
    reviewCount: 892
  },
  {
    id: '15',
    title: 'Weber Genesis Smart Grill',
    description: 'Smart gas grill with WiFi connectivity',
    price: 899.00,
    originalPrice: 1299.00,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
    rating: 4.7,
    reviewCount: 456
  }
];

interface DealGridProps {
  onProductClick: (productId: string) => void;
}

export default function DealGrid({ onProductClick }: DealGridProps) {
  // Sort products by discount percentage (highest to lowest)
  const sortedProducts = [...DEAL_PRODUCTS].sort((a, b) => {
    const discountA = ((a.originalPrice - a.price) / a.originalPrice) * 100;
    const discountB = ((b.originalPrice - b.price) / b.originalPrice) * 100;
    return discountB - discountA;
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Top Deals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            onClick={() => onProductClick(product.id)}
          />
        ))}
      </div>
    </div>
  );
}