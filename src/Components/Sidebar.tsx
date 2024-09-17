import React from 'react';
import { FaBars, FaHome, FaShoppingCart } from 'react-icons/fa';

const Sidebar: React.FC = () => {
   return (
      <aside
         className="fixed w-full inset-x-0 bottom-0 z-40 bg-gray-800 h-14"
         aria-label="Sidebar"
         style={{ maxWidth: '768px', left: '50%', transform: 'translateX(-50%)' }}
      >
         <div className="flex justify-around items-center h-full px-3 text-white">
            <a href="#" className="text-center">
               <FaHome className="w-6 h-6 mx-auto" />
               <span className="text-xs hidden">Inicio</span>
            </a>
            <a href="#" className="text-center">
               <FaBars className="w-6 h-6 mx-auto" />
               <span className="text-xs hidden">Menú</span>
            </a>
            <a href="#" className="text-center">
               <FaShoppingCart className="w-6 h-6 mx-auto" />
               <span className="text-xs hidden">E-commerce</span>
            </a>
         </div>
      </aside>
   );
};

export default Sidebar;
