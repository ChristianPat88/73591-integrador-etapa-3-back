import mongoose from "mongoose"

// CREAMOS EL ESQUEMA

const carritoSchema = mongoose.Schema(
    {
        carrito: Array
    },
    {
        timestamps: true,
        versionKey: false
    }
)

// A partir del Schema creo el Modelo
const CarritoModel = mongoose.model('carritos', carritoSchema)

//-----------------------------------------------------------------------
/* Métodos que nos van a servir de interfaz para interactuar con la DB*/
//-----------------------------------------------------------------------

const crearCarrito = async (carrito) => {
    try {
        const carritoCreado = new CarritoModel(carrito)
        const carritoGuardado = await carritoCreado.save()
        return carritoGuardado
    } catch (error) {
        throw error
    }
}

export default {
    crearCarrito
}