import express from 'express'
import controller from '../controllers/uploads.controller.js'
import uploadsMiddleware from '../middlewares/uploads.middleware.js'
const routerUpload = express.Router()


routerUpload.post('/', uploadsMiddleware.single('imagen'), controller.uploadImagen)

export default routerUpload