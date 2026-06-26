import { Router } from "express"
import { obtenerDB } from "../database/connection.js"

const router = Router()

router.get("/", async (req, res) => {
    try {
        const db = obtenerDB()

        const paradas = await db
            .collection("paradas")
            .find({})
            .toArray()

        res.json(paradas)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: "Error al obtener las paradas"
        });
    }
});

export default router