import React, { useEffect, useState } from 'react';
import { logoburguer } from '../assets';

interface LoaderProps {
    onEnter: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onEnter }) => {
    const [tableNumber, setTableNumber] = useState<number>(1);

    useEffect(() => {
        const randomTable = Math.floor(Math.random() * 20) + 1;
        setTableNumber(randomTable);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400">
            <h2 className="text-4xl font-extrabold mb-4 text-white animate-bounce">🍔 Bienvenido 🐱</h2>
            <img src={logoburguer} alt="logo de burguercat" />
            <p className="mb-2 text-white text-xl">Estás en la mesa {tableNumber}</p>
            <button
                className="bg-orange-500 hover:bg-orange-600 text-gray-900 font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                onClick={onEnter}
            >
                Ingresar 🚀
            </button>
        </div>
    );
};

export default Loader;
