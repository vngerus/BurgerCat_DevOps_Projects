import React from 'react';
import { cookiecream, moshi, postre, tiramisu } from '../assets';
import MenuLogic from '../context/MenuLogic';

const desert = [
    { name: 'Meowcream', image: cookiecream, description: 'Helado de crema con trozos de galleta, perfecto para gatos golosos.' },
    { name: 'Meowchis', image: moshi, description: 'Bolas de mochi rellenas de helado, suaves y esponjosas, ideales para un gato curioso.' },
    { name: 'Smol Kitties', image: postre, description: 'Pequeñas tortitas en forma de gatitos, dulces y perfectas para compartir.' },
    { name: 'Nyansú', image: tiramisu, description: 'Una versión felina del clásico tiramisú, con capas de crema y galleta, ¡purrfectamente delicioso!' },
];

const Desert: React.FC = () => {
    return <MenuLogic title="Postremeow" products={desert} />;
};

export default Desert;
