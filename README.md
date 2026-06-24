# Mi Micro Accesible

Proyecto final – Seminario de Lenguajes JavaScript  
Facultad de Informática – UNLP  
Grupo 16 – Crucianelli Tomás / Quispe Agustín  

---

## Descripción

Mi Micro Accesible es una aplicación web orientada a mejorar la accesibilidad en la consulta de información del transporte público.

Permite visualizar recorridos de micros, paradas y trayectos de forma simple y clara, con el objetivo de facilitar el acceso a la información para distintos tipos de usuarios, incluyendo personas con dificultades de accesibilidad.

El proyecto surge a partir de la hackathon “Soluciones por la inclusión 2026”.

---

## Tecnologías utilizadas

- JavaScript (ES6+)
- HTML5
- CSS3
- Node.js
- npm
- express

---

## Instalación

- Clonar el repositorio:

git clone <url-del-repositorio>

- Entrar al directorio:

cd mi-micro-accesible

- Instalar dependencias:

npm install

---

## Ejecución

Ejecutar el proyecto en modo desarrollo:

npm run dev

---

## Estructura del proyecto

mi-micro-accesible/

src/
├── public/
│   ├── css/...
│   │
│   ├── js/
│   │   ├── app.js
│   │   ├── mapa.js
│   │   ├── speech.js
│   │   ├── recorridos.js
│   │   └── models/
│   │
│   ├── assets/...
│   │
│   └── index.html
│   
└── server/
    ├── app.js
    │
    ├── routes/
    │   ├── paradas.routes.js
    │   ├── lineas.routes.js
    │   └── recorridos.routes.js
    │
    └── database/
        └── connection.js

README.md

package.json

---

## Funcionalidades

- Búsqueda de líneas de micro
- Visualización de recorridos
- Visualización de paradas
- Información clara y estructurada
- Interfaz accesible
- Uso de datos simulados

---

## Accesibilidad

El proyecto prioriza:

- Navegación simple
- Jerarquía visual clara
- Uso de HTML semántico
- Diseño de baja carga cognitiva

---

## Flujo de trabajo

Se utiliza Git para control de versiones.

Se trabaja con ramas para nuevas funcionalidades y luego se integran mediante merge al branch principal.

---

## Estado del proyecto

En desarrollo
