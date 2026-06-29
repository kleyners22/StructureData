package edu.unl.cc;

/**
 * @author kleyner buzz
 */

public class Ejecutor {
    public static void main(String[] args) {
        Utilidades u = new Utilidades();
        int[] pruebas = {10, 20, 30, 40, 41,42};

        System.out.println("N\tRecursivo(ns)\tMemoizacion(ns)");

        for (int n : pruebas) {
            long inicio = System.nanoTime();
            long resultadoRecursivo = u.fibonacciRecursivo(n);
            long fin = System.nanoTime();
            long tiempoRecursivo = fin - inicio;

            u.limpiarCache();
            inicio = System.nanoTime();

            long resultadoMemo =
                    u.fibonacciMemo(n);
            fin = System.nanoTime();

            long tiempoMemo = fin - inicio;
            System.out.println(
                    n + "\t" + tiempoRecursivo + "\t\t" + tiempoMemo
            );
        }
    }
}

