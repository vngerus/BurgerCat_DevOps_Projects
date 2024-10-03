import React, { useState } from 'react';
import { anvorguesacat } from '../assets';

interface Burger {
    name: string;
    image: string;
    description: string;
}

const burgers: Burger[] = [
    { name: 'Big Miau', image: anvorguesacat, description: 'La clásica hamburguesa Big Mac con salsa especial.' },
    { name: 'Cuarto de Prrr', image: anvorguesacat, description: 'Hamburguesa con carne de res y queso cheddar.' },
];

const Burguer: React.FC = () => {
    const [quantities, setQuantities] = useState<number[]>(new Array(burgers.length).fill(1));

    const handleQuantityChange = (index: number, delta: number) => {
        setQuantities(prevQuantities => {
            const newQuantities = [...prevQuantities];
            newQuantities[index] = Math.max(1, newQuantities[index] + delta);
            return newQuantities;
        });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6">Anvorguesa Cat</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {burgers.map((burger, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={burger.image} alt={burger.name} className="rounded-t-lg w-full object-cover h-48" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{burger.name}</h5>
                            <p className="mb-4 font-normal text-gray-700">{burger.description}</p>

                            <div className="flex justify-center">
                                <div className="relative flex items-center max-w-[8rem]">
                                    <button
                                        type="button"
                                        onClick={() => handleQuantityChange(index, -1)}
                                        className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:outline-none"
                                    >
                                        <svg
                                            className="w-4 h-4 text-gray-900"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 2"
                                        >
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                        </svg>
                                    </button>
                                    <input
                                        type="text"
                                        value={quantities[index]}
                                        readOnly
                                        className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm w-14"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleQuantityChange(index, 1)}
                                        className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-r-lg p-3 h-11 focus:outline-none"
                                    >
                                        <svg
                                            className="w-4 h-4 text-gray-900"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 18"
                                        >
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Burguer;
