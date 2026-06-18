package activities;
import 
public class CentroOperaciones{
    public static int buscarLineal(Paquete [] lista,int id){
        int bajo = 0, alto = lista.length - 1;
        while (bajo <= alto) {
            int medio = bajo + (alto - bajo) / 2;
            if (lista[medio].getId() == id) return medio;
            if (lista[medio].getId() < id) bajo = medio + 1;
            else alto = medio - 1;
        }
        return -1;
    }
}