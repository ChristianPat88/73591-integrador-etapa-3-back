import models from '../models/productos.model.js'

const getAll = (req, res) => {
    models.obtenerTodosLosProductos()
    res.send('GET ALL')
}

const getOne = (req, res) => {
    const id = req.params.id
    console.log(id)
    models.obtenerUnProducto()
    res.send('GET ONE')
}

const create = (req, res) => {
    const productoACrear = req.body
    console.log(productoACrear)
    models.crearUnProducto()
    res.send('CREATE PRODUCTO')
}

const update = (req, res) => {
    const id = req.params.id
    const productoAEditar = req.body
    console.log(id)
    console.log(productoAEditar)
    models.editarUnProducto()
    res.send('UPDATE PRODUCTO')
}

const remove = (req, res) => {
    const id = req.params.id
    console.log(id)
    models.eliminarProducto()
    res.send('DELETE PRODUCTO')
}

export default {
    getAll,
    getOne,
    create,
    update,
    remove
}