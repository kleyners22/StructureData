
export class CircularQueue {

    constructor(capacity) {
        this.capacity = capacity;
        this.data = new Array(capacity).fill(null); // arreglo fijo en memoria
        this.front = 0;   // puntero al primer elemento (cabeza)
        this.rear  = -1;  // puntero al último elemento encolado
        this.count = 0;   // cantidad de elementos 
    }
    //Consultas de estado ──

    isEmpty() {
        return this.count === 0;
    }

    isFull() {
        return this.count === this.capacity;
    }

    size() {
        return this.count;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.data[this.front];
    }


    enqueue(value) {
        if (this.isFull()) return false;
        this.rear = (this.rear + 1) % this.capacity; 
        this.data[this.rear] = value;
        this.count++;
        return true;
    }


    dequeue() {
        if (this.isEmpty()) return null;
        const value = this.data[this.front];
        this.data[this.front] = null;               
        this.front = (this.front + 1) % this.capacity; 
        this.count--;
        return value;
    }

    getSnapshot() {
        return {
            data:     [...this.data],
            front:    this.front,
            rear:     this.rear,
            count:    this.count,
            capacity: this.capacity
        };
    }
}