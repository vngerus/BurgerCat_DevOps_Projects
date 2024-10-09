import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Cart from './Cart';
import { CartProvider } from '../context/cartContext';
import { AuthProvider } from '../context/authContext';

describe('Cart Component', () => {
    test('Muestra el texto cuando no hay productos en el carrito', () => {
        render(
            <AuthProvider>
                <CartProvider>
                    <Cart />
                </CartProvider>
            </AuthProvider>
        );
        const noItemsMessage = screen.getByText(/No hay productos en el carrito./i);
        expect(noItemsMessage).toBeInTheDocument();
    });

    test('Renderiza un producto en el carrito', () => {
        const mockCartItem = {
            name: 'Big Miau',
            quantity: 2,
            price: 4990,
            image: 'image-url',
            category: 'hamburguesa',
        };

        render(
            <AuthProvider>
                <CartProvider>
                    <Cart />
                </CartProvider>
            </AuthProvider>
        );

        const itemName = screen.getByText(mockCartItem.name);
        expect(itemName).toBeInTheDocument();

        const itemQuantity = screen.getByText(mockCartItem.quantity.toString());
        expect(itemQuantity).toBeInTheDocument();
    });

    test('El botón de eliminar funciona correctamente', () => {
        render(
            <AuthProvider>
                <CartProvider>
                    <Cart />
                </CartProvider>
            </AuthProvider>
        );

        const removeButton = screen.getByText(/Eliminar/i);
        fireEvent.click(removeButton);
        expect(removeButton).not.toBeInTheDocument();
    });
});
