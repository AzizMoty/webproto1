import React from 'react';
import { Product } from '../../types';
import Card from '../ui/Card';
import ProductImage from './ProductImage';
import ProductPrice from './ProductPrice';
import ProductRating from './ProductRating';
import { formatDiscount } from '../../utils/formatters';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import Button from '../ui/Button';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();
  const discount = formatDiscount(product.originalPrice, product.price);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, 1);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleItem(product);
  };

  return (
    <Card className="cursor-pointer" onClick={onClick}>
      <ProductImage
        imageUrl={product.imageUrl}
        title={product.title}
        discount={discount}
        onWishlistClick={handleWishlistClick}
        isWishlisted={isInWishlist(product.id)}
      />
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.title}
        </h3>
        
        <ProductRating rating={product.rating} reviewCount={product.reviewCount} />
        <ProductPrice price={product.price} originalPrice={product.originalPrice} />
        
        {product.dealEndsAt && (
          <div className="mt-2 text-sm text-red-600">
            Deal ends in {/* Add countdown timer component here */}
          </div>
        )}

        <Button
          variant="primary"
          className="w-full mt-4"
          onClick={handleAddToCart}
          icon={ShoppingCart}
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
}