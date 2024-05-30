const User = require("../../services/user")

module.exports = async (req, res) => {
    try {
        const { id } = req.params
        await User.deleteOne({_id: id})
        
        res.status(200).json({data: id});
    } catch (error) {
        res.status(400).json({error: error.message})   
    }
}