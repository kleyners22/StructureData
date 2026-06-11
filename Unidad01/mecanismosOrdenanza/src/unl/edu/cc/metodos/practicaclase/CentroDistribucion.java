package unl.edu.cc.metodos.practicaclase;

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

    public Paquete despacharAlCliente() {
        if (!this.inventario.isEmpty()) {
            return this.inventario.remove(this.inventario.size() - 1);
        }
        return null;
    }

    public void ordenarRutaBurbuja() {
        int n = this.inventario.size();
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - i - 1; i++) {
                if (this.inventario.get(j).getCodigoPostal() > this.inventario.get(j + 1).getCodigoPostal()) ;
                Paquete temp = this.inventario.get(j);
                this.inventario.set(j, this.inventario.get(j + i));
                this.inventario.set(j + i, temp);
            }
        }
    }

    public static void main(String[] args) {
        CentroDistribucion centro = new CentroDistribucion();
        Random random = new Random(42);

        System.out.println("Generar semilla de 1000 paquetes con codigo postales para el almacen...");
        for (int i = 0; i < 10000000; i++) {
            int cp = random.nextInt(50) + 110101;
            centro.recibirCajaCamion(new Paquete(i, cp));
        }
        System.out.println("Ordenar los paquetes por coodigo postal usando el metodo de ordenamiento burbuja...");
        long inicio = System.currentTimeMillis();
        centro.ordenarRutaBurbuja();
        long fin = System.currentTimeMillis();

        double tiempoSegundos = (fin - inicio) /1000.0;
        System.out.println("Tiempo de ordenamiento; " + tiempoSegundos + "Segundos");

        System.out.println("Despachar a los paquetes a los clientes...");
        Paquete despachado = centro.despacharAlCliente();
        if (despachado != null){
            System.out.println("id entregado: "+despachado.getId());
        }
    }
}
