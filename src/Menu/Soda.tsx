import React from 'react';
import MenuLogic from '../logic/MenuLogic';
import { soda } from '../data';

const Soda: React.FC = () => {
    return <MenuLogic title="Catseosas" products={soda} />;
};

export default Soda;
