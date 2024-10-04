import React from 'react';
import MenuLogic from '../context/MenuLogic';
import { coke, fanta, inca, sprite, pepsi } from '../assets';

const soda = [
    { name: 'Coke Purrfection', image: coke, description: 'Refrescante Coca-Cola, ideal para cualquier momento.' },
    { name: 'Fanta Furrtástica', image: fanta, description: 'Fanta de naranja con un toque felino, refrescante y deliciosa.' },
    { name: 'Inca Kola Miauravillosa', image: inca, description: 'La icónica Inca Kola, refresco perfecto para acompañar tus comidas gatunas.' },
    { name: 'Sprite Miaulimonada', image: sprite, description: 'Sprite, una explosión de frescura con sabor a limón.' },
    { name: 'Pepsi Miauravillosa', image: pepsi, description: 'El sabor refrescante de Pepsi, para un gatito con estilo.' },
];

const Soda: React.FC = () => {
    return <MenuLogic title="Catseosas" products={soda} />;
};

export default Soda;
