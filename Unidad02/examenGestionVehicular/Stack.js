
export class Stack {
    constructor(capacity) {
        this.capacity = capacity;
        this.data = new Array(capacity).fill(null);
        this.top = -1;
    }

    // ── Consultas de estado 

    isEmpty() {
        return this.top === -1;
    }

    isFull() {
        return this.top === this.capacity - 1;
    }

    size() {
        return this.top + 1;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.data[this.top];
    }

    // ── Operaciones principales ───

    push(value) {
        if (this.isFull()) return false;
        this.top++;
        this.data[this.top] = value;
        return true;
    }

    pop() {
        if (this .isEmpty()) return null;
        const value = this.data[this.top];
        this.data[this.top] = null;
        this.top--;
        return value;
    }

    getSnapshot() {
        return {
            data:     [...this.data],
            top:      this.top,
            capacity: this.capacity
        };
    }
}