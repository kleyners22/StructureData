
const MotorIndexacionBST = require('./MotorIndexacionBST');

const N = 20000;

function generarPalabraSecuencial(indice) {
    return 'palabra' + String(indice).padStart(5, '0');
}

function fisherYates(arreglo) {
    const copia = [...arreglo];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

const palabras = [];
for (let i = 0; i < N; i++) {
    palabras.push(generarPalabraSecuencial(i));
}

const ultimaPalabra = palabras[palabras.length - 1];
console.log('=== Tarea 3: Auditoría Eco-Friendly ===\n');


const motorDegenerado = new MotorIndexacionBST();
palabras.forEach((p) => {
    motorDegenerado.indexar(p, `https://cache.example.com/${p}`);
})

const alturaDegenerada = motorDegenerado.altura();
const resultadoDegenerado = motorDegenerado.buscar(ultimaPalabra);

console.log(`Altura del árbol degenerado: ${alturaDegenerada} niveles`);
console.log(`Búsqueda en árbol degenerado: ${resultadoDegenerado.ciclosCPU} ciclos de CPU`
);


const palabrasBarajadas = fisherYates(palabras);
const motorBalanceado = new MotorIndexacionBST();
palabrasBarajadas.forEach((p) => {
    motorBalanceado.indexar(p, `https://cache.example.com/${p}`);
});

const alturaBalanceada = motorBalanceado.altura();
const resultadoBalanceado = motorBalanceado.buscar(ultimaPalabra);
console.log(`\nAltura del árbol pseudo-balanceado: ${alturaBalanceada} niveles`);
console.log(`Búsqueda en árbol pseudo-balanceado: ${resultadoBalanceado.ciclosCPU} ciclos de CPU`)

const ahorro =((resultadoDegenerado.ciclosCPU - resultadoBalanceado.ciclosCPU) /
resultadoDegenerado.ciclosCPU) *100;

console.log(`\nPorcentaje de ciclos de CPU ahorrados: ${ahorro.toFixed(2)}%`);
console.log(`(log2(${N}) ≈ ${Math.log2(N).toFixed(2)} -> referencia teórica del mejor caso)`);