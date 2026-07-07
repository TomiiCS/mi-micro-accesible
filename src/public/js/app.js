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

import { mostrarIndicaciones } from "./indicaciones.js"

import { buscarRecorrido } from "./recorridos.js"

import { leerRecorrido,
         cambiarModoLectura,
         anunciar       
} from "./speech.js"


const map = crearMapa()

const puntos = await obtenerPuntos()
const paradas = await obtenerParadas()
const lineas = await obtenerLineas()

mostrarPuntos(map, puntos)

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

const botonBuscar = document.getElementById("buscar")

botonBuscar.addEventListener("click", () => {
    
    const origenId = selectorOrigen.value
    const destinoId = selectorDestino.value

    const recorrido = buscarRecorrido(origenId, destinoId, paradas, lineas)

    if(recorrido) {
        mostrarRecorrido(map, recorrido)
        mostrarIndicaciones(recorrido)
    }
    else {
        anunciar("No se encontró un recorrido.")
        alert("No se encontró un recorrido") 
    }
});

const botonEscucharRecorrido = document.getElementById("escuchar-recorrido")

botonEscucharRecorrido.addEventListener("click", leerRecorrido)

const botonEscucharPagina = document.getElementById("escuchar-pagina")

botonEscucharPagina.addEventListener("click", cambiarModoLectura)

const botonContraste = document.getElementById("boton-contraste")

botonContraste.addEventListener("click", () => {

    document.body.classList.toggle("alto-contraste")

})


const botonDisminuir = document.getElementById("disminuir-fuente")
const botonNormal = document.getElementById("restablecer-fuente")
const botonAumentar = document.getElementById("aumentar-fuente")

let escala = 100 // porcentaje, 100% = tamaño normal (16px base)

function actualizarFuente() {
    document.documentElement.style.fontSize = `${escala}%`
}

botonAumentar.addEventListener("click", () => {
    if (escala >= 150) return
    escala += 10
    actualizarFuente()
})

botonDisminuir.addEventListener("click", () => {
    if (escala <= 70) return
    escala -= 10
    actualizarFuente()
})

botonNormal.addEventListener("click", () => {
    escala = 100
    actualizarFuente()
})