import React, { useEffect, useState } from 'react';
import { logoburguer } from '../assets';

interface LoaderProps {
    onEnter: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onEnter }) => {
    const [tableNumber, setTableNumber] = useState<number>(1);

    useEffect(() => {
        const savedTable = localStorage.getItem('tableNumber');
        const savedTimestamp = localStorage.getItem('tableTimestamp');
        const now = new Date().getTime();

        if (savedTable && savedTimestamp && now - parseInt(savedTimestamp) < 3600000) {
            setTableNumber(Number(savedTable));
        } else {
            const randomTable = Math.floor(Math.random() * 40) + 1;
            setTableNumber(randomTable);
            localStorage.setItem('tableNumber', String(randomTable));
            localStorage.setItem('tableTimestamp', String(now));
        }
    }, []);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-orangeBG via-orange-400 to-orangeBG">
            <h2 className="text-4xl font-extrabold mb-4 text-white animate-bounce">🍔 Bienvenido 🐱</h2>
            <img src={logoburguer} alt="logo de burguercat" />
            <p className="mb-2 text-white text-xl">Estás en la mesa {tableNumber}</p>
            <button
                className="bg-white hover:bg-orangeBG2 text-gray-900 font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                onClick={onEnter}
            >
                Ingresar 🚀
            </button>
        </div>
    );
};

export default Loader;
