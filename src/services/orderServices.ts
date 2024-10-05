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
const getTableNumber = (): string | null => {
    return localStorage.getItem('tableNumber');
};

export const addOrderToDatabase = (orderData: OrderData) => {
    const tableNumber = getTableNumber();
    if (!tableNumber) {
        console.error('No se ha encontrado el número de mesa.');
        return;
    }

    set(ref(database, 'orders/' + tableNumber), orderData)
        .then(() => {
            console.log('Pedido añadido exitosamente.');
        })
        .catch((error) => {
            console.error('Error al añadir el pedido:', error);
        });
};
