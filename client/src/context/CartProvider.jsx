import { useState } from 'react';
import { CartContext } from './CartContext'; // Importas el objeto anterior

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    // Lógica para cumplir con: "El estado del carrito debe ser gestionado globalmente" [cite: 65]
    const agregar_producto = (producto) => {
        setCarrito(prevItems => {
            const existingItem = prevItems.find(item => item._id === producto._id);
            if (existingItem) {
                return prevItems.map(item =>
                    item._id === producto._id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...producto, quantity: 1 }];
        });
    };

    const eliminar_producto = (producto) => {
        setCarrito(prevItems => prevItems.filter(item => item._id !== producto._id));
    };

    // Lógica para cumplir con: "Después de un pedido exitoso, el carrito debe vaciarse" [cite: 76]
    const vaciar_carrito = () => setCarrito([]);

    const value = { carrito, agregar_producto, eliminar_producto, vaciar_carrito };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};