import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Loader, Menu, MenuCategories, Navbar, Orders, Sidebar } from './components';
import { Home, OrderStatus } from './pages';
import PaymentPage from './payments/Payment';

const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const handleEnter = () => {
    setHasEntered(true);
  };

  return (
    <Router>
      <div className="w-full min-h-screen bg-gray-100">
        <div className="max-w-[768px] mx-auto">
          {!hasEntered ? (
            <Loader onEnter={handleEnter} />
          ) : (
            <>
              <Navbar />
              <MenuCategories />
              <Sidebar />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/ordenes" element={<Orders />} />
                <Route path="/pago" element={<PaymentPage />} />
                <Route path="/estado-de-orden" element={<OrderStatus />} />
              </Routes>

              <Footer />
            </>
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
