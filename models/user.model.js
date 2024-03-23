import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user']
    }
}, { timestamps: true })

userSchema.pre("save", function () {
    console.log(this)
    this.password = bcrypt.hashSync(this.password, 7)
})

const userModel = mongoose.model('User', userSchema)
export default userModel