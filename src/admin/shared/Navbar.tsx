import React, { useState } from 'react'
import Logo from '../../assets/imgs/heroburguer.png'

  
  const Navbar: React.FC = () => {
    const [user, setUser] = useState<string>('');

  return (
<nav className="bg-white border-gray-200 dark:bg-gray-900 W-100">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className='flex'>
      <img src={Logo} className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-5">BurgerCat</span>
      </div>
    
  <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src="" alt="user photo" />
      </button>
      <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
      </div>
  </div>
  </div>
</nav>
  )
}

export default Navbar