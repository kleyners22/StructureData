const Producto = require('./Producto.js');

class Inventario{

    productos

    constructor (){
        this.productos = []
    }
    
    añadirProducto(producto) {
        this.productos.push(producto)
    }

    obtenerProducto(codigo){
        let indice = this.productos.findIndex(p => p.codigo === codigo)
        if (indice !== -1){
            
            let productoSacado = this.productos.splice(indice, 1)[0];
            return productoSacado;
        } else {
            console.log("Ese producto no está en el inventario.");
            return null;
        }
    }

    verLista(){
        return this.productos
    }
}
module.exports = Inventario