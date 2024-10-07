import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, OrderStatus } from './pages';
import { burgers, desert, icecream, misterybox, soda } from './data';
import { CartProvider } from './context/cartContext';
import { Cart, Loader, Menu, MenuCategories, Navbar, Orders, Sidebar } from './components';
import { useAuth } from './context/authContext';
import Login from './admin/login/Login';
import Dashboard from './admin/dashboard/Dashboard';
import { Burguer, Desert, Soda, IceCream, MisteryBox } from './Menu';
import { PaymentPage } from './payments';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <MenuCategories />
      <Sidebar />
      {children}
    </>
  );
};

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="admin-layout">
      {children}
    </div>
  );
};

const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const { userId } = useAuth();

  const handleEnter = () => {
    setHasEntered(true);
  };

  const allProducts = [...burgers, ...desert, ...icecream, ...misterybox, ...soda];

  return (
    <CartProvider>
      <Router>
        <div className="w-full min-h-screen">
          <div className="max-w-[768px] mx-auto bg-orange-200">
            <Routes>
              <Route
                path="/admin"
                element={
                  <AdminLayout>
                    <Login />
                  </AdminLayout>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <AdminLayout>
                    <Dashboard />
                  </AdminLayout>
                }
              />

              {hasEntered ? (
                <>
                  <Route
                    path="/"
                    element={
                      <MainLayout>
                        <Home />
                      </MainLayout>
                    }
                  />
                  <Route
                    path="/menu"
                    element={
                      <MainLayout>
                        <Menu products={allProducts} />
                      </MainLayout>
                    }
                  />
                  <Route
                    path="/carrito"
                    element={
                      <MainLayout>
                        <Cart />
                      </MainLayout>
                    }
                  />
                  <Route
                    path="/ordenes"
                    element={
                      <MainLayout>
                        <Orders />
                      </MainLayout>
                    }
                  />
                  <Route
                    path="/estado-de-orden"
                    element={
                      <MainLayout>
                        <OrderStatus userId={userId} />
                      </MainLayout>
                    }
                  />
                  <Route
                    path="/pago"
                    element={
                      <MainLayout>
                        <PaymentPage />
                      </MainLayout>
                    }
                  />
                  <Route
                    path="/anvorguesa"
                    element={
                      <MainLayout>
                        <Burguer />
                      </MainLayout>
                    }
                  />
                  <Route
                    path="/meowstres"
                    element={
                      <MainLayout>
                        <Desert />
                      </MainLayout>
                    }
                  />
                  <Route
                    path="/catseosas"
                    element={
                      <MainLayout>
                        <Soda />
                      </MainLayout>
                    }
                  />
                  <Route
                    path="/meowscream"
                    element={
                      <MainLayout>
                        <IceCream />
                      </MainLayout>
                    }
                  />
                  <Route
                    path="/meowsterybox"
                    element={
                      <MainLayout>
                        <MisteryBox />
                      </MainLayout>
                    }
                  />
                </>
              ) : (
                <Route path="*" element={<Loader onEnter={handleEnter} />} />
              )}
            </Routes>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
