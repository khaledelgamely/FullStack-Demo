import productModel from "../../models/product.model.js"
import userModel from "../../models/user.model.js"


export const getallUsers = async (req, res, next) => {
    let allUSers = await userModel.find()
    console.log(allUSers)
    res.json({ msg: "User Got successfully", allUSers })
}

export const getAllUserProducts = async (req, res, next) => {
    let allProducts = await productModel.find({owner:req.params.id}) 
    res.json({ msg: "all products Got successfully", allProducts })
}

