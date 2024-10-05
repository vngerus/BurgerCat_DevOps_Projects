import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase/firebaseConfig';

interface Order {
    id: string;
    total: number;
    status: string;
    userId: string;
}

const OrderStatus: React.FC<{ userId: string }> = ({ userId }) => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const ordersRef = ref(db, 'orders');
        const unsubscribe = onValue(ordersRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const ordersData = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));

                const userOrders = ordersData.filter(order => {
                    console.log(order);
                    return order.userId === userId;
                });

                setOrders(userOrders);
            }
        });

        return () => unsubscribe();
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
