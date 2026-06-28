import {
    obtenerPuntos,
    obtenerParadas,
    obtenerLineas
} from "./services/api.js"

import {
    crearMapa,
    mostrarPuntos,
    mostrarParadas,
    mostrarLineas,
    mostrarRecorrido
} from "./mapa.js"

const map = crearMapa()

const puntos = await obtenerPuntos()
const paradas = await obtenerParadas()
const lineas = await obtenerLineas()

mostrarPuntos(map, puntos);

const selectorOrigen = document.getElementById("origen")
const selectorDestino = document.getElementById("destino")

selectorDestino.disabled = true
cargarSelector(selectorOrigen,puntos, null)

function cargarSelector (selector,puntos, puntoExcluir){

    selector.innerHTML = ""

    const opcion = document.createElement("option")
    opcion.textContent = "--- Selecciona un punto ---" 
    opcion.disabled = true
    opcion.selected = true
    selector.appendChild(opcion)

    puntos.forEach(punto => {
    
        if (punto._id === puntoExcluir) return;
        const opcion = document.createElement("option")
        opcion.value = punto._id
        opcion.textContent = punto.nombre 
        selector.appendChild(opcion)
        
    })

}

selectorOrigen.addEventListener("change", () => {
    selectorDestino.disabled = false
    console.log()
    cargarSelector(selectorDestino,puntos, selectorOrigen.value)
})


const botonBuscar = document.getElementById("buscar")

botonBuscar.addEventListener("click", () => {
    
    const paradasOrigen = paradas.filter (parada => parada.puntoId === selectorOrigen.value)
    const paradasDestino = paradas.filter (parada => parada.puntoId === selectorDestino.value)  

    const lineaEncontrada = lineas.find(linea => { 
        const existeOrigen = linea.paradas.some(parada => 
            paradasOrigen.some(paradaOrigen => 
            paradaOrigen._id === parada.paradaId ))
        const existeDestino = linea.paradas.some(parada =>
            paradasDestino.some(paradaDestino =>
            paradaDestino._id === parada.paradaId))
        return existeOrigen && existeDestino
    })
    
    console.log(lineaEncontrada.trayecto);
    if (lineaEncontrada) {
        mostrarRecorrido(map, lineaEncontrada.trayecto);
    }
});

