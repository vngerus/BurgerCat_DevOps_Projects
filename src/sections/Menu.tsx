import React from 'react';
import Card from './Card';

const Menu: React.FC = () => {
    return (
        <div className="w-full p-4 bg-gray-100 min-h-screen">
            <div className="max-w-[768px] mx-auto grid gap-6 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Menu;
