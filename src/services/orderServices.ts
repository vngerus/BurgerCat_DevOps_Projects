import { getDatabase, ref, set } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/firebaseConfig';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

interface OrderItem {
    productName: string;
    quantity: number;
    price: number;
}

interface OrderData {
    userId: string;
    total: number;
    status: string;
    items: { [key: string]: OrderItem };
}

export const addOrderToDatabase = (orderId: string, orderData: OrderData) => {
    set(ref(database, 'orders/' + orderId), orderData)
        .then(() => {
            console.log('Pedido añadido exitosamente.');
        })
        .catch((error) => {
            console.error('Error al añadir el pedido:', error);
        });
};
