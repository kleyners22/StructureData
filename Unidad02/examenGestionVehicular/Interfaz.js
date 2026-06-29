

import { VehicleManager } from './VehicleManager.js';
const manager = new VehicleManager();

const listaVehiculos = document.getElementById('listaVehiculos');
const historialLista = document.getElementById('historialLista');
const btnProcesar    = document.getElementById('btnProcesar');
const statEnCola     = document.getElementById('statEnCola');
const statProcesados = document.getElementById('statProcesados');
const statCapacidad  = document.getElementById('statCapacidad');

btnProcesar.addEventListener('click', () => {
    const resultado = manager.procesarSalida();
    if (!resultado.ok) alert(resultado.mensaje);
    renderizar();
});

function renderizar() {
    const estado = manager.getEstado();
    renderizarCola(estado.cola);
    renderizarHistorial(estado.historial);
    actualizarStats(estado);
    btnProcesar.disabled = estado.enCola === 0;
}

function renderizarCola(snapshot) {
    const { data, front, count, capacity } = snapshot;
    const fragmento = document.createDocumentFragment();

    if (count === 0) {
        const vacio = document.createElement('div');
        vacio.className = 'empty-state';
        vacio.textContent = 'No hay vehículos pendientes por atender.';
        fragmento.appendChild(vacio);
        listaVehiculos.replaceChildren(fragmento);
        return;
    }

    for (let i = 0; i < count; i++) {
        const idx      = (front + i) % capacity;
        const esActivo = i === 0;

        const fila   = document.createElement('div');
        fila.className = 'item-row';

        const info   = document.createElement('div');
        info.className = 'vehicle-info';

        const orden  = document.createElement('span');
        orden.className = 'vehicle-index';
        orden.textContent = `#${i + 1}`;

        const nombre = document.createElement('strong');
        nombre.className = 'vehicle-id';
        nombre.textContent = data[idx];

        const badge  = document.createElement('span');
        badge.className = `status-badge ${esActivo ? 'badge-activo' : ''}`;
        badge.textContent = esActivo ? 'En taller' : 'En espera';

        info.append(orden, nombre);
        fila.append(info, badge);
        fragmento.appendChild(fila);
    }

    listaVehiculos.replaceChildren(fragmento);
}

function renderizarHistorial(historial) {
    if (historial.length === 0) {
        historialLista.innerHTML = '<div class="empty-state">Aún no se ha atendido ningún vehículo.</div>';
        return;
    }

    const fragmento = document.createDocumentFragment();
    historial.forEach(item => {
        const fila = document.createElement('div');
        fila.className = 'historial-item';
        fila.innerHTML = `<span>${item.id}</span><small>${item.hora} · Retirado</small>`;
        fragmento.appendChild(fila);
    });

    historialLista.replaceChildren(fragmento);
}

function actualizarStats(estado) {
    statEnCola.textContent     = estado.enCola;
    statProcesados.textContent = estado.procesados;
    statCapacidad.textContent  = estado.capacidad;
}

renderizar();