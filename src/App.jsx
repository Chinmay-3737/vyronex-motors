import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// --- FIXED: Changed 'components' to 'Components' (Capital C) ---
import SplashScreen from './Components/SplashScreen';

import HomePage from './pages/HomePage';
import CarSales from './pages/CarSales';
import CategoryPage from './pages/CategoryPage';
import CustomizationStudio from './pages/CustomizationStudio';
import ContactPage from './pages/ContactPage';
import Studio from './pages/Studio';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {loading && (
          <SplashScreen key="splash" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CarSales />} />
          <Route path="/categories/:id" element={<CategoryPage />} />
          <Route path="/customization" element={<CustomizationStudio />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/studio/:type" element={<Studio />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;