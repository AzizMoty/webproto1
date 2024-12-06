export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  category: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  dealEndsAt?: Date;
}

export interface User {
  id: string;
  email: string;
  wishlist: string[];
  searchHistory: string[];
  viewedProducts: string[];
}

export interface DealAlert {
  productId: string;
  targetPrice: number;
  userId: string;
}