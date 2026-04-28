import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { CartItem } from './types';
import { PRODUCTS } from './constants/products';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Initial state with some items for demo if needed, but starting empty is cleaner
    // To match user screenshot, let's add one item
    const leggings = PRODUCTS.find(p => p.id === 'velocity-carbon-x1');
    if (leggings) {
      return [{ ...leggings, quantity: 1, selectedSize: 'M' }];
    }
    return [];
  });

  const handleAddToCart = (productId: string, size?: string) => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    setCart(prev => {
      const existing = prev.find(item => item.id === productId && item.selectedSize === size);
      if (existing) {
        return prev.map(item => 
          (item.id === productId && item.selectedSize === size) 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, selectedSize: size }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleRemove = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/checkout" element={<Checkout items={cart} />} />
          <Route 
            path="*" 
            element={
              <>
                <Header cartCount={cart.reduce((s, i) => s + i.quantity, 0)} />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/product/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
                  <Route path="/cart" element={<Cart items={cart} onUpdateQuantity={handleUpdateQuantity} onRemove={handleRemove} />} />
                  <Route path="/profile" element={<div className="p-20 text-center uppercase tracking-widest text-[#d4af37] font-display text-2xl italic">Sección de Perfil Próximamente</div>} />
                </Routes>
                <BottomNavWithVisibility />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

function BottomNavWithVisibility() {
  const { pathname } = useLocation();
  const hideOnPaths = ['/cart', '/checkout'];
  if (hideOnPaths.includes(pathname)) return null;
  return <BottomNav />;
}
