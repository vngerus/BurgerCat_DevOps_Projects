import React from 'react';
import { useCart } from '../context/cartContext';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
    const { cartItems, removeFromCart } = useCart();
    const navigate = useNavigate();

    const totalAmount = cartItems.reduce((acc, item) => acc + item.quantity * (item.price || 0), 0);

    const handleCheckout = () => {
        navigate('/pago');
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {cartItems.map((item, index) => (
                            <li key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md">
                                <div className="flex items-center">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.name}</h3>
                                        <p>Cantidad: {item.quantity}</p>
                                        <p>Precio: ${item.price}</p>
                                    </div>
                                </div>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                                    onClick={() => removeFromCart(item.name)}
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 text-right">
                        <p className="text-xl font-bold">Total: ${totalAmount}</p>
                        <button
                            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                            onClick={handleCheckout}
                        >
                            Proceder al Pago
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
