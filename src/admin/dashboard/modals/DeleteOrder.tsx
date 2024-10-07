import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const DeleteOrder: FC<{ onDelete: () => void, onCancel: () => void }> = ({ onDelete, onCancel }) => {
    return (
        <div id="popup-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="relative p-4 w-full max-w-md">
                <div className="relative bg-white rounded-lg shadow">
                    <button
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                        onClick={onCancel}
                    >
                        <AiOutlineClose className="w-6 h-6" />
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-4 md:p-5 text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500">
                            ¿Estás seguro de que quieres eliminar esta orden?
                        </h3>
                        <button
                            type="button"
                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5"
                            onClick={onDelete}
                        >
                            Sí, confirmar
                        </button>
                        <button
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100"
                            onClick={onCancel}
                        >
                            No, cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteOrder;
