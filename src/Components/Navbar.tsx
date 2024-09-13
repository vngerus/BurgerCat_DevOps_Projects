import React from 'react';
import { logoburguer } from '../assets';

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4'>
                <img src={logoburguer} alt="logo" className='h-14 w-14' />
            </div>
        </nav>
    );
};

export default Navbar;
