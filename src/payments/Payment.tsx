import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const PaymentPage: React.FC = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handlePayment = async () => {
        if (!stripe || !elements) {
            return;
        }

        //Conectar con Back

    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Pagar</h1>
            <CardElement className="mb-4 p-2 border rounded" />
            <button
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                onClick={handlePayment}
                disabled={!stripe}
            >
                Procesar Pago
            </button>
        </div>
    );
};

export default PaymentPage;
