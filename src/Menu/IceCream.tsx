import React from 'react';
import MenuLogic from '../logic/MenuLogic';
import { icecream } from '../data';

const Icecream: React.FC = () => {
    return <MenuLogic title="Meowscream" products={icecream} />;
};

export default Icecream;
