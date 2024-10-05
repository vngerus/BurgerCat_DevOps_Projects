import React from 'react';
import MenuLogic from '../logic/MenuLogic';
import { burgers } from '../data';

const Burguer: React.FC = () => {
    return <MenuLogic title="Anvorguesas" products={burgers} />;
};

export default Burguer;
