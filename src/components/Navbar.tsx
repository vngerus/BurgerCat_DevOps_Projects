import React from 'react';
import { logoburguer } from '../assets';

const Navbar: React.FC = () => {
    return (
        <nav className='bg-orangeBG shadow-md w-full '>
            <div className='max-w-[768px] mx-auto flex items-center justify-center p-4'>
                <img src={logoburguer} alt="logo" className='h-12 w-12' />
            </div>
        </nav>
    );
};

export default Navbar;
