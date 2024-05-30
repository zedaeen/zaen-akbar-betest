const { User } = require("../../db")
module.exports = async (req, res) => {
    try {
        const data = await User.find()
        res.status(200).json({data});
    } catch (error) {
        res.status(400).json({error: error.message})   
    }
}
