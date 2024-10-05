import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase/firebaseConfig';
import { FaCheckCircle, FaTimesCircle, FaSpinner, FaClock } from 'react-icons/fa';
import { sadcat } from '../assets'; // Asegúrate de que la ruta a la imagen es correcta

interface Order {
    id: string;
    total: number;
    status: string;
    userId: string;
    preparationTime: number;
}

const OrderStatus: React.FC<{ userId: string }> = ({ userId }) => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const ordersRef = ref(db, 'orders');
        const unsubscribe = onValue(ordersRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const ordersData = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));

                const userOrders = ordersData.filter(order => order.userId === userId);
                setOrders(userOrders);
                setLoading(false);
            } else {
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, [userId]);

    useEffect(() => {
        if (orders.length > 0) {
            const preparingOrder = orders.find(order => order.status === 'preparing');
            if (preparingOrder) {
                let currentProgress = 0;
                const interval = setInterval(() => {
                    currentProgress += 100 / preparingOrder.preparationTime;
                    setProgress(currentProgress);
                    if (currentProgress >= 100) {
                        clearInterval(interval);
                        setProgress(100);
                    }
                }, 1000);
                return () => clearInterval(interval);
            }
        }
    }, [orders]);

    const getOrderStatus = (order: Order) => {
        switch (order.status) {
            case 'paid':
                return (
                    <span className="text-blue-500 flex items-center">
                        <FaClock className="mr-2" /> Pagado - En espera
                    </span>
                );
            case 'preparing':
                return (
                    <div>
                        <span className="text-yellow-500 flex items-center">
                            <FaSpinner className="mr-2 animate-spin" /> Preparando...
                        </span>
                        <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
                            <div
                                className="bg-yellow-500 h-2 rounded-full"
                                style={{ width: `${progress}%`, transition: 'width 1s' }}
                            />
                        </div>
                        <p className="text-sm mt-1">Tiempo estimado: {order.preparationTime} minutos</p>
                    </div>
                );
            case 'completed':
                return (
                    <span className="text-green-500 flex items-center">
                        <FaCheckCircle className="mr-2" /> Completado
                    </span>
                );
            case 'cancelled':
                return (
                    <span className="text-red-500 flex items-center">
                        <FaTimesCircle className="mr-2" /> Cancelado
                    </span>
                );
            default:
                return <span>Estado desconocido</span>;
        }
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-orange-200 p-4">
            <h1 className="text-2xl font-bold mb-4 text-center mt-12">Estado de tus Pedidos</h1>
            {loading ? (
                <div className="flex flex-col items-center justify-center">
                    <FaSpinner className="animate-spin text-4xl text-gray-500" />
                    <span className="ml-2 text-xl">Cargando pedidos...</span>
                </div>
            ) : orders.length > 0 ? (
                <ul className="space-y-4 w-full max-w-3xl">
                    {orders.map(order => (
                        <li key={order.id} className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-start transition-all">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Pedido #{order.id}</h3>
                                <p className="text-md mb-1">Total: ${order.total}</p>
                                <p className="text-md">Estado: {getOrderStatus(order)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <p className="text-center text-gray-500 mb-4">No hay pedidos.</p>
                    <img src={sadcat} alt="Gatito triste" className="w-48 h-48 object-contain" />
                </div>
            )}
        </div>
    );
};

export default OrderStatus;
