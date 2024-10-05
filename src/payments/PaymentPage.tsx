import React, { useState, useEffect } from 'react';
import { getDatabase, ref, update } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import { FaCreditCard, FaCheckCircle } from 'react-icons/fa';

const PaymentPage: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [tableNumber, setTableNumber] = useState<string | null>(null);

    useEffect(() => {
        const savedTable = localStorage.getItem('tableNumber');
        if (savedTable) {
            setTableNumber(savedTable);
        }
    }, []);

    const handlePayment = async () => {
        if (!tableNumber) return;

        setLoading(true);
        try {
            const database = getDatabase();
            const orderRef = ref(database, 'orders/' + tableNumber);

            await update(orderRef, {
                status: 'completed',
            });

            setPaymentSuccess(true);
            setTimeout(() => {
                navigate('/estado-de-orden');
            }, 2000);
        } catch (error) {
            console.error('Error al procesar el pago:', error);
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen p-4 bg-orange-200">
            <h1 className="text-3xl font-bold mb-6">Procesar Pago</h1>

            <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full max-w-lg">
                <h2 className="text-2xl font-semibold mb-4">Resumen del Pedido</h2>

                {tableNumber && (
                    <p className="text-lg mb-2">Número de Mesa: <strong>{tableNumber}</strong></p>
                )}

                <button
                    onClick={handlePayment}
                    className={`w-full flex items-center justify-center py-3 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                >
                    {loading ? 'Procesando...' : 'Completar Pago'}
                    <FaCreditCard className="ml-2" />
                </button>
            </div>

            {paymentSuccess && (
                <div className="bg-green-100 text-green-800 p-4 rounded-lg mt-4 w-full max-w-lg text-center flex items-center justify-center">
                    <FaCheckCircle className="mr-2" />
                    <span>Pago completado con éxito, redirigiendo...</span>
                </div>
            )}
        </div>
    );
};

export default PaymentPage;
