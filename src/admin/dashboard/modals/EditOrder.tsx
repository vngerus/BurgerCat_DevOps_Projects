import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface CartItem {
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

const EditOrder: FC<{ onClose: () => void; onSave: (data: Partial<Order>) => void; order: Order }> = ({ onClose, onSave, order }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const updatedData: Partial<Order> = {
            items: [{
                name: formData.get('name') as string,
                price: Number(formData.get('price')),
                quantity: Number(formData.get('quantity')),
                category: formData.get('category') as string,
            }],
            preparationTime: Number(formData.get('preparationTime')),
            status: formData.get('status') as string,
        };

        onSave(updatedData);
    };

    return (
        <div id="crud-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-lg font-semibold text-gray-900">Editar Orden</h3>
                        <button type="button" className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center" onClick={onClose}>
                            <AiOutlineClose className="w-6 h-6" />
                        </button>
                    </div>
                    <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                        <div className="grid gap-4 mb-4">
                            <div className="col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
                                <input type="text" name="name" id="name" defaultValue={order.items?.[0]?.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Precio</label>
                                <input type="number" name="price" id="price" defaultValue={order.items?.[0]?.price} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900">Cantidad</label>
                                <input type="number" name="quantity" id="quantity" defaultValue={order.items?.[0]?.quantity} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="preparationTime" className="block mb-2 text-sm font-medium text-gray-900">Tiempo de Preparación</label>
                                <input type="number" name="preparationTime" id="preparationTime" defaultValue={order.preparationTime} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                            </div>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5">Guardar Cambios</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditOrder;
