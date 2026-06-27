import {
    obtenerPuntos,
    obtenerParadas,
    obtenerLineas
} from "./services/api.js";

import {
    crearMapa,
    mostrarPuntos,
    mostrarParadas,
    mostrarLineas
} from "./mapa.js";

const map = crearMapa();

const puntos = await obtenerPuntos();
const paradas = await obtenerParadas();
const lineas = await obtenerLineas();

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
    cargarSelector(selectorDestino,puntos, selectorOrigen.value)
})

