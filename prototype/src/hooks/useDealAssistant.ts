import { useState } from 'react';
import OpenAI from 'openai';
import { reportError } from '../utils/errorReporting';
import toast from 'react-hot-toast';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

interface DealRecommendation {
  productId: string;
  reason: string;
  confidence: number;
  suggestedPrice: number;
}

export function useDealAssistant() {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<DealRecommendation[]>([]);
  const [error, setError] = useState<string | null>(null);

  const analyzeUserQuery = async (query: string) => {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are a helpful shopping assistant specializing in finding the best deals. 
            Consider factors like:
            - Price comparisons across retailers
            - Current discounts and promotions
            - Product quality and reviews
            - Historical price data
            - Seasonal sales patterns
            Provide specific recommendations with clear reasoning.`
          },
          {
            role: "user",
            content: query
          }
        ],
        temperature: 0.7,
        max_tokens: 300
      });

      return response.choices[0]?.message?.content;
    } catch (error) {
      throw new Error('Failed to analyze query');
    }
  };

  const getRecommendations = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const analysis = await analyzeUserQuery(query);
      
      if (!analysis) {
        throw new Error('Failed to analyze query');
      }

      // For demonstration, create sample recommendations based on the analysis
      const sampleRecommendations: DealRecommendation[] = [
        {
          productId: "1",
          reason: analysis,
          confidence: 0.95,
          suggestedPrice: 299.99
        }
      ];

      setRecommendations(sampleRecommendations);
      
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to get recommendations');
      setError(error.message);
      reportError(error, {
        level: 'error',
        component: 'DealAssistant',
        query
      });
      toast.error('Failed to get recommendations. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    recommendations,
    error,
    getRecommendations
  };
}