const User = require("../../services/user")

module.exports = async (req, res) => {
    try {
        const { id } = req.params

        const userData = await User.updateUserById(id, req.body)
        
        res.status(200).json({data: userData});
    } catch (error) {
        res.status(400).json({error: error.message})   
    }
}