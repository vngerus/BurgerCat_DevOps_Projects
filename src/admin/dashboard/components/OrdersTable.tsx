import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { deleteIcon, editIcon, viewIcon } from '../../../assets/icons';
import { db } from '../../../firebase/firebaseConfig';

interface CartItem {
  name: string;
  quantity: number;
  image: string;
  price: number;
  category: string;
}

interface Order {
  id: string;
  items: CartItem[];
  preparationTime: number;
  status: string;
  timestamp: string;
  total: number;
  userId: string;
}

const OrdersTable: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [checkedOrders, setCheckedOrders] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const ordersRef = ref(db, 'orders');

    const unsubscribe = onValue(ordersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const ordersList = Object.keys(data).map((key) => ({
          id: key.toString(),
          ...data[key],
        }));
        setOrders(ordersList);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleCheckboxToggle = (id: string) => {
    setCheckedOrders(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <div className='flex justify-center'>
        <table className="m-5 w-full max-w-screen-md text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                  <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Mesa
              </th>
              <th scope="col" className="px-6 py-3">
                Orden
              </th>
              <th scope="col" className="px-6 py-3">
                Tiempo preparación
              </th>
              <th scope="col" className="px-6 py-3">
                Estado
              </th>
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o: Order) => {
              return (
                <tr className={`bg-white border-b hover:bg-gray-200 ${o.status === 'completed' ? 'bg-green-100' : ''}`} key={o.id}>
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input id={`checkbox-table-search-${o.id}`}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        checked={!!checkedOrders[o.id]}
                        onChange={() => handleCheckboxToggle(o.id)}
                      />
                      <label htmlFor={`checkbox-table-search-${o.id}`} className="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {o.id}
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {o.items.map((p: CartItem, index: number) => (
                      <div key={index}>
                        <p>{p.name} - {p.quantity}</p>
                      </div>
                    ))}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {o.preparationTime} min
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {o.status}
                  </td>
                  <td className="px-6 py-4 flex space-x-2">
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      <img src={viewIcon} alt="Ver" />
                    </a>
                    <a href="#" className="text-orange-500 hover:text-orange-700">
                      <img src={editIcon} alt="Editar" />
                    </a>
                    <a href="#" className="text-red-500 hover:text-red-700">
                      <img src={deleteIcon} alt="Eliminar" />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className='flex justify-center mt-4'>
        <nav className="flex items-center justify-center pt-4" aria-label="Table navigation">
          <span className="text-sm font-normal text-gray-500">Showing <span className="font-semibold text-gray-900">1-10</span> of <span className="font-semibold text-gray-900">1000</span></span>
          <ul className="inline-flex -space-x-px text-sm h-8 ml-4">
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default OrdersTable;
