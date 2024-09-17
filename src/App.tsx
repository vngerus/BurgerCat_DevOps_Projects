import React from 'react';
import { Footer, Hero, Menu, Navbar, Orders, Sidebar } from './Components';

const App: React.FC = () => {
  return (
    <div className='w-full min-h-screen bg-gray-100'>
      <div className='max-w-[768px] mx-auto'>
        <Navbar />
        <Sidebar />
        <Hero />
        <Menu />
        <Orders />
        <Footer />
      </div>
    </div>
  );
};

export default App;
