import React from 'react';
import { FaBars, FaHome, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
   const navigate = useNavigate();

   return (
      <aside
         className="fixed w-full inset-x-0 bottom-0 z-40 bg-orangeBG h-14"
         aria-label="Sidebar"
         style={{ maxWidth: '768px', left: '50%', transform: 'translateX(-50%)' }}
      >
         <div className="flex justify-around items-center h-full px-3 text-white">
            <a onClick={() => navigate('/')} className="text-center cursor-pointer">
               <FaHome className="w-6 h-6 mx-auto" />
               <span className="text-xs hidden">Inicio</span>
            </a>
            <a onClick={() => navigate('/menu')} className="text-center cursor-pointer">
               <FaBars className="w-6 h-6 mx-auto" />
               <span className="text-xs hidden">Menú</span>
            </a>
            <a onClick={() => navigate('/carrito')} className="text-center cursor-pointer">
               <FaShoppingCart className="w-6 h-6 mx-auto" />
               <span className="text-xs hidden">Carrito</span>
            </a>
         </div>
      </aside>
   );
};

export default Sidebar;
