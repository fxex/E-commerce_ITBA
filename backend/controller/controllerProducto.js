class ControladorProducto {
    constructor(){
        this._productos = []
    }

    get productos(){
        return this._productos
    }
    set productos(value){
        this._productos = value
    }

    obtenerProductosId(id_producto){
        return this.productos.find(p => p.id === parseInt(id_producto))
    }
    
}

module.exports = ControladorProducto