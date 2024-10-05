import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/firebaseConfig';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

interface Order {
    id: string;
    total: number;
    status: string;
    userId: string;
}

const OrderStatus: React.FC<{ userId: string }> = ({ userId }) => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const ordersRef = ref(database, 'orders');
        onValue(ordersRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const ordersData = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                const userOrders = ordersData.filter(order => order.userId === userId);
                setOrders(userOrders);
            }
        });
    }, [userId]);

    return (
        <div>
            <h1>Estado de tus Pedidos</h1>
            <ul>
                {orders.length > 0 ? (
                    orders.map(order => (
                        <li key={order.id}>
                            Pedido #{order.id}: {order.status} - Total: ${order.total}
                        </li>
                    ))
                ) : (
                    <p>No hay pedidos.</p>
                )}
            </ul>
        </div>
    );
};

export default OrderStatus;
