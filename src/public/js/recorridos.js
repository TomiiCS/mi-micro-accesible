export function buscarRecorrido(origenId, destinoId, paradas, lineas) {

    const paradasOrigen = paradas.filter (parada => parada.puntoId === origenId)
    const paradasDestino = paradas.filter (parada => parada.puntoId === destinoId)  

    const recorrido = buscarRecorridoDirecto(paradasOrigen, paradasDestino, lineas)

    if(recorrido) {
        return recorrido
    }
    else {
        return buscarRecorridoCombinacion(paradasOrigen, paradasDestino, paradas, lineas)
    }

}

function buscarRecorridoDirecto(paradasOrigen, paradasDestino, lineas) {

    //busco en cada linea, si alguna tiene como parada origen y destino las que buscamos
    for(const linea of lineas) {

        const paradaOrigenLinea = linea.paradas.find( paradaLinea =>
            paradasOrigen.some( parada => parada._id === paradaLinea.paradaId)
        )

        const paradaDestinoLinea = linea.paradas.find( paradaLinea => 
            paradasDestino.some( parada => parada._id === paradaLinea.paradaId)
        )

         //comprobacion
        if(paradaOrigenLinea && paradaDestinoLinea && paradaOrigenLinea.indiceTrayecto < paradaDestinoLinea.indiceTrayecto) {

            const trayecto = linea.trayecto.slice(paradaOrigenLinea.indiceTrayecto, paradaDestinoLinea.indiceTrayecto + 1)
            return {
                tipo: "directo",
                linea,
                paradaOrigen: paradaOrigenLinea,
                paradaDestino: paradaDestinoLinea,
                trayecto
            }
        }
    }

    //no encontramos
    return null

}

function buscarRecorridoCombinacion(paradasOrigen, paradasDestino, paradas, lineas) {
    
    //completar!

    return null

}