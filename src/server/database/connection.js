import { MongoClient } from "mongodb"

const URI = "mongodb://localhost:27017"

const client = new MongoClient(URI)

let db

export async function conectarDB() {
    try {
        await client.connect()

        db = client.db("miMicroAccesible")

        console.log("MongoDB conectado")
    } catch (error) {
        console.error("Error al conectar MongoDB:", error)
    }
}

export function obtenerDB() {
    return db
}