const { verifyToken } = require("../services/auth")

module.exports = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        
        if (token == null) return res.status(401).json({data: "Unauthorized"})
        
        const decoded = await verifyToken(token)
        
        if (!decoded) return res.sendStatus(403)

        next()
    } catch (error) {
        res.status(400).json({error})   
    }
}


