import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../../firebase/firebaseConfig'; 

interface CartItem {
    name: string;
    quantity: number;
    image: string;
    price: number;
    category: string;
  }
  
  interface Order {
    id: number;
    items: CartItem[];
    preparationTime: number;
    status: string;
    timestamp: string;
    total: number;
    userId: string;
  }

const OrdersTable: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const ordersRef = ref(db, 'orders'); 

        onValue(ordersRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const ordersList = Object.keys(data).map((key) => ({
              id: key, 
              ...data[key],
            }));
            setOrders(ordersList);
            console.log(orders)
          }
        });
      }, []);
  

  return (
    
<div className="overflow-x-auto sm:rounded-lg flex justify-center">
    {/* <div className=''> */}

    <table className="m-5 w-96 text-sm text-left rtl:text-right text-gray-400">
        <thead className="text-xs text-gray-700 bg-orange-300">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                    <input checked id="orange-checkbox" type="checkbox" value="" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="orange-checkbox" className
                    ="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Orange</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Mesa
                </th>
                <th scope="col" className="px-6 py-3">
                    Orden
                </th>
                <th scope="col" className="px-6 py-3">
                    Tiempo preparacion
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
      <tr  className={`bg-white border-b hover:bg-orange-50 ${
        o.status === 'completed' ? 'bg-green-600' : ''
      }`} key={o.id}>
        <td className="w-4 p-4" >
          <div className="flex items-center">
            <input id={` id="orange-checkbox checkbox-table-search-${o.id}`} 
            type="checkbox" 
            className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            checked={o.status === 'completed'}
            readOnly/>
            <label htmlFor={`checkbox-table-search-${o.id}`} className="sr-only">checkbox</label>
          </div>
        </td>
        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-gray-800">
          {o.id}
        </th>
        <td className="px-6 py-4 font-medium whitespace-nowrap text-gray-800">
        {o.items.map((p: any, index: number) => (
          <div key={index}>
            <p>{p.name} - {p.quantity} </p>
          </div>
        ))}
      </td>
        <td className="px-6 py-4 font-medium whitespace-nowrap text-gray-800">
          {o.preparationTime}
        </td>
        <td className="px-6 py-4 font-medium whitespace-nowrap text-gray-800">
          {o.status}
        </td>
        <td className="px-6 py-4 flex">
          <a href="#" className="font-medium text-gray-500 dark:text-gray-500 hover:underline">
          <i className="bi bi-eye-fill"></i>
          </a>
          <a href="#" className="font-medium text-orange-300 dark:text-orange-300 hover:underline">
          <i className="bi bi-pencil-square"></i>
          </a>
          <a href="#" className="font-medium text-red-500 dark:text-red-500 hover:underline">
          <i className="bi bi-x-circle-fill"></i>
          </a>
        </td>
      </tr>
    );
  })}
</tbody>
    </table>
    {/* </div> */}
    {/* <div className='fixed left-96 bottom-11 ml-5 mr-5'>
    <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
                <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li>
            <li>
        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
        </ul>
    </nav>
    </div> */}
</div>

  )
}

export default OrdersTable