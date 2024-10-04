import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, OrderStatus } from './pages';
import PaymentPage from './payments/Payment';
import { Burguer, Desert, IceCream, MisteryBox, Soda } from './Menu';
import { CartProvider } from './context/cartContext';
import { Cart, Loader, Menu, MenuCategories, Navbar, Orders, Sidebar } from './components';



const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const handleEnter = () => {
    setHasEntered(true);
  };

  return (
    <CartProvider>
      <Router>
        <div className="w-full min-h-screen">
          <div className="max-w-[768px] mx-auto bg-orange-200">
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
                  <Route path="/carrito" element={<Cart />} />
                  <Route path="/ordenes" element={<Orders />} />
                  <Route path="/estado-de-orden" element={<OrderStatus />} />
                  <Route path="/pago" element={<PaymentPage />} />
                  <Route path="/anvorguesa" element={<Burguer />} />
                  <Route path="/meowstres" element={<Desert />} />
                  <Route path="/catseosas" element={<Soda />} />
                  <Route path="/meowscream" element={<IceCream />} />
                  <Route path="/meowsterybox" element={<MisteryBox />} />
                </Routes>
              </>
            )}
          </div>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
