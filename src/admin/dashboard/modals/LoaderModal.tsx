import React from 'react';

interface LoaderModalProps {
    message?: string;
}

const LoaderModal: React.FC<LoaderModalProps> = ({ message = 'Eliminando pedido...' }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mb-4"></div>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default LoaderModal;
