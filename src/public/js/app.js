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