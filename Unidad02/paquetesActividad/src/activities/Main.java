package activities;

import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Paquete[] paquetes = new Paquete[10000];
        Random rnd = new Random();
        
        for (int i = 0; i < 10000; i++) {
            paquetes[i] = new Paquete(rnd.nextInt(100000))};
            int idObjetivo = paquetes[9999].id;
            long inicio = System.nanoTime();
        }
}
