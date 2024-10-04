import React from 'react';
import MenuLogic from '../context/MenuLogic';
import { MisteryCat } from '../assets';

const misterybox = [
    {
        name: 'Caja Miaudivertida',
        image: MisteryCat,
        description: 'Una cajita feliz llena de sorpresas gatunas. ¡Incluye un juguete sorpresa para tu gatito que hará que maúlle de alegría!'
    },
];

const MisteryBox: React.FC = () => {
    return <MenuLogic title="Meowstery Box" products={misterybox} />;
};

export default MisteryBox;
