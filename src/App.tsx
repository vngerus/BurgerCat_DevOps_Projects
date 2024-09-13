import React from 'react';
import { Footer, Hero, Menu, Navbar, Orders, Sidebar } from './Components';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Orders />
      <Sidebar />
      <Footer />
    </>
  );
};

export default App;