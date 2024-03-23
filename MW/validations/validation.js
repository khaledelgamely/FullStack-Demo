
export const validation = (validationSchema) => {
    return (req, res, next) => {

        let inputs = {...req.body, ...req.query, ...req.params}

            let { error } = validationSchema.validate(inputs, { abortEarly: false })
            if (error) {
                let errors = error.details.map(error => error.message)
                return res.send({ error: errors })
            } 
            next()
    }
}