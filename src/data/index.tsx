import { burguerclasico, burguerdoblequeso, burgueritaliano, burguersimple, burguerteriyakie, coke, cookiecream, fanta, heladosimple, heladotriple, heladovaso, inca, kitties, MisteryCat, moshi, pepsi, postre, sprite, tiramisu } from '../assets';

export const burgers = [
    {
        name: 'Big Miau',
        image: burguerclasico,
        description: 'La clásica hamburguesa Big Miau, ahora con salsa especial para gatos exigentes. ¡Te hará ronronear de placer!',
        price: 4990,
        category: 'hamburguesa',
    },
    {
        name: 'Doble Purring',
        image: burguerdoblequeso,
        description: 'Una explosión de sabor con doble queso derretido y carne jugosa. ¡Un festín digno de un gato gourmet!',
        price: 5990
        ,
        category: 'hamburguesa',
    },
    {
        name: 'Meowtaliano',
        image: burgueritaliano,
        description: 'Hamburguesa estilo italiano con queso mozzarella y pesto. ¡Un sabor que te hará maullar!',
        price: 5690
        ,
        category: 'hamburguesa',
    },
    {
        name: 'Nyancillo',
        image: burguersimple,
        description: 'Para los que prefieren la simplicidad, una hamburguesa clásica pero deliciosa.',
        price: 3990,
        category: 'hamburguesa',
    },
    {
        name: 'Terimeow',
        image: burguerteriyakie,
        description: 'Sabor exótico de teriyaki en una hamburguesa que combina lo mejor del este y lo felino. ¡Una delicia para gatos aventureros!',
        price: 5790,
        category: 'hamburguesa',
    }
];


export const desert = [
    {
        name: 'Meowcream',
        image: cookiecream,
        description: 'Helado de crema con trozos de galleta, perfecto para gatos golosos.',
        price: 2990,
        category: 'postre',
    },
    {
        name: 'Meowchis',
        image: moshi,
        description: 'Bolas de mochi rellenas de helado, suaves y esponjosas, ideales para un gato curioso.',
        price: 3490,
        category: 'postre',
    },
    {
        name: 'Smol Kitties',
        image: postre,
        description: 'Pequeñas tortitas en forma de gatitos, dulces y perfectas para compartir.',
        price: 2790,
        category: 'postre',
    },
    {
        name: 'Nyansú',
        image: tiramisu,
        description: 'Una versión felina del clásico tiramisú, con capas de crema y galleta, ¡purrfectamente delicioso!',
        price: 3590,
        category: 'postre',
    },
];

export const icecream = [
    {
        name: 'Triple Miaugusto',
        image: heladotriple,
        description: 'Tres bolas de helado con sabor a chocolate, fresa y vainilla para una experiencia felina triple.',
        price: 3490,
        category: 'helado',
    },
    {
        name: 'Vaso de Nyanilla',
        image: heladovaso,
        description: 'Delicioso helado en vaso, ideal para disfrutar en cualquier momento.',
        price: 2290,
        category: 'helado',
    },
    {
        name: 'The Kittiescream',
        image: kitties,
        description: 'Mini helados en forma de gatitos, ideales para compartir o para un capricho.',
        price: 2990,
        category: 'helado',
    },
    {
        name: 'Purrcream',
        image: heladosimple,
        description: 'Helado de vainilla cremoso y refrescante, perfecto para gatos que adoran el dulce.',
        price: 1990,
        category: 'helado',
    },
];

export const misterybox = [
    {
        name: 'Caja Miaudivertida',
        image: MisteryCat,
        description: 'Una cajita feliz llena de sorpresas gatunas. ¡Incluye un juguete sorpresa para tu gatito que hará que maúlle de alegría!',
        price: 4090,
        category: 'caja',
    },
];

export const soda = [
    {
        name: 'Coke Purrfection',
        image: coke,
        description: 'Refrescante Coca-Cola, ideal para cualquier momento.',
        price: 1000,
        category: 'bebida',
    },
    {
        name: 'Fanta Furrtástica',
        image: fanta,
        description: 'Fanta de naranja con un toque felino, refrescante y deliciosa.',
        price: 1000,
        category: 'bebida',
    },
    {
        name: 'Inca Kola D. Cat',
        image: inca,
        description: 'La icónica Inca Kola, refresco perfecto para acompañar tus comidas gatunas.',
        price: 1000,
        category: 'bebida',
    },
    {
        name: 'Sprite Miaulimonada',
        image: sprite,
        description: 'Sprite, una explosión de frescura con sabor a limón.',
        price: 1000,
        category: 'bebida',
    },
    {
        name: 'Pepsi Miauravillosa',
        image: pepsi,
        description: 'El sabor refrescante de Pepsi, para un gatito con estilo.',
        price: 1000,
        category: 'bebida',
    },
];
