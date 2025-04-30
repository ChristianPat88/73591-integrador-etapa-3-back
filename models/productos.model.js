import mongoose from "mongoose"

//Creamos esquema
const ProductoEsquema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        foto: String,
        descripcion: String,
        precio: String,
        stock: String,
        envio: Boolean
    },
    {

    }
)

// Modelo a partir del esquema
const ProductoModelo = mongoose.model('productos', ProductoEsquema)


const obtenerTodosLosProductos = () => {
    console.log('obtenerTodosLosProductos')
}

const obtenerUnProducto = (id) => {
    console.log('obtenerUnProducto')
}

const crearUnProducto = (productoNuevo) => {
    console.log('crearUnProducto')
}

const editarUnProducto = (productoEditado) => {
    console.log('editarUnProducto')
}

const eliminarProducto = (id) => {
    console.log('eliminarProducto')
}

export default {
    obtenerTodosLosProductos,
    obtenerUnProducto,
    crearUnProducto,
    editarUnProducto,
    eliminarProducto
}