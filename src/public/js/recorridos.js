export function buscarRecorrido(origenId, destinoId, paradas, lineas) {

    const paradasOrigen = paradas.filter (parada => parada.puntoId === origenId)
    const paradasDestino = paradas.filter (parada => parada.puntoId === destinoId)  

    const recorrido = buscarRecorridoDirecto(paradasOrigen, paradasDestino, lineas)

    //caso directo
    if(recorrido) {
        return recorrido
    }
    //caso combinado
    else {
        return buscarRecorridoCombinacion(paradasOrigen, paradasDestino, paradas, lineas)
    }

}

function buscarRecorridoDirecto(paradasOrigen, paradasDestino, lineas) {

    //busco en cada linea, si alguna tiene como parada origen y destino los que buscamos
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
    
    //busco en lineas, si alguna tiene como origen el que buscamos
    for(const lineaA of lineas) {

        const origen = lineaA.paradas.find( paradaLinea =>
            paradasOrigen.some( parada => parada._id === paradaLinea.paradaId)
        )

        if(origen) {

            //tomo la parada de la linea encontrada
            for(const paradaLineaA of lineaA.paradas) {

                const paradaA = paradas.find( parada => parada._id === paradaLineaA.paradaId)

                if(paradaA) {

                    //tomo el id del punto de combinacion
                    const puntoId = paradaA.puntoId

                    //tomo paradas del punto de combinacion
                    const paradasCombinacion = paradas.filter( parada => parada.puntoId === puntoId)

                    //excluyo la linea encontrada de la lista de lineas para buscar la segunda linea
                    const otrasLineas = lineas.filter(linea => linea._id !== lineaA._id)

                    //busco segundo recorrido
                    const segundoRecorrido = buscarRecorridoDirecto(paradasCombinacion, paradasDestino, otrasLineas)

                    if(segundoRecorrido) {

                        //busco primer recorrido
                        const primerRecorrido = buscarRecorridoDirecto(paradasOrigen, paradasCombinacion, [lineaA])

                        if(primerRecorrido) {

                            return {
                                tipo: "combinacion",
                                lineaA: primerRecorrido.linea,
                                lineaB: segundoRecorrido.linea,
                                puntoCombinacion: puntoId,

                                paradaOrigenA: primerRecorrido.paradaOrigen,
                                paradaDestinoA:primerRecorrido.paradaDestino,
                                trayectoA: primerRecorrido.trayecto,

                                paradaOrigenB: segundoRecorrido.paradaOrigen,
                                paradaDestinoB: segundoRecorrido.paradaDestino,
                                trayectoB: segundoRecorrido.trayecto
                            }

                        }

                    }

                }

            }

        }

    }

    //no encontramos
    return null

}