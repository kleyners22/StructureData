package unl.edu.cc;

import java.util.Random;

public class Main {
      public static void main (String[] args){
        Paquete[] paquetes = new Paquete[10000];
        Random rdm = new Random();

        for (int i= 0; i < 10000; i++){
            paquetes [i] = new Paquete(rdm.nextInt(10000));
        }
        int idObjeto = paquetes[999].id;
        long inicio = System.nanoTime();

        CentroOperaciones.buscarLineal(paquetes,idObjeto);
        System.out.println("Tiempo Lineal" +(System.nanoTime()-inicio)/1e9+"S");
    }
}

