import express from 'express'
import 'dotenv/config'
import connection from './utils/connection.js'

const app = express()
const PORT = 8080
const URI_DB = process.env.URI_LOCAL


// Configuraciones


// Middlewares


// Rutas
app.get('/', (req, res) => {
    res.send('Hola Mundo!')
})


// Arranque del servidor
app.listen(PORT, (err) => {
    if (err) throw new Error('No se pudo levantar el servidor')
    console.log(`Servidor funcionando en: http://localhost:${PORT}`)
    connection(URI_DB)
})
