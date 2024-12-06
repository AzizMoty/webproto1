import React, { useState } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DealGrid from './components/DealGrid';
import ProductPage from './components/product/ProductPage';
import CartDrawer from './components/cart/CartDrawer';
import DealAssistant from './components/DealAssistant';
import AuthModal from './components/auth/AuthModal';
import Footer from './components/Footer';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { AuthProvider } from './contexts/AuthContext';
import { useDealAssistant } from './hooks/useDealAssistant';
import { Toaster } from 'react-hot-toast';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [showAssistant, setShowAssistant] = useState(false);
  const { recommendations, loading, getRecommendations } = useDealAssistant();

  const handleSearch = async (query: string) => {
    setShowAssistant(true);
    await getRecommendations(query);
  };

  return (
    <ErrorBoundary>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <div className="min-h-screen bg-gray-50 flex flex-col">
              <Header 
                onCartClick={() => setIsCartOpen(true)}
                onAuthClick={() => setIsAuthOpen(true)}
                onSearch={handleSearch}
              />
              <Navbar />
              
              <main className="max-w-[1500px] mx-auto px-4 flex-grow">
                {selectedProductId ? (
                  <div className="py-4">
                    <button
                      onClick={() => setSelectedProductId(null)}
                      className="text-blue-600 hover:text-blue-700 font-medium mb-4"
                    >
                      ← Back to Deals
                    </button>
                    <ProductPage productId={selectedProductId} />
                  </div>
                ) : (
                  <div className="flex gap-4 py-4">
                    <Sidebar />
                    <div className="flex-1">
                      <DealGrid onProductClick={setSelectedProductId} />
                    </div>
                  </div>
                )}
              </main>

              <Footer />

              <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
              <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
              <DealAssistant
                isOpen={showAssistant}
                onClose={() => setShowAssistant(false)}
                recommendations={recommendations}
                loading={loading}
                onSearch={handleSearch}
              />
              <Toaster position="top-right" />
            </div>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;