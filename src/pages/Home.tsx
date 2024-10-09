import React from 'react';
import { promo1 } from '../assets';

const Home: React.FC = () => {
    return (
        <div className="bg-orange-200 p-6">
            <div className="text-center mb-6">
                <h1 className="text-5xl font-bold text-red-600">Promoción Especial 🍔</h1>
                <p className="text-lg text-orange-700">La mejor calidad, solo en Burger Cat</p>
                <img src={promo1} alt="Promo Burger" className="my-6 rounded-lg shadow-md" />
            </div>

            <div className="my-8 mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-2">¡La Clásica de siempre por $4.990!</h2>
                <div className="bg-red-500 text-white p-6 rounded-lg shadow-md text-center">
                    <p className="text-lg font-medium ">Sólo por tiempo limitado. ¡Disfrútala hoy!</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
