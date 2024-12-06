import React, { useState } from 'react';
import { Search, ShoppingCart, MapPin, Menu, Sparkles, LogOut } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useDealAssistant } from '../hooks/useDealAssistant';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

interface HeaderProps {
  onCartClick: () => void;
  onAuthClick: () => void;
  onSearch: (query: string) => void;
}

export default function Header({ onCartClick, onAuthClick, onSearch }: HeaderProps) {
  const { itemCount } = useCart();
  const { user, signOut } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const { getRecommendations, loading } = useDealAssistant();
  const [showAssistant, setShowAssistant] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      await getRecommendations(searchQuery);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Signed out successfully');
    } catch (error) {
      toast.error('Failed to sign out');
    }
  };

  return (
    <header className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-center h-16 px-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              DealFinder
            </span>
          </div>

          {/* Delivery Location */}
          <button className="flex items-center ml-4 hover:bg-white/10 rounded-lg p-2 transition-colors">
            <MapPin className="w-5 h-5 mr-1 text-blue-400" />
            <div className="text-sm">
              <div className="text-gray-300">Deliver to</div>
              <div className="font-bold">United States</div>
            </div>
          </button>

          {/* Search with AI Assistant */}
          <form onSubmit={handleSearch} className="flex flex-1 mx-4">
            <div className="flex w-full relative">
              <select className="px-2 rounded-l-lg border-r border-gray-300 bg-white/10 text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>All</option>
                <option>Deals</option>
                <option>Electronics</option>
                <option>Home</option>
              </select>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for deals..."
                className="flex-1 px-4 py-2 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={() => setShowAssistant(true)}
                className="px-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 flex items-center transition-colors border-r border-gray-600"
                title="Shop with AI"
              >
                <Sparkles className="w-5 h-5" />
                <span className="ml-2 font-medium">Shop with AI</span>
              </button>
              <button 
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 rounded-r-lg flex items-center transition-colors"
                disabled={loading}
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Search className="w-5 h-5" />
                )}
              </button>
            </div>
          </form>

          {/* Right Section */}
          <nav className="flex items-center space-x-4">
            {user ? (
              <>
                <div className="text-sm">
                  <div className="text-gray-300">Hello,</div>
                  <div className="font-bold">{user.email?.split('@')[0]}</div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="hover:bg-white/10 rounded-lg p-2 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </>
            ) : (
              <button
                onClick={onAuthClick}
                className="hover:bg-white/10 rounded-lg p-2 transition-colors"
              >
                <div className="text-sm">
                  <div className="text-gray-300">Hello, sign in</div>
                  <div className="font-bold">Account & Lists</div>
                </div>
              </button>
            )}

            <button className="hover:bg-white/10 rounded-lg p-2 transition-colors">
              <div className="text-sm">
                <div className="text-gray-300">Returns</div>
                <div className="font-bold">& Orders</div>
              </div>
            </button>

            <button 
              onClick={onCartClick}
              className="flex items-center hover:bg-white/10 rounded-lg p-2 transition-colors"
            >
              <div className="relative">
                <ShoppingCart className="w-8 h-8" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </div>
              <span className="font-bold ml-1">Cart</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}