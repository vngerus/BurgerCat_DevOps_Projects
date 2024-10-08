import React from 'react';
import MenuLogic from '../logic/MenuLogic';
import { misterybox } from '../data';

const MisteryBox: React.FC = () => {
    return <MenuLogic title="Meowstery Box" products={misterybox} />;
};

export default MisteryBox;
