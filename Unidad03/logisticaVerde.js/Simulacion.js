
const LogisticaGrafo = require("./LogisticaGrafo");

// --- Simulación de red de distribución (Tarea 3.1) ---
const redLogistica = new LogisticaGrafo(5); 
// 5 centros de acopio (0 a 4)
// Definir conexiones y consumo energético estimado (kWh)
redLogistica.agregarRuta(0, 1, 4); // Centro 0 a 1
redLogistica.agregarRuta(0, 2, 2); // Centro 0 a 2
redLogistica.agregarRuta(1, 3, 5); // Centro 1 a 3
redLogistica.agregarRuta(2, 1, 1); // Centro 2 a 1
redLogistica.agregarRuta(2, 4, 8); // Centro 2 a 4
redLogistica.agregarRuta(3, 4, 3); // Centro 3 a 4
const resultado = redLogistica.dijkstra(0, 4);
console.log("Ruta optimizada para el camión eléctrico:");
console.log("Centros visitados:", resultado.ruta.join(" -> "));
console.log("Consumo total estimado:", resultado.consumoTotal, "kWh");