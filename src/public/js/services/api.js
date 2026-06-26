export async function obtenerPuntos() {
    const respuesta = await fetch("/puntos")
    return respuesta.json()
}

export async function obtenerParadas() {
    const respuesta = await fetch("/paradas")
    return respuesta.json()
}

export async function obtenerLineas() {
    const respuesta = await fetch("/lineas")
    return respuesta.json()
}