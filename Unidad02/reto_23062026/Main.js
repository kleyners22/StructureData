

const Inventario = require('./Inventario');

const inventario = new Inventario();

inventario.agregarProducto(
    "P001",
    "Laptop",
    10
);

inventario.agregarProducto(
    "P002",
    "Mouse",
    20
);

inventario.agregarProducto(
    "P003",
    "Teclado",
    15
);

console.log("Inventario inicial:");
inventario.mostrarProductos();

inventario.actualizarStock(
    "P001",
    8
);

inventario.actualizarStock(
    "P002",
    18
);

console.log("\nDespués de actualizar stock:");
inventario.mostrarProductos();

inventario.deshacer();

console.log("\nDespués de deshacer el último cambio:");
inventario.mostrarProductos();