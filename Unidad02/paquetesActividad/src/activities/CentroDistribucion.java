package activities;

import java.util.ArrayList;
import java.util.Random;

public class CentroDistribucion {
    private ArrayList<Paquete> inventario;
    public CentroDistribucion() {
        this.inventario = new ArrayList<>();
    }

    public void recibirCajaCamion(Paquete p) {
        this.inventario.add(p);
    }
    public Paquete despacharACliente(){
        if (!this.inventario.isEmpty()) {
            return this.inventario.remove(this.inventario.size()-1);
        }
        return null;
    }

    public void ordenarRutaQuickSort() {
        quickSort(0, inventario.size() - 1);
    }

    public void enviarPaquete(){

    }

    public void quickSort(int izquierda, int derecha) {

        int i = izquierda;
        int j = derecha;

        int pv = inventario.get((izquierda + derecha) / 2).getCodigoPostal();
        while (i <= j) {
            while (inventario.get(i).getCodigoPostal() < pv) {
                i++;
            }
            while (inventario.get(j).getCodigoPostal() > pv) {
                j--;
            }
            if (i <= j) {
                Paquete aux = inventario.get(i);
                inventario.set(i, inventario.get(j));
                inventario.set(j, aux);
                i++;
                j--;
            }
        }
        if (izquierda < j) {
            quickSort(izquierda, j);
        }
        if (i < derecha) {
            quickSort(i, derecha);
        }
    }

    public static void main(String[] args) {
        CentroDistribucion centro = new CentroDistribucion();
        Random random =  new Random(42);


        System.out.println("Generar una semilla de 10000 paquetes con codigos postales para el almacen....");
        for (int i = 0; i < 1000000; i++){
            int cp = random.nextInt(50)+110101;
            centro.recibirCajaCamion(new Paquete(i, cp));
        }

        System.out.println("Ordenar los paquetes por codigo postal usando el metodo de ordenamiento burbuja...");
        long inicio = System.currentTimeMillis();
        centro.ordenarRutaQuickSort();
        long fin = System.currentTimeMillis();

        double tiempoSegundos = (fin - inicio ) / 1000.0;
        System.out.println("Tiempo de ordenamiento: " + tiempoSegundos + " segundos");

        System.out.println("Despachar los paquetes a los clientes...");
        Paquete despachado = centro.despacharACliente();
        if(despachado != null){
            System.out.println("Id entregado: " +despachado.getId());
        }
    }
}

