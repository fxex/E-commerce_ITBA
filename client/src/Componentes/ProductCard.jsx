import { useState } from "react";
import "../styles/ProductCard.css"
function ProductCard({img, nombre, precio, descripcion, materiales, tamaño}){
    
        const [verDetalle, setVerDetalle] = useState(false);
    
        const verTodoElDetalle = ()=>{
            setVerDetalle(!verDetalle)
        }

    return(
        <div className="card">
            <img src={img} alt={nombre} className="card_img"/>
            <div className="card_body">
                <h3 className="card_title">{nombre}</h3>
                <p className="card_text">${precio}</p>
                <button className="card_button"  onClick={verTodoElDetalle}>
                    {verDetalle ? "Ver menos" : "Ver Detalle"}</button>


                {verDetalle && (
                    <>
                    <p className="card_text">{descripcion}</p>
                    <p className="card_text">Materiales: {materiales}</p>
                    <p className="card_text">Tamaño: {tamaño}</p>
                    <button className="card_button">Añadir Al Carrito</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProductCard