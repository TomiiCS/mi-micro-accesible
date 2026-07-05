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
- MongoDB

---

## Instalación

- Clonar el repositorio:

git clone "url-del-repositorio"

- Entrar al directorio:

cd mi-micro-accesible

- Instalar dependencias:

npm install

- Instalar MongoDB Community Server 

- Iniciar el servidor de MongoDB (por defecto en localhost:27017)

- Inicializar la base de datos con los datos simulados: 

node scripts/seed.js

---

## Ejecución

Ejecutar el proyecto en modo desarrollo:

npm run dev

---

## Estructura del proyecto

```text
mi-micro-accesible/
│   
├── scripts/
│   └── seed.js    
│
├── src/
│   ├── public/
│   │   ├── assets/...
│   │   │
│   │   ├── css/
│   │   │   └── stylesheet.css
│   │   │
│   │   ├── js/
│   │   │   ├── services/
│   │   │   │   └── api.js
│   │   │   │         
│   │   │   ├── app.js
│   │   │   ├── indicaciones.js
│   │   │   ├── mapa.js
│   │   │   ├── recorridos.js
│   │   │   └── speech.js
│   │   │
│   │   └── index.html
│   │   
│   └── server/
│       ├── database/
│       │   └── connection.js
│       │
│       ├── routes/
│       │   ├── lineas.routes.js
│       │   ├── paradas.routes.js
│       │   └── puntos.routes.js
│       │
│       └── app.js
│
├── package-lock.json
│
├── package.json
│
└── README.md
```
---

## Funcionalidades

- Búsqueda de recorridos de micros entre puntos
- Visualización de recorridos, paradas y puntos sobre el mapa
- Idicaciones para los recorridos
- Interfaz accesible
- Uso de datos simulados

---

## Accesibilidad

El proyecto prioriza:

- Navegación simple
- Jerarquía visual clara
- Uso de HTML semántico
- Diseño de baja carga cognitiva
- Alto contraste
- Ajuste del tamaño de la fuente
- Lectura por voz de la interfaz y de indicaciones

---

## Flujo de trabajo

Se utiliza Git para control de versiones.

Se trabaja con ramas para nuevas funcionalidades y luego se integran mediante merge al branch principal.
