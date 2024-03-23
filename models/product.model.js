
import mongoose, { Mongoose } from "mongoose";


const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
})


productSchema.post('init', (document) =>{
    console.log(document)
    document.img = 'http://localhost:5000/product/' + document.img
})

const productModel = mongoose.model('Product', productSchema)

export default productModel