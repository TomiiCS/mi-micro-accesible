//se ejecuta una vez para cargar datos iniciales para mongo
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017")

async function seed() {
    
    try {
        //conectarse
        await client.connect()
        const db = client.db("mi-micro-accesible")

        //limpiar base
        await db.collection("puntos").deleteMany({})
        await db.collection("paradas").deleteMany({})
        await db.collection("lineas").deleteMany({})

        //puntosId
        const estacionId = new ObjectId()
        const plazaMorenoId = new ObjectId()
        const plazaRochaId = new ObjectId()
        const hospitalId = new ObjectId()

        //paradasId
        const oeste11EstacionId = new ObjectId()
        const oeste11PlazaMorenoId = new ObjectId()

        const oeste23PlazaMorenoId = new ObjectId()
        const oeste23PlazaRochaId = new ObjectId()

        const este11PlazaRochaId = new ObjectId()
        const este11HospitalId = new ObjectId()

        const linea338HospitalId = new ObjectId()
        const linea338EstacionId = new ObjectId()

        const linea506EstacionId = new ObjectId()
        const linea506HospitalId = new ObjectId()

        const linea307PlazaMorenoId = new ObjectId()
        const linea307EstacionId = new ObjectId()

        const linea214PlazaRochaId = new ObjectId()
        const linea214PlazaMorenoId = new ObjectId()

        const este11BHospitalId = new ObjectId()
        const este11BPlazaRochaId = new ObjectId()    
        
        //lineasId
        const oeste11Id = new ObjectId()
        const oeste23Id = new ObjectId()
        const este11Id = new ObjectId()
        const linea338Id = new ObjectId()
        const linea506Id = new ObjectId()
        const linea307Id = new ObjectId()
        const linea214Id = new ObjectId()
        const este11BId = new ObjectId()

        //puntos
        const puntos = [
            {
                _id: plazaMorenoId,
                nombre: "Plaza Moreno",
                lat: -34.9213,
                lng: -57.9545
            },
            {
                _id: plazaRochaId,
                nombre: "Plaza Rocha",
                lat: -34.9208,
                lng: -57.9415
            },
            {
                _id: estacionId,
                nombre: "Estacion de tren",
                lat: -34.9045,
                lng: -57.9495
            },
            {
                _id: hospitalId,
                nombre: "Hospital San Martin",
                lat: -34.9224,
                lng: -57.9231
            }
        ]

        //paradas
        const paradas = [
            {
                _id: oeste11EstacionId,
                nombre: "Parada Estacion de tren diagonal 80 - Oeste 11",
                lat: -34.9055,
                lng: -57.9492,
                puntoId: estacionId
            },
            {
                _id: oeste11PlazaMorenoId,
                nombre: "Parada Plaza Moreno calle 50 - Oeste 11",
                lat: -34.9206,
                lng: -57.9561,
                puntoId: plazaMorenoId
            },
            {
                _id: oeste23PlazaMorenoId,
                nombre: "Parada Plaza Moreno calle 54 - Oeste 23",
                lat: -34.922,
                lng: -57.9529,
                puntoId: plazaMorenoId
            },
            {
                _id: oeste23PlazaRochaId,
                nombre: "Parada Plaza Rocha - Oeste 23",
                lat: -34.9217,
                lng: -57.9414,
                puntoId: plazaRochaId
            },
            {
                _id: este11PlazaRochaId,
                nombre: "Parada Plaza Rocha - Este 11",
                lat: -34.9217,
                lng: -57.9413,
                puntoId: plazaRochaId
            },
            {
                _id: este11HospitalId,
                nombre: "Parada Hospital San Martin avenida 1 - Este 11",
                lat: -34.9228,
                lng: -57.9254,
                puntoId: hospitalId
            },
            {
                _id: linea338HospitalId,
                nombre: "Parada Hospital San Martin avenida 1 - 338",
                lat: -34.9229,
                lng: -57.9248,
                puntoId: hospitalId
            },
            {
                _id: linea338EstacionId,
                nombre: "Parada Estacion de tren calle 43 - 338",
                lat: -34.9048,
                lng: -57.951,
                puntoId: estacionId
            },
            {
                _id: linea506EstacionId,
                nombre: "Parada Estacion de Tren avenida 1 - 506",
                lat: -34.9041,
                lng: -57.9505,
                puntoId: estacionId
            },
            {
                _id: linea506HospitalId,
                nombre: "Parada Hospital San Martin avenida 1 - 506",
                lat: -34.9235,
                lng: -57.9246,
                puntoId: hospitalId
            },
            {
                _id: linea307PlazaMorenoId,
                nombre: "Parada Plaza Moreno calle 54 - 307",
                lat: -34.9226,
                lng: -57.9535,
                puntoId: plazaMorenoId
            },
            {
                _id: linea307EstacionId,
                nombre: "Parada Estacion de Tren avenida 44 - 307",
                lat: -34.9055,
                lng: -57.9493,
                puntoId: estacionId
            },
            {
                _id: linea214PlazaRochaId,
                nombre: "Parada Plaza Rocha - 214 D",
                lat: -34.9201,
                lng: -57.9419,
                puntoId: plazaRochaId
            },
            {
                _id: linea214PlazaMorenoId,
                nombre: "Parada Plaza Moreno calle 50 - 214 D",
                lat: -34.92,
                lng: -57.9555,
                puntoId: plazaMorenoId
            },
            {
                _id: este11BHospitalId,
                nombre: "Parada Hospital San Martin avenida 1 - Este 11",
                lat: -34.9229,
                lng: -57.9248,
                puntoId: hospitalId
            },
            {
                _id: este11BPlazaRochaId,
                nombre: "Parada Plaza Rocha - Este 11",
                lat: -34.9201,
                lng: -57.942,
                puntoId: plazaRochaId
            }
        ]

        //lineas
        const lineas = [
            {
                _id: oeste11Id,
                nombre: "Oeste 11",
                paradas: [
                    {
                        paradaId: oeste11EstacionId,
                        indiceTrayecto: 0
                    },
                    {
                        paradaId: oeste11PlazaMorenoId,
                        indiceTrayecto: 8
                    }
                ],
                trayecto: [
                    [-34.9054, -57.9491],
                    [-34.9138, -57.9486],
                    [-34.9149, -57.9498],
                    [-34.9154, -57.9491],
                    [-34.92, -57.9541],
                    [-34.9198, -57.9544],
                    [-34.9197, -57.9547],
                    [-34.9198, -57.9551],
                    [-34.9206, -57.956]
                ]
            },
            {
                _id: oeste23Id,
                nombre: "Oeste 23",
                paradas: [
                    {
                        paradaId: oeste23PlazaMorenoId,
                        indiceTrayecto: 0
                    },
                    {
                        paradaId: oeste23PlazaRochaId,
                        indiceTrayecto: 10
                    }
                ],
                trayecto: [
                    [-34.922, -57.953],
                    [-34.9214, -57.9523],
                    [-34.9168, -57.9471],
                    [-34.9203, -57.9424],
                    [-34.9204, -57.9423],
                    [-34.9207, -57.9425],
                    [-34.9209, -57.9425],
                    [-34.9211, -57.9424],
                    [-34.9214, -57.9422],
                    [-34.9215, -57.9421],
                    [-34.9216, -57.9417],
                    [-34.9216, -57.9414]
                ]
            },
            {
                _id: este11Id,
                nombre: "Este 11",
                paradas: [
                    {
                        paradaId: este11PlazaRochaId,
                        indiceTrayecto: 0
                    },
                    {
                        paradaId: este11HospitalId,
                        indiceTrayecto: 7
                    }
                ],
                trayecto: [
                    [-34.9216, -57.9413],
                    [-34.9214, -57.9409],
                    [-34.9213, -57.9408],
                    [-34.9209, -57.9406],
                    [-34.9204, -57.9296],
                    [-34.9209, -57.9291],
                    [-34.9208, -57.928],
                    [-34.9227, -57.9254]
                ]
            },
            {
                _id: linea338Id,
                nombre: "338",
                paradas: [
                    {
                        paradaId: linea338HospitalId,
                        indiceTrayecto: 0
                    },
                    {
                        paradaId: linea338EstacionId,
                        indiceTrayecto: 8
                    }
                ],
                trayecto: [
                    [-34.923, -57.9248],
                    [-34.9207, -57.9279],
                    [-34.9203, -57.9275],
                    [-34.9201, -57.9275],
                    [-34.9197, -57.9281],
                    [-34.9198, -57.9291],
                    [-34.9043, -57.9501],
                    [-34.9043, -57.9504],
                    [-34.9048, -57.9509]
                ]
            },
            {
                _id: linea506Id,
                nombre: "506",
                paradas: [
                    {
                        paradaId: linea506EstacionId,
                        indiceTrayecto: 0
                    },
                    {
                        paradaId: linea506HospitalId,
                        indiceTrayecto: 12
                    }
                ],
                trayecto: [
                    [-34.904, -57.9505],
                    [-34.9041, -57.9504],
                    [-34.9043, -57.9504],
                    [-34.9051, -57.9513],
                    [-34.9068, -57.9491],
                    [-34.9068, -57.9489],
                    [-34.906, -57.9479],
                    [-34.9199, -57.9292],
                    [-34.9203, -57.9296],
                    [-34.9205, -57.9296],
                    [-34.9209, -57.9291],
                    [-34.9208, -57.9279],
                    [-34.9234, -57.9245]
                ]
            },
            {
                _id: linea307Id,
                nombre: "307",
                paradas: [
                    {
                        paradaId: linea307PlazaMorenoId,
                        indiceTrayecto: 0
                    },
                    {
                        paradaId: linea307EstacionId,
                        indiceTrayecto: 5
                    }
                ],
                trayecto: [
                    [-34.9226, -57.9536],
                    [-34.9167, -57.9471],
                    [-34.9111, -57.9545],
                    [-34.9107, -57.9543],
                    [-34.9101, -57.9545],
                    [-34.9054, -57.9494]
                ]
            },
            {
                _id: linea214Id,
                nombre: "214 D",
                paradas: [
                    {
                        paradaId: linea214PlazaRochaId,
                        indiceTrayecto: 0
                    },
                    {
                        paradaId: linea214PlazaMorenoId,
                        indiceTrayecto: 8
                    }
                ],
                trayecto: [
                    [-34.9201, -57.9419],
                    [-34.9203, -57.9422],
                    [-34.9204, -57.9423],
                    [-34.9208, -57.9425],
                    [-34.9212, -57.952],
                    [-34.9213, -57.9521],
                    [-34.9213, -57.9524],
                    [-34.9196, -57.9549],
                    [-34.9201, -57.9555]
                ]
            },
            {
                _id: este11BId,
                nombre: "Este 11",
                paradas: [
                    {
                        paradaId: este11BHospitalId,
                        indiceTrayecto: 0
                    },
                    {
                        paradaId: este11BPlazaRochaId,
                        indiceTrayecto: 11
                    }
                ],
                trayecto: [
                    [-34.9229, -57.9249],
                    [-34.9207, -57.9279],
                    [-34.9203, -57.9275],
                    [-34.9201, -57.9275],
                    [-34.9197, -57.9281],
                    [-34.9198, -57.9291],
                    [-34.9203, -57.9296],
                    [-34.9208, -57.9406],
                    [-34.9204, -57.9408],
                    [-34.9202, -57.941],
                    [-34.9201, -57.9416],
                    [-34.9202, -57.9419]
                ]
            }
        ]

        //insertar datos
        await db.collection("puntos").insertMany(puntos)
        await db.collection("paradas").insertMany(paradas)
        await db.collection("lineas").insertMany(lineas)

        console.log("Base de datos inicializada")
    }
    finally {
        await client.close()
    }

}

seed()