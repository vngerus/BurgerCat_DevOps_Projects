import { ref, set } from 'firebase/database';
import { useAuth } from '../context/authContext';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cartContext';
import { db } from '../firebase/firebaseConfig';
import { calculatePreparationTime } from '../logic/TimeCalculator';

const Cart: React.FC = () => {
    const { cartItems, removeFromCart } = useCart();
    const { userId } = useAuth();
    const navigate = useNavigate();
    const [preparationTime, setPreparationTime] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const totalAmount = cartItems.reduce((acc, item) => acc + item.quantity * (item.price || 0), 0);
    useEffect(() => {
        setPreparationTime(calculatePreparationTime(cartItems));
    }, [cartItems]);

    const getTableNumber = (): string | null => {
        return localStorage.getItem('tableNumber');
    };

    const handleCheckout = async () => {
        const tableNumber = getTableNumber();
        if (!tableNumber) {
            console.error('No se encontró el número de mesa.');
            return;
        }

        if (!userId) {
            console.error('No se encontró el userId.');
            return;
        }

        setLoading(true);

        try {
            const orderRef = ref(db, 'orders/' + tableNumber);
            await set(orderRef, {
                items: cartItems,
                total: totalAmount,
                preparationTime: preparationTime,
                status: 'pending',
                timestamp: new Date().toISOString(),
                userId: userId
            });
            navigate('/pago');
        } catch (error) {
            console.error('Error al crear pedido: ', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 h-screen overflow-y-auto">
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

                    <div className="mt-6 text-right mb-14">
                        <p className="text-xl font-bold">Total: ${totalAmount}</p>
                        <p className="text-lg">Tiempo de preparación estimado: {preparationTime} minutos</p>
                        <button
                            className={`mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handleCheckout}
                            disabled={loading}
                        >
                            {loading ? 'Procesando...' : 'Proceder al Pago'}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
