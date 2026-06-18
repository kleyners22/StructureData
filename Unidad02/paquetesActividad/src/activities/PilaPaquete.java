package activities;

public class PilaPaquete {

    /// Usar Lifo para este algoritmo

    private Paquete[] stack;
    private int top;

    public PilaPaquete(int capacidad) {
        this.stack = new Paquete[capacidad];
        this.top = -1; // La pila comienza vacía
    }

    public void push(Paquete p) {

        if (top == stack.length - 1) {
            System.out.println("La pila está llena");
            return;
        }
        stack[++top] = p;
    }

    public Paquete pop() {

        if (top == -1) {
            System.out.println("La pila está vacía");
            return null;
        }

        Paquete eliminado = stack[top];
        stack[top] = null; // limpieza de referencia
        top--;

        return eliminado;
    }
}
