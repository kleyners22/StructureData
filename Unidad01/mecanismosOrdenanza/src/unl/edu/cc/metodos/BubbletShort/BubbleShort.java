package unl.edu.cc.metodos.BubbletShort;

public class BubbleShort {

    public static void bubbleSort(int[] arr) {
        int n = arr.length;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void bubbleShort(int[] arr) {

        int n = arr.length;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
            }
        }
    }

    public static void factorial( ){
        int n  = 3;
        int resultado = 1;

        for (int i =1; i <= n; i++){
            resultado = resultado * i;
        }
        System.out.println(""+resultado);
    }
}



