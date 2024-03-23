import Joi from 'joi'


export const addProductSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    desc: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    img: Joi.string()
        .alphanum()
        .min(3)
        .max(30),
        
    price: Joi.number()
            .required(),
    
    owner:Joi.string().hex().length(24).required()
})

export const getProductSchema = Joi.object({
    id:Joi.string().hex().length(24).required()
})

