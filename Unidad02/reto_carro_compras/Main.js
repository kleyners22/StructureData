

const Producto = require('./Producto.js');
const Inventario = require('./Inventario.js');
const Carrito = require('./Carrito.js');

const actualInventario = new Inventario();
const miCarrito = new Carrito();


actualInventario.añadirProducto(new Producto(1200, "P01", "Laptop Gamer"));
actualInventario.añadirProducto(new Producto(45, "P02", "Mouse Inalámbrico"));
actualInventario.añadirProducto(new Producto(80, "P03", "Teclado Mecánico"));

console.log ("Inventario")
console.log(actualInventario.verLista());

console.log("COMPRA");
    
let cajaLaptop = actualInventario.obtenerProducto("P01");
miCarrito.agregarProducto(cajaLaptop);

let cajaTeclado = actualInventario.obtenerProducto("P03");
miCarrito.agregarProducto(cajaTeclado);

console.log("ESTADO DEL CARRITO");
console.log(miCarrito.verProductosCarrito());
console.log(`Total a pagar: $${miCarrito.calcularTotal()}`);

console.log("INVENTARIO Actualizado");
console.log(actualInventario.verLista()); 

console.log("Cliente devolviendo producto (LIFO)");
let productoDevuelto = miCarrito.quitarProductoLIFO();

if (productoDevuelto) {
    actualInventario.añadirProducto(productoDevuelto);
    console.log(`El cliente devolvió al estante: ${productoDevuelto.nombre}`);
}


console.log("CARRITO ACTUAL:");
console.log(miCarrito.verProductosCarrito());
console.log(`Total a pagar: $${miCarrito.calcularTotal()}`);

console.log("INVENTARIO ACTUALIZADO:");
console.log(actualInventario.verLista());