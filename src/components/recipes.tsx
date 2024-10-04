import React, { useState, useEffect } from 'react';

interface Recipe {
    _id: string;
    name: string;
    ingredientes: string[];
}

const Recipes: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('http://54.205.124.94/recipes');
                if (!response.ok) {
                    throw new Error('Error al cargar las recetas');
                }
                const data: Recipe[] = await response.json();
                setRecipes(data);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    if (loading) return <div className="text-center text-lg">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Recipes</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {recipes.map(recipe => (
                    <li key={recipe._id} className="bg-white p-4 shadow-md rounded-lg">
                        <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
                        <p className="text-gray-700">
                            <span className="font-bold">Ingredients:</span> {recipe.ingredientes.join(', ')}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Recipes;
