export function crearMapa() {
    const map = L.map("mapa").setView([-34.9213, -57.9545], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    return map;
}

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