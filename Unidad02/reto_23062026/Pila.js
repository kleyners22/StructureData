

class Pila {

    constructor() {
        this.elementos = [];
    }

    push(elemento) {
        this.elementos.push(elemento);
    }

    pop() {
        return this.elementos.pop();
    }

    estaVacia() {
        return this.elementos.length === 0;
    }

}

module.exports = Pila;