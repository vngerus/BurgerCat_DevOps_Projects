import React, { useState, useEffect } from 'react';
import { ref, onValue, remove, update } from 'firebase/database';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';
import { db } from '../../../firebase/firebaseConfig';
import { ViewOrder, EditOrder, DeleteOrder, LoaderModal } from '../modals';

interface CartItem {
  name: string;
  quantity: number;
  image?: string;
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
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const ordersPerPage = 5;

  const fetchOrders = () => {
    const ordersRef = ref(db, 'orders');
    onValue(ordersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const ordersList = Object.keys(data).map((key) => ({
          id: key.toString(),
          ...data[key],
        }));
        setOrders(ordersList);
      }
    });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDeleteOrder = (orderId: string) => {
    setIsLoading(true);
    const orderRef = ref(db, `orders/${orderId}`);
    remove(orderRef)
      .then(() => {
        setIsLoading(false);
        setShowDeleteModal(false);
        fetchOrders();
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Error al eliminar el pedido: ' + error.message);
      });
  };

  const handleSaveOrder = (updatedData: Partial<Order>) => {
    if (selectedOrder) {
      const orderRef = ref(db, `orders/${selectedOrder.id}`);
      update(orderRef, updatedData)
        .then(() => {
          setShowEditModal(false);
          fetchOrders();
        })
        .catch((error) => {
          console.error('Error al guardar el pedido: ' + error.message);
        });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'canceled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const calculateTotalPrice = (items: CartItem[]) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const [expandedOrders, setExpandedOrders] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (orderId: string) => {
    setExpandedOrders((prevState) => ({
      ...prevState,
      [orderId]: !prevState[orderId],
    }));
  };

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <h2 className="text-2xl mb-6 text-center">Gestor de Pedidos</h2>
      <div className="shadow-md sm:rounded-lg max-w-7xl mx-auto">
        <table className="w-full text-sm text-left text-gray-700 bg-white rounded-lg shadow-md">
          <thead className="text-xs uppercase bg-gray-200">
            <tr>
              <th scope="col" className="p-4">Mesa</th>
              <th scope="col" className="px-6 py-3">Orden</th>
              <th scope="col" className="px-6 py-3">Tiempo de Preparación</th>
              <th scope="col" className="px-6 py-3">Estado</th>
              <th scope="col" className="px-6 py-3">Precio Total</th>
              <th scope="col" className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((o: Order) => (
              <tr key={o.id} className={`bg-white border-b hover:bg-gray-50 ${getStatusColor(o.status)}`}>
                <td className="px-6 py-4">{o.id}</td>
                <td className="px-6 py-4">
                  {o.items.slice(0, expandedOrders[o.id] ? o.items.length : 3).map((p, index) => (
                    <div key={index} className="text-sm flex justify-between items-center mb-2 space-y-2">
                      <div className="flex items-center space-x-4">
                        {p.image && (
                          <img src={p.image} alt={p.name} className="w-10 h-10 rounded-full" />
                        )}
                        <div>
                          <p>{p.name}</p>
                          <p className="text-gray-500 text-xs">Cantidad: {p.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {o.items.length > 3 && (
                    <button
                      onClick={() => toggleExpand(o.id)}
                      className="text-blue-500 text-xs underline mt-2"
                    >
                      {expandedOrders[o.id] ? 'Ver menos' : `Ver más (${o.items.length - 3} más)`}
                    </button>
                  )}
                </td>
                <td className="px-6 py-4">{o.preparationTime} min</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(o.status)}`}>
                    {o.status.charAt(0).toUpperCase() + o.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">${calculateTotalPrice(o.items).toFixed(2)}</td>
                <td className="px-6 py-4 flex space-x-2 justify-center">
                  <button className="text-gray-500 hover:text-blue-500" onClick={() => { setSelectedOrder(o); setShowViewModal(true); }}>
                    <AiOutlineEye size={20} />
                  </button>
                  <button className="text-gray-500 hover:text-orange-500" onClick={() => { setSelectedOrder(o); setShowEditModal(true); }}>
                    <AiOutlineEdit size={20} />
                  </button>
                  <button className="text-gray-500 hover:text-red-500" onClick={() => { setSelectedOrder(o); setShowDeleteModal(true); }}>
                    <AiOutlineDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          <nav className="flex items-center justify-center pt-4" aria-label="Table navigation">
            <span className="text-sm font-normal text-gray-500">
              Mostrando {indexOfFirstOrder + 1} - {Math.min(indexOfLastOrder, orders.length)} de {orders.length}
            </span>
            <ul className="inline-flex -space-x-px text-sm h-8 ml-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index}>
                  <a
                    href="#"
                    onClick={() => paginate(index + 1)}
                    className={`flex items-center justify-center px-3 h-8 ${currentPage === index + 1
                      ? 'text-blue-600 bg-blue-50 border-blue-300'
                      : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                      }`}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {showViewModal && selectedOrder && (
        <ViewOrder onClose={() => setShowViewModal(false)} order={selectedOrder} />
      )}

      {showEditModal && selectedOrder && (
        <EditOrder
          onClose={() => setShowEditModal(false)}
          onSave={(updatedData) => handleSaveOrder(updatedData)}
          order={selectedOrder}
        />
      )}

      {showDeleteModal && selectedOrder && (
        <DeleteOrder
          onDelete={() => handleDeleteOrder(selectedOrder.id)}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}

      {isLoading && <LoaderModal />}
    </div>
  );
};

export default OrdersTable;