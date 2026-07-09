const NodoBusqueda = require('./NodoBusqueda');

class MotorIndexacionBST{
    
    
    constructor(){
        this.raiz = null;
    } 

    //Indexar Metodo
    indexar(keyword, urlCache) {
        const nuevoNodo = new NodoBusqueda(keyword, urlCache);
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
        } else {
            this._insertarNodo(this.raiz, nuevoNodo);
        }
    }
    //Insertar Nodo dentro del arbol
    _insertarNodo(nodoActual, nuevoNodo) {
        let actual = nodoActual;
        while (true) {
          const comparacion = nuevoNodo.keyword.localeCompare(actual.keyword);
          if (comparacion === 0) {
            actual.visitas += 1;
            return;
          } else if (comparacion < 0) {
            if (actual.izquierdo === null) {
              actual.izquierdo = nuevoNodo;
                  return;
              }
              actual = actual.izquierdo; 
          } else {
              if (actual.derecho === null) {
                  actual.derecho = nuevoNodo;
                  return;
              }
              actual = actual.derecho; 
          }
      }
  }


  //Metodo buscar nodo por keyword
    buscar(keyword) {
      let actual = this.raiz;
      let ciclosCPU = 0; 
      while (actual !== null) {
        ciclosCPU++;
        const comparacion = keyword.localeCompare(actual.keyword);
        if (comparacion === 0) {
          return { encontrado: true, nodo: actual, ciclosCPU };
        } else if (comparacion < 0) {
          actual = actual.izquierdo;
        } else {
          actual = actual.derecho;
        }
      }
      return { encontrado: false, nodo: null, ciclosCPU };
    }

    //Metodo exportar
    exportarHistorial() {
      const resultado = [];
      const pila = [];
      let actual = this.raiz;
      
      while (actual !== null || pila.length > 0) {
        while (actual !== null) {
          pila.push(actual);
          actual = actual.izquierdo;
        }
        actual = pila.pop();
        resultado.push({
          keyword: actual.keyword,
          urlCache: actual.urlCache,
          visitas: actual.visitas,
        });
        actual = actual.derecho;
      }
      return resultado;
    }


    //Calcular Altura max
    altura() {
      if (this.raiz === null) return 0;
      let alturaMax = 0;
      let cola = [{ nodo: this.raiz, profundidad: 1 }];
      while (cola.length > 0) {
        const { nodo, profundidad } = cola.shift();
        alturaMax = Math.max(alturaMax, profundidad);
        if (nodo.izquierdo !== null) {
          cola.push({ nodo: nodo.izquierdo, profundidad: profundidad + 1 });
        }
        if (nodo.derecho !== null) {
          cola.push({ nodo: nodo.derecho, profundidad: profundidad + 1 });
        }
      }
      return alturaMax;
    }
  }
module.exports = MotorIndexacionBST;



