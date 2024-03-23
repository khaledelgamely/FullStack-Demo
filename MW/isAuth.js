import jwt from 'jsonwebtoken';

export const isAuth = async (req, res, next) => {
        const { token } = req.headers
        // let token = req.header("token")
        if (!token) return res.json({ msg: "please provide a token"})

        jwt.verify(token, process.env.SECRETKEY, (err, data) => {
            if (err) return res.json({ msg: "noooooooooo", err:err.message })
            req.user = data
            next()
        })

}

export const isAuthorized = (permitted) =>{ 
    return (req, res, next) => {
        if(permitted.includes(req.user.role)) next()
        else return res.json({msg: "You are not authorized"})
    } 
}
