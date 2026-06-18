package activities;

public class Prueba {
    public static void main(String[] args) {

        // ===== COLA FIFO =====
        ColaPaquetes cola = new ColaPaquetes(5);

        cola.enqueque(new Paquete(1, 110101));
        cola.enqueque(new Paquete(2, 110102));
        cola.enqueque(new Paquete(3, 110103));

        Paquete p1 = cola.dequeque(null);

        System.out.println("Paquete retirado de la cola:");
        System.out.println("ID: " + p1.getId());
        System.out.println("Código Postal: " + p1.getCodigoPostal());

        // ===== PILA LIFO =====
        PilaPaquete pila = new PilaPaquete(5);

        pila.push(new Paquete(10, 220201));
        pila.push(new Paquete(11, 220202));
        pila.push(new Paquete(12, 220203));

        Paquete p2 = pila.pop();

        System.out.println("\nPaquete retirado de la pila:");
        System.out.println("ID: " + p2.getId());
        System.out.println("Código Postal: " + p2.getCodigoPostal());
    }
}

