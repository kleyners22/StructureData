const { act } = require("react");

class NodoBusqueda{
    constructor(keyword, urlCache){
        this.keyword = keyword
        this.urlCache = urlCache
        this.vitias = 1;
        this.izquerdo = null;
        this.derecho = null;
    }
}


class Motor_Indexacion{
    constructor(){
        this.raiz = null
    } 
    //Indexaar nueva consulta en el historial
    indexar(keyword,urlCache){
        const nuevoNodo = new nuevoNodo(keyword, urlCache);
        if (this.raiz == null){
            this.raiz = nuevoNodo
            return;
        }
        
        let actual = this.raiz;
        while (true){
            if (keyword === actual.keyword){
                actual.visitas++;
                return;
            } else if (keyword < actual.keyword){
                if (actual.izquierdo === null){
                    actual.izquierdo = nuevoNodo;
                    return
                }
            } else {
                if (actual.derecho === null){
                    actual.derecho = nuevoNodo;
                    return
                }
            }

        }
    }
}

