

import { CircularQueue } from './ColaCircular.js';

const CAPACIDAD = 5;

export class VehicleManager {
    constructor() {
        this.cola      = new CircularQueue(CAPACIDAD);
        this.historial = [];
        this._precargar(['VEH-5291', 'VEH-3382', 'VEH-8840', 'VEH-1092', 'VEH-7731']);
    }


    encolar(placa) {
        const id = placa.trim().toUpperCase();

        if (!id) {
            return { ok: false, mensaje: 'Ingresa una placa válida.' };
        }

        if (this.cola.isFull()) {
            return { ok: false, mensaje: 'Cola llena. Procesa una salida primero.' };
        }

        const encolado = this.cola.enqueue(id);
        if (!encolado) {
            return { ok: false, mensaje: 'No se pudo encolar el vehículo.' };
        }

        return { ok: true, mensaje: `${id} registrado en cola.` };
    }


    procesarSalida() {
        if (this.cola.isEmpty()) {
            return { ok: false, vehiculo: null, mensaje: 'No hay vehículos en cola.' };
        }

        const vehiculo = this.cola.dequeue();
        this.historial.unshift({ id: vehiculo, hora: this._horaActual() });

        return { ok: true, vehiculo, mensaje: `${vehiculo} procesado y retirado.` };
    }



    getEstado() {
        return {
            cola:       this.cola.getSnapshot(),
            historial:  [...this.historial],
            enCola:     this.cola.size(),
            procesados: this.historial.length,
            capacidad:  CAPACIDAD
        };
    }

    getCola()      { return this.cola; }
    getHistorial() { return this.historial; }


    _precargar(vehiculos) {
        vehiculos.forEach(v => this.cola.enqueue(v));
    }

    _horaActual() {
        return new Date().toLocaleTimeString('es-EC', { hour: '2-digit', minute: '2-digit' });
    }
}