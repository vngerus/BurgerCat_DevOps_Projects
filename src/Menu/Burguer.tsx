import React from 'react';
import MenuLogic from '../context/MenuLogic';
import { burguerclasico, burguerdoblequeso, burgueritaliano, burguersimple, burguerteriyakie } from '../assets';

const burgers = [
    { name: 'Big Miau', image: burguerclasico, description: 'La clásica hamburguesa Big Miau, ahora con salsa especial para gatos exigentes. ¡Te hará ronronear de placer!' },
    { name: 'Doble Purring', image: burguerdoblequeso, description: 'Una explosión de sabor con doble queso derretido y carne jugosa. ¡Un festín digno de un gato gourmet!' },
    { name: 'Meowtaliano', image: burgueritaliano, description: 'Hamburguesa estilo italiano con queso mozzarella y pesto. ¡Un sabor que te hará maullar!' },
    { name: 'Nyancillo', image: burguersimple, description: 'Para los que prefieren la simplicidad, una hamburguesa clásica pero deliciosa.' },
    { name: 'Terimeow', image: burguerteriyakie, description: 'Sabor exótico de teriyaki en una hamburguesa que combina lo mejor del este y lo felino. ¡Una delicia para gatos aventureros!' },
];

const Burguer: React.FC = () => {
    return <MenuLogic title="Anvorguesa Cat" products={burgers} />;
};

export default Burguer;
