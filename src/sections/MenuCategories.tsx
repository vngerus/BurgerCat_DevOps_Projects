import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
    { name: 'Anvorguesas', icon: '🍔', route: '/anvorguesa' },
    { name: 'Catseosas', icon: '🥤', route: '/catseosas' },
    { name: 'Postremeow', icon: '🍰', route: '/meowstres' },
    { name: 'Meowscream', icon: '🍦', route: '/meowscream' },
    { name: 'Meowsterybox', icon: '🙀', route: '/meowsterybox' },
];

const MenuCategories: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('Anvorguesas');
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName: string, route: string) => {
        setSelectedCategory(categoryName);
        navigate(route);
    };

    return (
        <div className="flex justify-center items-center flex-col mt-8 overflow-hidden">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">¡Revisa nuestro menú!</h2>
            <div className="flex justify-center space-x-4 overflow-x-auto max-w-4xl">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        onClick={() => handleCategoryClick(category.name, category.route)}
                        className={`flex flex-col items-center p-4 sm:p-6 rounded-lg shadow-md sm:shadow-lg w-24 sm:w-32 cursor-pointer transition-all ${selectedCategory === category.name
                            ? 'bg-orangeBG orangeBG2'
                            : 'bg-white text-gray-800'
                            } hover:bg-orangeBG2 hover:text-white`}
                    >
                        <div className="text-3xl sm:text-4xl mb-2">{category.icon}</div>
                        <span className="text-sm sm:text-lg font-medium text-center">{category.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuCategories;
