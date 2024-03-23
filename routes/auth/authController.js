import userModel from '../../models/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req, res, next) => {
    const oldUser = await userModel.findOne({email:req.body.email})
    
    if (oldUser) return res.json({ msg: 'already exist user'})

    const addUser = new userModel(req.body)
    await addUser.save()
    res.json({ msg: 'success', addUser })
}


export const singIn = async (req, res, next) => {
    const oldUser = await userModel.findOne({email:req.body.email})
    
    if (!oldUser) return res.json({ msg: 'GO SIGN UP FIRST'})
    
    let checkPassword = await bcrypt.compare(req.body.password,oldUser.password)

    if(!checkPassword) return res.json({ msg: 'wrong password' })

    const accessToken = jwt.sign(
        {id:oldUser._id, role: oldUser.role},
        process.env.SECRETKEY,
        {expiresIn: '15m'}
        )
    
    res.json({ msg: 'success', accessToken })
}

