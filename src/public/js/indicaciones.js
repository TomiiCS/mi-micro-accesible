export function mostrarIndicaciones(recorrido) {

    const lista = document.getElementById("lista")
    
    lista.innerHTML = ""

    let indicaciones = []

    if(recorrido.tipo === "directo") {
        indicaciones = indicacionesDirecto(recorrido)
        lista.className = "lista-directo"
    }
    else {
        indicaciones = indicacionesCombinado(recorrido)
        lista.className = "lista-combinado"
    }

    for(const indicacion of indicaciones) {
        const item = document.createElement("li")

        item.textContent = indicacion

        lista.appendChild(item)
    }

}

function indicacionesDirecto(recorrido) {

    return [
        `Tomar la linea ${recorrido.linea.nombre}`,
        `Subir en ${recorrido.paradaOrigen.nombre}`,
        `Bajar en ${recorrido.paradaDestino.nombre}`,
        `Llegaste a tu destino`
    ]

}

function indicacionesCombinado(recorrido) {

    return [
        `Primero tomar la linea ${recorrido.lineaA.nombre}`,
        `Subir en ${recorrido.paradaOrigenA.nombre}`,
        `Bajar en ${recorrido.paradaDestinoA.nombre}`,
        `Luego tomar la linea ${recorrido.lineaB.nombre}`,
        `Subir en ${recorrido.paradaOrigenB.nombre}`,
        `Bajar en ${recorrido.paradaDestinoB.nombre}`,
        `Llegaste a tu destino`
    ]

}