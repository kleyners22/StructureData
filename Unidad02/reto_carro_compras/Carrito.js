

class Carrito{
    
    pilaProductos;
    
    constructor (){
        this.pilaProductos = [];
    }


    agregarProducto(producto) {
        if (producto){
            this.pilaProductos.push(producto)
            console.log("Se añadio un producto al carrito")
        } else { 
            console.log("No se añadio un producto al carrito, invalido")
        }
    }



    quitarProductoLIFO(){
        if (this.pilaProductos.length> 0){
            let productoRemovido = this.pilaProductos.pop();
            console.log("Se retiro producto (LIFO)")
            return productoRemovido
        } else{
            console.log ("Carrito vacio")
            return null
        }
    }

    calcularTotal(){
        let total = 0;
        for (let p of this.pilaProductos) {
            total += p.precio;
        }
        return total;
    }

    verProductosCarrito(){
        return this.pilaProductos
    }
}

module.exports = Carrito