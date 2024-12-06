import React, { useState, useEffect } from 'react';
import { Sparkles, X, Mic, Send, StopCircle } from 'lucide-react';
import { useVoiceInput } from '../hooks/useVoiceInput';
import { formatPrice } from '../utils/formatters';

interface DealAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  recommendations: Array<{
    productId: string;
    reason: string;
    confidence: number;
    suggestedPrice?: number;
  }>;
  loading: boolean;
  onSearch: (query: string) => void;
}

export default function DealAssistant({
  isOpen,
  onClose,
  recommendations,
  loading,
  onSearch
}: DealAssistantProps) {
  const [query, setQuery] = useState('');
  const { 
    isListening, 
    transcript, 
    error: voiceError, 
    startListening, 
    stopListening,
    resetTranscript 
  } = useVoiceInput();

  useEffect(() => {
    if (transcript) {
      setQuery(transcript);
    }
  }, [transcript]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery('');
      resetTranscript();
    }
  };

  const handleVoiceToggle = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="flex items-center">
          <Sparkles className="w-5 h-5 mr-2" />
          <h3 className="font-semibold">AI Shopping Assistant</h3>
        </div>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-white/10 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 max-h-96 overflow-y-auto">
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : recommendations.length > 0 ? (
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-sm text-gray-600">
                    Confidence: {(rec.confidence * 100).toFixed(0)}%
                  </div>
                  {rec.suggestedPrice && (
                    <div className="text-sm font-medium text-green-600">
                      {formatPrice(rec.suggestedPrice)}
                    </div>
                  )}
                </div>
                <p className="text-gray-800">{rec.reason}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <Sparkles className="w-8 h-8 mx-auto mb-3 text-blue-500" />
            <p>Hi! I'm your AI shopping assistant.</p>
            <p className="text-sm mt-2">
              {isListening ? 'Listening... Speak your shopping query!' : 'Ask me about products or click the microphone to speak!'}
            </p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={isListening ? 'Listening...' : 'Ask about deals...'}
            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isListening}
          />
          <button
            type="button"
            onClick={handleVoiceToggle}
            className={`p-2 rounded-full transition-colors ${
              isListening 
                ? 'bg-red-500 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {isListening ? (
              <StopCircle className="w-5 h-5" />
            ) : (
              <Mic className="w-5 h-5" />
            )}
          </button>
          <button
            type="submit"
            disabled={!query.trim() || loading}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        {voiceError && (
          <p className="text-red-500 text-sm mt-2">{voiceError}</p>
        )}
      </form>
    </div>
  );
}