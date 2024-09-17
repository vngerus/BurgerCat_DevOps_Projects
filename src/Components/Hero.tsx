import React from 'react';
import { HeroBurguer } from '../assets';

const Hero: React.FC = () => {
    return (
        <div className="max-w-[768px] mx-auto p-4 relative">
            <div className="absolute top-10 left-0 right-0 z-10 text-center">
                <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-200'>
                    ¡Meownoce <span className='text-orange-500'>Las Mejores</span>
                </h1>
            </div>
            <img className='w-full h-auto max-h-[500px] object-cover' src={HeroBurguer} alt="BurgerCat" />
            <div className="absolute bottom-10 left-0 right-0 z-10 text-center">
                <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-200'>
                    <span className='text-orange-500'>BurguerCat's</span> del país!
                </h1>
            </div>
        </div>
    );
};

export default Hero;
