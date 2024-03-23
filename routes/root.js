

import express from 'express'
const RootRouter = express.Router()


RootRouter.get('/', (req, res) => {
    res.send("Hello To Full Stack Demo App")
})

export default RootRouter