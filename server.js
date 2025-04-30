import express from 'express'
import 'dotenv/config'
import connection from './utils/connection.js'
import routerProductos from './routers/productos.router.js'

const app = express()
const PORT = 8080
const URI_DB = process.env.URI_LOCAL


// Configuraciones


// Middlewares
app.use(express.json())

// Rutas
app.use('/api/v1/productos', routerProductos)


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
