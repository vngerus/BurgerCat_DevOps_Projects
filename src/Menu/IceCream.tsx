import React from 'react';
import MenuLogic from '../context/MenuLogic';
import { icecream } from '../data';

const Icecream: React.FC = () => {
    return <MenuLogic title="Meowscream" products={icecream} />;
};

export default Icecream;
