import express from 'express'
const userRouter = express.Router()
import { getAllUserProducts, getallUsers } from './user.Controller.js'
import { isAuth, isAuthorized } from './../../MW/isAuth.js';

userRouter.route('/')
    .get(isAuth, isAuthorized(["admin"]), getallUsers)

userRouter.get('/:id', isAuth, getAllUserProducts)

export default userRouter