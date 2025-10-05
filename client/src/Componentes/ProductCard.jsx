import "../styles/ProductCard.css"
function ProductCard({img, nombre, precio, verTodoElDetalle }){
    
    return(
        <div className="card">
            <img src={img} alt={nombre} className="card_img"/>
            <div className="card_body">
                <h3 className="card_title">{nombre}</h3>
                <p className="card_text">${precio}</p>
                <button className="card_button"  onClick={verTodoElDetalle}>Ver detalles</button>
            </div>
        </div>
    );
};

export default ProductCard