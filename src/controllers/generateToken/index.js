const { generateToken } = require("../../services/auth")

module.exports = async (req, res) => {
    try {
        const jwt = await generateToken()
        res.status(200).json({data: jwt});
    } catch (error) {
        res.status(400).json({error})   
    }
}