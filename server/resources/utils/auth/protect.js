const jwt = require('jsonwebtoken')

const User = require('../../model/user.model')

const verifyToken = (token) => {
    return new Promise((res, rej) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
            if(err) return rej(err)
            return res(payload)
        })
    })
}

const protect = async(req, res, next) => {
    const { authorization } = req.headers
    if(!authorization || !authorization.startsWith('Bearer ')){
        return res.status(401).json({error: true, message: "email or pass is incorrect"})
    }
    const token = authorization.split(' ')[1].trim()
    
    let payload = await verifyToken(token)

    let user = User.findById(payload.id).lean().exec() 
    if(!user){
        return res.status(401).json({error: true, message: "email or pass is incorrect"})
    }

    req.user = user
    next()
}

const newToken = (user) => {
    return jwt.sign({id: user.id}, process.env.JWT_SECRET_KEY)
}


module.exports = {
    protect,
    newToken
}