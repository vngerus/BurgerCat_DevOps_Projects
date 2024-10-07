import React, { useEffect, useState } from 'react';
import { logoburguer } from '../../assets';

type NavbarProps = {
  login: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ login }) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const fetchedUser = "Bonnie Green";
    setUser(fetchedUser);
  }, []);

  return (
    login ? (
      <nav className="bg-orange-400 border-black w-full">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <img src={logoburguer} className="h-8" alt="BurgerCat Logo" />
          </div>

          <div className="flex-1 flex justify-center">
            <span className="text-2xl uppercase font-bold whitespace-nowrap">
              BurgerCat's Admin
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900">{user}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    ) : (
      <nav className="bg-white border-gray-200 w-full">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <img src={logoburguer} className="h-8" alt="BurgerCat Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ml-5">BurgerCat</span>
          </div>
        </div>
      </nav>
    )
  );
};

export default Navbar;
