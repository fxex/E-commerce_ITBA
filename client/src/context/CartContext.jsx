import {createContext, useState, useEffect} from 'react'

export const CartContext = createContext(null) 

export const CartProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([]);

    const agregar_producto = (producto) =>{
        setCarrito(prevItems => {
      // 1. Buscar si el producto ya existe
      const existingItem = prevItems.find(item => item._id === producto._id);
      
      if (existingItem) {
        // 2. Si existe, incrementar quantity
        return prevItems.map(item =>
          item._id === producto._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      // 3. Si no existe, agregarlo con quantity 1
      return [...prevItems, { ...producto, quantity: 1 }];
    });
    }

    const eliminar_producto = (producto) =>{
        setCarrito(prevItems => prevItems.filter(item => item._id !== producto._id));
    }

    const vaciar_carrito = () =>{
        setCarrito([])
    }

    const total = carrito.reduce((sum, item) => sum + item.quantity, 0);

   const value = { carrito, total, agregar_producto, eliminar_producto, vaciar_carrito};

  return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
  )
}
