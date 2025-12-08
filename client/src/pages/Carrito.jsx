import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { CartContext } from "../context/CartContext.jsx";
import { URL } from "../utils/url";
import "../styles/carrito.css";

function Carrito() {
  // Consolidamos el uso de CartContext para la gestión global
  const { carrito, vaciar_carrito, eliminar_producto } =
    useContext(CartContext);
  const { currentUser } = useContext(AuthContext);

  const handleFinalizarCompra = async () => {
    // 1. Verificación de seguridad: solo usuarios logueados pueden comprar [cite: 66]
    if (!currentUser) {
      alert("Debes iniciar sesión para comprar.");
      return;
    }

    const token = localStorage.getItem("authToken");

    // 2. Mapeo de datos para el backend (formato requerido por el controlador)
    const productosParaBackend = carrito.map((item) => ({
      productoId: item._id,
      quantity: item.quantity,
    }));

    try {
      // 3. Petición protegida con JWT [cite: 67, 95]
      const response = await fetch(`${URL}/pedidos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productos: productosParaBackend,
        }),
      });

      if (response.ok) {
        alert("¡Pedido realizado con éxito!");
        // 4. Requisito funcional: Vaciar carrito tras éxito
        vaciar_carrito();
      } else {
        const errorData = await response.json();
        alert(errorData.mensaje || "Error al procesar el pedido.");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

  const calcularTotalPrecio = () => {
    return carrito.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  };

  return (
    <div className="vista_productos_carrito">
      {carrito.length === 0 ? (
        <p className="carrito_vacio_msg">Tu carrito está vacío 🛒</p>
      ) : (
        <>
          <div className="carrito_lista">
            {carrito.map((item) => (
              /* Diseño de box limpio solicitado */
              <div key={item._id} className="producto_card_box">
                <div className="producto_info_box">
                  <img
                    src={item.imagenURL}
                    alt={item.nombre}
                    className="img_carrito_box"
                  />
                  <div className="detalles_box">
                    <h4>{item.nombre}</h4>
                    <p className="precio_box">${item.precio}</p>
                    <p>Cantidad: {item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => eliminar_producto(item)}
                  className="btn_eliminar_box"
                >
                  Eliminar
                </button>
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
