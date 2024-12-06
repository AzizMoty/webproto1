import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';

export default function ProductReviews() {
  const reviews = [
    {
      id: 1,
      author: 'John D.',
      rating: 5,
      date: '2024-02-15',
      title: 'Exceptional Sound Quality',
      content: 'These headphones are absolutely amazing. The noise cancellation is top-notch and the sound quality is incredible.',
      helpful: 124,
      verified: true,
    },
    {
      id: 2,
      author: 'Sarah M.',
      rating: 4,
      date: '2024-02-10',
      title: 'Great but Pricey',
      content: 'Excellent headphones with amazing features. The only downside is the premium price point.',
      helpful: 89,
      verified: true,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
        <button className="text-blue-600 hover:text-blue-700 font-semibold">
          Write a review
        </button>
      </div>

      {/* Reviews List */}
      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <h3 className="font-semibold text-gray-900">{review.title}</h3>
              </div>
              {review.verified && (
                <span className="text-sm text-green-600">Verified Purchase</span>
              )}
            </div>

            <div className="text-sm text-gray-500 mb-2">
              By {review.author} on {review.date}
            </div>

            <p className="text-gray-600 mb-4">{review.content}</p>

            <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
              <ThumbsUp className="w-4 h-4 mr-1" />
              Helpful ({review.helpful})
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}