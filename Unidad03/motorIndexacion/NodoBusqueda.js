
class NodoBusqueda{
    constructor(keyword, urlCache){
        this.keyword = keyword
        this.urlCache = urlCache
        this.visitas = 1;
        this.izquierdo = null;
        this.derecho = null;
    }
}
module.exports = NodoBusqueda;
