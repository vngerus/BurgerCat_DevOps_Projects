import React, { useState } from 'react';

interface Product {
    name: string;
    image: string;
    description: string;
    price: number;
    category: string;
}

interface MenuProps {
    products: Product[];
}

const groupByCategory = (products: Product[]) => {
    return products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {} as { [key: string]: Product[] });
};

const Menu: React.FC<MenuProps> = ({ products }) => {
    const [expandedProduct, setExpandedProduct] = useState<Product | null>(null);
    const groupedProducts = groupByCategory(products);

    const handleProductClick = (product: Product) => {
        if (expandedProduct?.name === product.name) {
            setExpandedProduct(null);
        } else {
            setExpandedProduct(product);
        }
    };

    return (
        <div className="w-full p-4 bg-gray-100 min-h-screen">
            {Object.keys(groupedProducts).map((category) => (
                <div key={category} className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 capitalize">{category}</h2>
                    <div className="flex overflow-x-auto space-x-6">
                        {groupedProducts[category].map((product, index) => (
                            <div
                                key={index}
                                className={`bg-white p-4 rounded shadow-md min-w-[150px] cursor-pointer ${expandedProduct?.name === product.name ? 'w-full' : 'w-48'
                                    }`}
                                onClick={() => handleProductClick(product)}
                            >
                                <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded" />
                                <h2 className="text-xl font-bold mt-2">{product.name}</h2>

                                {expandedProduct?.name === product.name && (
                                    <div className="mt-4">
                                        <p className="text-sm text-gray-600">{product.description}</p>
                                        <p className="text-lg font-bold mt-2">${product.price}</p>
                                        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
                                            Añadir al carrito
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Menu;
