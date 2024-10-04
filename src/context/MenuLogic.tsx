import React, { useState } from 'react';
import { useCart } from './cartContext';

interface Product {
  name: string;
  image: string;
  description: string;
}

interface MenuLogicProps {
  title: string;
  products: Product[];
}

const MenuLogic: React.FC<MenuLogicProps> = ({ title, products }) => {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<number[]>(new Array(products.length).fill(1));

  const handleQuantityChange = (index: number, delta: number) => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = Math.max(1, newQuantities[index] + delta);
      return newQuantities;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center uppercase">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden min-h-[24rem] flex flex-col justify-between">
            <img src={product.image} alt={product.name} className="rounded-t-lg w-full object-cover h-48" />
            <div className="p-5 flex-grow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 uppe">{product.name}</h5>
              <p className="mb-4 font-normal text-gray-700 line-clamp-3">{product.description}</p>

              <div className="flex justify-center">
                <div className="relative flex items-center max-w-[8rem]">
                  <button
                    type="button"
                    onClick={() => handleQuantityChange(index, -1)}
                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:outline-none"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantities[index]}
                    readOnly
                    className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm w-14"
                  />
                  <button
                    type="button"
                    onClick={() => handleQuantityChange(index, 1)}
                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-r-lg p-3 h-11 focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                  onClick={() => addToCart(product.name, quantities[index])}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuLogic;
