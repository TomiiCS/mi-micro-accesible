import { Router } from "express"
import { obtenerDB } from "../database/connection.js"

const router = Router()

router.get("/", async (req, res) => {
    try {
        const db = obtenerDB()

        const puntos = await db
            .collection("puntos")
            .find({})
            .toArray()

        res.json(puntos)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: "Error al obtener los puntos"
        });
    }
});

export default router