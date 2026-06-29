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

export function mostrarRecorrido(map, recorrido, paradas) {
    limpiarMapa(map)

    if(recorrido.tipo === "directo") {

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

        map.fitBounds(recorridoActual.getBounds())
    }   

    else {

        const subidaA = paradas.find(
            parada => parada._id === recorrido.paradaOrigenA.paradaId
        );

        const bajadaA = paradas.find(
            parada => parada._id === recorrido.paradaDestinoA.paradaId
        );

        const subidaB = paradas.find(
            parada => parada._id === recorrido.paradaOrigenB.paradaId
        );

        const bajadaB = paradas.find(
            parada => parada._id === recorrido.paradaDestinoB.paradaId
        );

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

    if (recorridoActual2) {
        map.removeLayer(recorridoActual2)
        recorridoActual = null
    }

    if (subidaActual2) {
        map.removeLayer(subidaActual2)
        subidaActual = null
    }

    if (bajadaActual2) {
        map.removeLayer(bajadaActual2)
        bajadaActual = null
    }
}