import express from 'express'
const productRouter = express.Router()
import { isAuth } from '../../MW/isAuth.js'
import { addIMage} from '../../MW/fileUpload.js'
import { addProduct, getProductById, getAllProducts  } from "./productController.js"
import {validation} from '../../MW/validations/validation.js'
import {addProductSchema, getProductSchema} from "../../MW/validations/productValidation.js"

productRouter.route('/')
    .post(addIMage('image'), validation(addProductSchema), addProduct)
    .get(getAllProducts)
productRouter.get('/:id', isAuth, validation(getProductSchema), getProductById)


export default productRouter