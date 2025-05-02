import express from 'express'
import 'dotenv/config'
import path from 'node:path'
import cors from 'cors'
import connection from './utils/connection.js'
import routerProductos from './routers/productos.router.js'
import routerUploads from './routers/uploads.router.js'

const app = express()
const PORT = 8080
//const URI_DB = process.env.URI_LOCAL
const URI_DB = process.env.URI_REMOTA
const URL_FRONT = process.env.URL_FRONTEND_CORS


// Configuraciones
const corsConfig = {
    origin: URL_FRONT
}

// Middlewares
app.use(express.json())
app.use(express.static(path.join('public')))
app.use(cors(corsConfig))


// Rutas
app.use('/api/v1/productos', routerProductos)
app.use('/api/v1/uploads', routerUploads)


app.get('/', (req, res) => {
    res.send('Hola Mundo!')
})




/* app.all('*', (req, res) => {
    res.status(404).json({
        ruta: `${req.url}`,
        metodo: `${req.method}`,
        mensaje: "No se encontro el recurso al que estás queriendo acceder"
    })
}) */


// Arranque del servidor
app.listen(PORT, (err) => {
    if (err) throw new Error('No se pudo levantar el servidor')
    console.log(`Servidor funcionando en: http://localhost:${PORT}`)
    connection(URI_DB)
})
