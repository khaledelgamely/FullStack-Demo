import productModel from "../../models/product.model.js"


export const addProduct = async (req, res, next) => {
    req.body.img = req.file.filename
    let addProduct = await productModel.insertMany(req.body)
    res.json({ msg: "Product added successfully", addProduct })
}


export const getAllProducts = async (req, res, next) => {
    let addProduct = await productModel.find()
    res.json({ msg: "Product GOT successfully", addProduct })
}


export const getProductById = async (req, res, next) => {

    let addProduct = await productModel.findOne({ _id: req.params.id })
    res.json({ msg: "Product GOT successfully", addProduct })
}