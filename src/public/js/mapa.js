export function crearMapa() {
    const map = L.map("mapa").setView([-34.9213, -57.9545], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    return map
}

let origenActual = null
let destinoActual = null

let recorridoActual = null
let subidaActual = null
let bajadaActual = null

let recorridoActual2 = null
let subidaActual2 = null
let bajadaActual2 = null

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

export function mostrarRecorrido(map, recorrido) {
    limpiarMapa(map)

    origenActual = L.marker([recorrido.puntoOrigen.lat, recorrido.puntoOrigen.lng])
    .addTo(map)
    .bindPopup(`<b>Origen</b><br>${recorrido.puntoOrigen.nombre}`)

    destinoActual = L.marker([recorrido.puntoDestino.lat, recorrido.puntoDestino.lng])
    .addTo(map)
    .bindPopup(`<b>Destino</b><br>${recorrido.puntoDestino.nombre}`)

    if(recorrido.tipo === "directo") {

        const subida = recorrido.paradaOrigen

        const bajada = recorrido.paradaDestino  

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

        map.fitBounds(recorridoActual.getBounds())
    }   

    else {

        const subidaA = recorrido.paradaOrigenA

        const bajadaA = recorrido.paradaDestinoA

        const subidaB = recorrido.paradaOrigenB

        const bajadaB = recorrido.paradaDestinoB

        recorridoActual = L.polyline(recorrido.trayectoA, {
            weight: 4
        })
        .addTo(map)
        .bindPopup(`<b>Línea ${recorrido.lineaA.nombre}</b>`);

        recorridoActual2 = L.polyline(recorrido.trayectoB, {
            weight: 4
        })
        .addTo(map)
        .bindPopup(`<b>Línea ${recorrido.lineaB.nombre}</b>`);

        subidaActual = L.circleMarker([subidaA.lat, subidaA.lng], {
                radius: 6,
                color: "red",
                fillColor: "red",
                fillOpacity: 1
        })
        .addTo(map)
        .bindPopup(`<b>Subir aquí</b><br>${subidaA.nombre}`)   
        
        bajadaActual = L.circleMarker([bajadaA.lat, bajadaA.lng], {
                radius: 6,
                color: "red",
                fillColor: "red",
                fillOpacity: 1
        })
        .addTo(map)
        .bindPopup(`<b>Bajar aquí</b><br>${bajadaA.nombre}`)

        subidaActual2 = L.circleMarker([subidaB.lat, subidaB.lng], {
                radius: 6,
                color: "red",
                fillColor: "red",
                fillOpacity: 1
        })
        .addTo(map)
        .bindPopup(`<b>Subir aquí</b><br>${subidaB.nombre}`)   
        
        bajadaActual2 = L.circleMarker([bajadaB.lat, bajadaB.lng], {
                radius: 6,
                color: "red",
                fillColor: "red",
                fillOpacity: 1
        })
        .addTo(map)
        .bindPopup(`<b>Bajar aquí</b><br>${bajadaB.nombre}`)

        const bounds = recorridoActual.getBounds()
        bounds.extend(recorridoActual2.getBounds())
        map.fitBounds(bounds);

    }

}

function removerElemento(map, elemento) {
    if (elemento) {
        map.removeLayer(elemento)
    }
    return null
}

export function limpiarMapa(map) {
    origenActual = removerElemento(map, origenActual)
    destinoActual = removerElemento(map, destinoActual)
    recorridoActual = removerElemento(map, recorridoActual)
    subidaActual = removerElemento(map, subidaActual)
    bajadaActual = removerElemento(map, bajadaActual)
    recorridoActual2 = removerElemento(map, recorridoActual2)
    subidaActual2 = removerElemento(map, subidaActual2)
    bajadaActual2 = removerElemento(map, bajadaActual2)
}