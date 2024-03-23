import express from 'express'
import 'dotenv/config'
import { corsOptions } from './config/corsOptions.js'
import AuthRouter from './routes/auth/authRouter.js'
import productRouter from './routes/products/productRouter.js'
import mongoose from 'mongoose'
import cors from 'cors'
import userRouter from './routes/user/user.Router.js'
const server = express()
const PORT = process.env.PORT || 3000


server.use(express.static("uploads"))
server.use(express.json())

mongoose
    .connect(process.env.dbURI)
    .then(() => {
        console.log("db connected");
        server.listen(PORT, () => {
            console.log(`server is listening ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("db problem" + error);
    });


server.use(cors(corsOptions))
server.use('/auth', AuthRouter)
server.use('/user', userRouter)
server.use('/product', productRouter)




server.use((req, res, next) => {
    res.status(404).json({ message: 'NOT FOUND' });
})
server.use((err, req, res, next) => {
    res.status(err.status || 505).json({ message: err + "" });
})

