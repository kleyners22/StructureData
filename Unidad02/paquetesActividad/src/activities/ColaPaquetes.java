package activities;

public class ColaPaquetes {

    private Paquete[] queque;
    private int frente, fin, total;

    public ColaPaquetes(int capacidad) {
        this.queque = new Paquete[capacidad];
        this.frente = 0;
        this.fin = 0;
        this.total = 0;
    }

    public void enqueque(Paquete p) {
        if (total == queque.length) {
            System.out.println("La cola está llena");
            return;
        }
        queque[fin] = p;
        fin = (fin + 1) % queque.length;
        total++;
    }

    public Paquete dequeque(Paquete p) {

        if (total == 0) {
            System.out.println("La cola está vacía");
            return null;
        }

        Paquete eliminado = queque[frente];
        queque[frente] = null;
        frente = (frente + 1) % queque.length;
        total--;
        return eliminado;
    }
}
