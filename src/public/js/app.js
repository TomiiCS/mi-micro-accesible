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

//comprobacion puntos
mostrarPuntos(map, puntos);
mostrarParadas(map, paradas);
mostrarLineas(map, lineas);