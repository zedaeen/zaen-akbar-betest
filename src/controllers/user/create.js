const User = require("../../services/user")

module.exports = async (req, res) => {
    try {
        const newUser = await User.createUser(req.body)
        res.status(200).json({data: newUser});
    } catch (error) {
        res.status(400).json({error})   
    }
}