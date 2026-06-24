class NodoArbol {

    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

function recorridoInorden(raiz) {
    if (raiz === null) {
        return [];
    }
    return [
        ...recorridoInorden(raiz.izquierda),
        raiz.valor,
        ...recorridoInorden(raiz.derecha)
    ];
}

function recorridoPreorden(raiz) {
    if (raiz === null) {
        return [];
    }
    return [
        raiz.valor,
        ...recorridoPreorden(raiz.izquierda),
        ...recorridoPreorden(raiz.derecha)
    ];
}

function recorridoPostorden(raiz) {
    if (raiz === null) {
        return [];
    }
    return [
        ...recorridoPostorden(raiz.izquierda),
        ...recorridoPostorden(raiz.derecha),
        raiz.valor
    ];
}
//seccion 4.3
function factorialCola(n, acumulador = 1) {
    if (n <= 1) {
        return acumulador;
    }

    return factorialCola(n - 1, acumulador * n);
}

// Crear árbol
let raiz = new NodoArbol(10);

raiz.izquierda = new NodoArbol(5);
raiz.derecha = new NodoArbol(20);

raiz.izquierda.izquierda = new NodoArbol(2);
raiz.izquierda.derecha = new NodoArbol(8);

raiz.derecha.izquierda = new NodoArbol(15);
raiz.derecha.derecha = new NodoArbol(30);

console.log(recorridoInorden(raiz));
console.log(recorridoPreorden(raiz));
console.log(recorridoPostorden(raiz));