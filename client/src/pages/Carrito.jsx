import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { CartContext } from "../context/CartContext.jsx"; 
import ProductCard from "../Componentes/ProductCard.jsx";
import { URL } from "../utils/url";

function Carrito() {
  // Usamos los nombres exactos de tu CartContext: vaciar_carrito y eliminar_producto
  const { carrito, vaciar_carrito, eliminar_producto } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);

  const handleFinalizarCompra = async () => {
    // Verificación de usuario logueado [cite: 66]
    if (!currentUser) {
      alert("Debes iniciar sesión para comprar.");
      return;
    }

    const token = localStorage.getItem("authToken");

    // Mapeamos los datos para que coincidan con lo que espera tu controllerPedido.js
    const productosParaBackend = carrito.map(item => ({
      productoId: item._id, 
      cantidad: item.quantity // Usamos 'quantity' que es el nombre en tu CartContext
    }));

    try {
      const response = await fetch(`${URL}/pedidos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // Requisito: Enviar JWT 
        },
        body: JSON.stringify({
          productos: productosParaBackend
        }),
      });

      if (response.ok) {
        alert("¡Pedido realizado con éxito!");
        vaciar_carrito(); // Requisito: Limpiar carrito tras pedido exitoso [cite: 76]
      } else {
        const errorData = await response.json();
        alert(errorData.mensaje || "Error al procesar el pedido.");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

  const calcularTotalPrecio = () => {
    return carrito.reduce((acc, item) => acc + (item.precio * item.quantity), 0);
  };

  return (
    <div className="vista_productos">
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío 🛒</p>
      ) : (
        <>
          <div className="carrito_lista">
            {carrito.map((item) => (
              <div key={item._id} className="producto_card">
                <ProductCard
                  id={item._id}
                  nombre={item.nombre}
                  precio={item.precio}
                  img={item.imagenURL}
                  onRemove={() => eliminar_producto(item)}
                  carrito={true}
                />
                <p>Cantidad: {item.quantity}</p>
              </div>
            ))}
          </div>
          <div className="checkout_section">
            <h3>Total: ${calcularTotalPrecio()}</h3>
            <button 
              onClick={handleFinalizarCompra}
              disabled={!currentUser} 
              className="btn_finalizar"
            >
              {currentUser ? "Finalizar Compra" : "Inicia sesión para comprar"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;