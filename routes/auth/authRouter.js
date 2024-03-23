
import express from 'express'
const AuthRouter = express.Router()
import { register, singIn } from './authController.js'

AuthRouter.route('/')
            .post(register)
            .put(singIn)


export default AuthRouter