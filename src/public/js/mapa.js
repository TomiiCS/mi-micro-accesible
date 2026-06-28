export function crearMapa() {
    const map = L.map("mapa").setView([-34.9213, -57.9545], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    return map
}

let recorridoActual = null
let subidaActual = null
let bajadaActual = null

//funciones temporales para mostrar todo y comprobar
export function mostrarPuntos(map, puntos) {
    for (const punto of puntos) {
        L.marker([punto.lat, punto.lng])
            .addTo(map)
            .bindPopup(`<b>Punto</b><br>${punto.nombre}`)
    }
}

export function mostrarParadas(map, paradas) {
    for (const parada of paradas) {
        L.circleMarker([parada.lat, parada.lng], {
            radius: 6,
            color: "red",
            fillColor: "red",
            fillOpacity: 1
        })
        .addTo(map)
        .bindPopup(`<b>Parada</b><br>${parada.nombre}`)
    }
}

export function mostrarLineas(map, lineas) {
    for (const linea of lineas) {
        L.polyline(linea.trayecto, {
            weight: 4
        })
        .addTo(map)
        .bindPopup(`<b>Línea ${linea.nombre}</b>`)
    }
}

export function mostrarRecorrido(map, recorrido, paradas) {
    limpiarMapa(map)

    const subida = paradas.find(
        parada => parada._id === recorrido.paradaOrigen.paradaId
    );

    const bajada = paradas.find(
        parada => parada._id === recorrido.paradaDestino.paradaId
    );

    recorridoActual = L.polyline(recorrido.trayecto, {
        weight: 4
    })
    .addTo(map)
    .bindPopup(`<b>Línea ${recorrido.linea.nombre}</b>`);

    subidaActual = L.circleMarker([subida.lat, subida.lng], {
            radius: 6,
            color: "red",
            fillColor: "red",
            fillOpacity: 1
    })
    .addTo(map)
    .bindPopup(`<b>Subir aquí</b><br>${subida.nombre}`)   
    
    bajadaActual = L.circleMarker([bajada.lat, bajada.lng], {
            radius: 6,
            color: "red",
            fillColor: "red",
            fillOpacity: 1
    })
    .addTo(map)
    .bindPopup(`<b>Bajar aquí</b><br>${bajada.nombre}`)

    map.fitBounds(recorridoActual.getBounds());
}

export function limpiarMapa(map) {
    if (recorridoActual) {
        map.removeLayer(recorridoActual)
        recorridoActual = null
    }

    if (subidaActual) {
        map.removeLayer(subidaActual)
        subidaActual = null
    }

    if (bajadaActual) {
        map.removeLayer(bajadaActual)
        bajadaActual = null
    }
}