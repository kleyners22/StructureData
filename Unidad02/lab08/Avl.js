// Estructura del Nodo AVL para el registro energético
class NodoAVL {
    constructor(idSensor, lectura) {
        this.idSensor = idSensor;
        this.lectura = lectura;
        this.altura = 1; // Un nodo hoja inicialmente tiene altura 1
        this.izquierdo = null;
        this.derecho = null;
    }
}

// Implementación Parcial del TDA AVL  
class ArbolAVLSensores {
    constructor() {
        this.raiz = null;
    }

    // Método utilitario para obtener la altura (seguro contra null)
    getAltura(nodo) {
        if (nodo === null) return 0;
        return nodo.altura;
    }

    // Cálculo del Factor de Equilibrio
    getBalance(nodo) {
        if (nodo === null) return 0;
        return this.getAltura(nodo.derecho) - this.getAltura(nodo.izquierdo);
    }  

    // Rotación Simple a la Derecha (Right Rotation)
    rotacionDerecha(y) {
        let x = y.izquierdo;  
        let T2 = x.derecho;  

        // Realizar la rotación  
        x.derecho = y;
        y.izquierdo = T2;

        // Actualizar alturas (primero y, luego x)  
        y.altura = Math.max(this.getAltura(y.izquierdo), this.getAltura(y.derecho)) + 1;
        x.altura = Math.max(this.getAltura(x.izquierdo), this.getAltura(x.derecho)) + 1;

        return x; // Retornar la nueva raíz del subárbol
    }

    // Tarea del estudiante: Implementar rotacionIzquierda(x)
    rotacionIzquierda(x) {
        let y = x.derecho;   // aqui "y" es el hijo DERECHO que pasa a ser raíz.
        let T2 = y.izquierdo; // T2 es el subárbol izquierdo de y

        // Realizar la rotación
        y.izquierdo = x;    // x baja a ser el hijo izquierdo de y
        x.derecho = T2;     // T2 pasa a ser hijo derecho de x

        // Actualizar alturas (primero x, luego y — orden inverso al de rotDerecha)
        x.altura = Math.max(this.getAltura(x.izquierdo), this.getAltura(x.derecho)) + 1;
        y.altura = Math.max(this.getAltura(y.izquierdo), this.getAltura(y.derecho)) + 1;

        return y; // Retornar la nueva raíz del subárbol
    }
    // Tarea del estudiante: Implementar el método insertar(idSensor, lectura) con auto-balanceo
    insertar(idSensor, lectura) {
    this.raiz = this.insertarRecursivo(this.raiz, idSensor, lectura);
}

insertarRecursivo(nodo, idSensor, lectura) {

    if (nodo === null) {
        return new NodoAVL(idSensor, lectura);
    }

    if (idSensor < nodo.idSensor) {
        nodo.izquierdo = this.insertarRecursivo(nodo.izquierdo, idSensor, lectura);
    } else if (idSensor > nodo.idSensor) {
        nodo.derecho = this.insertarRecursivo(nodo.derecho, idSensor, lectura);
    } else {
        return nodo; // ID duplicado: no se inserta
    }

    nodo.altura = Math.max(this.getAltura(nodo.izquierdo), this.getAltura(nodo.derecho)) + 1;

    let balance = this.getBalance(nodo);

    if (balance < -1 && idSensor < nodo.izquierdo.idSensor) {
        return this.rotacionDerecha(nodo);
    }

    if (balance > 1 && idSensor > nodo.derecho.idSensor) {
        return this.rotacionIzquierda(nodo);
    }

    if (balance < -1 && idSensor > nodo.izquierdo.idSensor) {
        nodo.izquierdo = this.rotacionIzquierda(nodo.izquierdo);
        return this.rotacionDerecha(nodo);
    }

    if (balance > 1 && idSensor < nodo.derecho.idSensor) {
        nodo.derecho = this.rotacionDerecha(nodo.derecho);
        return this.rotacionIzquierda(nodo);
    }

    return nodo; 
    }
}