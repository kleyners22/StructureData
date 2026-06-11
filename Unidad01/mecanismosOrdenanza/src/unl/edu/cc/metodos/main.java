package unl.edu.cc.metodos;

public class main {
    public static void main (String Args[]){
        long n  = 20;
        long resultado = 1;

        for (int i =1; i <= n; i++){
            resultado = resultado * i;
        }
        System.out.println(""+resultado);
    }
}

