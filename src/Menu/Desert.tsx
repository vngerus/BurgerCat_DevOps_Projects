import React from 'react';
import MenuLogic from '../logic/MenuLogic';
import { desert } from '../data';

const Desert: React.FC = () => {
    return <MenuLogic title="Postremeow" products={desert} />;
};

export default Desert;
