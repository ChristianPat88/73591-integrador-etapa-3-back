const uploadImagen = (req, res) => {
    const imagen = req.file

    if (!imagen) {
        return res.status(400).json({
            mensaje: 'No se cargó la imagen'
        })
    }

    res.status(200).json({
        foto: imagen.filename
    })
}

export default {
    uploadImagen
}