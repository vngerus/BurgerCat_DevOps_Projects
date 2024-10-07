import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface CartItem {
    image?: string
    name: string;
    price: number;
    quantity: number;
    category: string;
}

interface Order {
    items: CartItem[];
    preparationTime: number;
    status: string;
}

const ViewOrder: FC<{ onClose: () => void; order: Order }> = ({ onClose, order }) => {
    return (
        <div id="crud-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="relative p-6 w-full max-w-lg max-h-full bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-between border-b pb-4 mb-4">
                    <h3 className="text-xl font-bold text-gray-800">Detalles de la Orden</h3>
                    <button
                        type="button"
                        className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                        onClick={onClose}
                    >
                        <AiOutlineClose className="w-6 h-6" />
                    </button>
                </div>

                <div className="space-y-6">
                    {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center border-b pb-4">
                            <div className="flex items-start space-x-4">
                                {item.image && (
                                    <div className="w-16 h-16 bg-gray-200 rounded-lg">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="object-cover w-full h-full rounded-lg"
                                        />
                                    </div>
                                )}
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                                    <p className="text-xs text-gray-500">Categoría: {item.category}</p>
                                    <p className="text-xs text-gray-500">Cantidad: {item.quantity}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-gray-900">${item.price.toFixed(2)}</p>
                                <p className="text-xs text-gray-500">
                                    Total: ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 border-t pt-4 space-y-2">
                    <p className="text-sm text-gray-900">
                        <strong>Tiempo de Preparación:</strong> {order.preparationTime} minutos
                    </p>
                    <p
                        className={`text-sm font-medium ${order.status === "completed"
                            ? "text-green-600"
                            : order.status === "pending"
                                ? "text-yellow-600"
                                : "text-red-600"
                            }`}
                    >
                        <strong>Estado:</strong> {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ViewOrder;
