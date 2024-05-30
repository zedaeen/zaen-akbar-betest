const User = require("../../services/user")

module.exports = {
    getAll: async (req, res) => {
        try {
            const userData = await User.find({})
            
            res.status(200).json({data: userData});
        } catch (error) {
            res.status(400).json({error: error.message})   
        }
    },
    getOneByAccountNumber: async (req, res) => {
        try {
            const { accountNumber } = req.params
            const userData = await User.getOneUserByAccount(accountNumber)
            
            res.status(200).json({data: userData});
        } catch (error) {
            res.status(400).json({error: error.message})   
        }
    },
    getOneByIdentityNumber: async (req, res) => {
        try {
            const { identityNumber } = req.params
            const userData = await User.getOneUserByIdentity(identityNumber)
            
            res.status(200).json({data: userData});
        } catch (error) {
            res.status(400).json({error: error.message})   
        }
    }
}