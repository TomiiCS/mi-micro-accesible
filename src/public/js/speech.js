function hablar(texto) {
    speechSynthesis.cancel()    

    const voz = new SpeechSynthesisUtterance(texto)
    voz.lang = "es-AR"

    speechSynthesis.speak(voz)
}

export function leerRecorrido () {

    const pasos = document.querySelectorAll("#lista li")
    
    if (pasos.length === 0) {
      if (!modoLectura) return
      hablar("No hay un recorrido para leer.")
      return;
    }

    const texto = [... pasos]
    .map((paso,indice) =>  `Paso ${indice + 1}. ${paso.textContent}.`)
    .join(". ")

    hablar(texto)
}

let modoLectura = false

export function cambiarModoLectura () {
    modoLectura = !modoLectura
    
    const boton = document.getElementById("escuchar-pagina")
    
    boton.classList.toggle("activo")
   
    boton.setAttribute("aria-pressed", modoLectura)

    const textoBoton  = document.getElementById("texto-escuchar")
    
    textoBoton.textContent = modoLectura
    ? "Escuchar página (Activado)"
    : "Escuchar página"

    modoLectura ? hablar("Modo lectura activado.") : speechSynthesis.cancel()
}

const selectorOrigen = document.getElementById("origen")
const selectorDestino = document.getElementById("destino")
const botonBuscar = document.getElementById("buscar")
const botonContraste = document.getElementById("boton-contraste")
const botonEscucharRecorrido = document.getElementById("escuchar-recorrido") // No lo use por un problema al pisarse con otro lector, y buguearse.

const botonDisminuir = document.getElementById("disminuir-fuente")
const botonNormal = document.getElementById("restablecer-fuente")
const botonAumentar = document.getElementById("aumentar-fuente")

const mapa = document.getElementById("mapa")

function agregarLectura(elemento, mensaje) {
    elemento.addEventListener("focus", () => {

        if (!modoLectura) return

        hablar(mensaje)
    })
}

agregarLectura(selectorOrigen, "Punto de origen.")
agregarLectura(selectorDestino, "Punto de destino.")
agregarLectura(botonBuscar, "Botón Buscar recorrido.")
agregarLectura(botonContraste, "Botón Alto contraste.")
agregarLectura(botonDisminuir, "Disminuir tamaño de letra.")
agregarLectura(botonNormal, "Restablecer tamaño de letra.")
agregarLectura(botonAumentar, "Aumentar tamaño de letra.")
agregarLectura(mapa, "Mapa del recorrido.")

selectorOrigen.addEventListener("change", () => {

    if (!modoLectura) return

    const opcion = selectorOrigen.options[selectorOrigen.selectedIndex].text

    hablar(`Origen seleccionado. ${opcion}.`)
})

selectorDestino.addEventListener("change", () => { 
    if (!modoLectura) return

    const opcion = selectorDestino.options[selectorDestino.selectedIndex].text

    hablar(`Destino seleccionado. ${opcion}.`)
})

export function anunciar(texto) {
    
    if (!modoLectura) return

    hablar(texto)
}