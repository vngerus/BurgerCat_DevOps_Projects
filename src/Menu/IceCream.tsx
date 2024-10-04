import React from 'react';
import MenuLogic from '../context/MenuLogic';
import { heladosimple, heladotriple, heladovaso, kitties } from '../assets';

const icecream = [
    { name: 'Purrcream', image: heladosimple, description: 'Helado de vainilla cremoso y refrescante, perfecto para gatos que adoran el dulce.' },
    { name: 'Triple Miaugusto', image: heladotriple, description: 'Tres bolas de helado con sabor a chocolate, fresa y vainilla para una experiencia felina triple.' },
    { name: 'Vaso de Nyanilla', image: heladovaso, description: 'Delicioso helado en vaso, ideal para disfrutar en cualquier momento.' },
    { name: 'Kittiescream', image: kitties, description: 'Mini helados en forma de gatitos, ideales para compartir o para un capricho.' },
];

const Icecream: React.FC = () => {
    return <MenuLogic title="Meowscream" products={icecream} />;
};

export default Icecream;
