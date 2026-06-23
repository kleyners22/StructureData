


class Inventario {

    constructor() {
        this.productos = [];
        this.historial = new Pila();
    }

    agregarProducto(codigo, nombre, stock) {

        const producto = new Producto(
            codigo,
            nombre,
            stock
        );

        this.productos.push(producto);
    }

    actualizarStock(codigo, nuevoStock) {

        const producto = this.productos.find(
            p => p.codigo === codigo
        );

        if (!producto) {
            console.log("Producto no encontrado");
            return;
        }

        this.historial.push(
            new CambioStock(
                producto.codigo,
                producto.stock
            )
        );

        producto.stock = nuevoStock;

        console.log(
            `Stock actualizado para ${producto.nombre}`
        );
    }

    deshacer() {

        if (this.historial.estaVacia()) {
            console.log("No hay cambios para deshacer");
            return;
        }

        const cambio = this.historial.pop();

        const producto = this.productos.find(
            p => p.codigo === cambio.codigoProducto
        );

        if (producto) {
            producto.stock = cambio.stockAnterior;

            console.log(
                `Cambio revertido para ${producto.nombre}`
            );
        }
    }

    mostrarProductos() {

        console.log("\n=== INVENTARIO ===");

        this.productos.forEach(producto => {
            console.log(
                `Código: ${producto.codigo} | Nombre: ${producto.nombre} | Stock: ${producto.stock}`
            );
        });
    }

}