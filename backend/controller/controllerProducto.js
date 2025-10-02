class ControladorProducto {
    constructor(productos){
        this.productos = productos
    }

    get productos(){
        return this.productos
    }

    obtenerProductosId(id_producto){
        return this.productos.find(p => p.id === parseInt(id_producto))
    }
    
}

module.exports = ControladorProducto