const uploadImagen = (req, res) => {
    const imagen = req.file

    if (!imagen) {
        return res.status(400).json({
            mensaje: 'No se cargó la imagen'
        })
    }
    //                        http o https       localhost:8080             nombre del archivo
    const urlCompletaBack = `${req.protocol}://${req.get('host')}/uploads/${imagen.filename}`

    res.status(201).json({
        foto: urlCompletaBack
    })
}

export default {
    uploadImagen
}