async function obtenerPuntos() {
    const respuesta = await fetch("/puntos")
    return respuesta.json()
}

async function obtenerParadas() {
    const respuesta = await fetch("/paradas")
    return respuesta.json()
}

async function obtenerLineas() {
    const respuesta = await fetch("/lineas")
    return respuesta.json()
}

const puntos = obtenerPuntos()
const paradas = obtenerParadas()
const lineas = obtenerLineas()

//comprobacion de obtencion de datos al backend
console.log(puntos, paradas, lineas)