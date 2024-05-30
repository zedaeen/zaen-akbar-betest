const db = require("../db")

class User extends db.User {
    static async createUser(data) {
        try {
            const { 
                userName,
                accountNumber,
                emailAddress,
                identityNumber
            } = data
    
            const newUser = new db.User({
                userName,
                accountNumber,
                emailAddress,
                identityNumber
            })
    
            return await newUser.save()
        } catch (error) {
            throw error
        }
    }
    static async getOneUserByAccount(value) {
        const user = await db.User.findOne({accountNumber: value})
        return user
    }
    static async getOneUserByIdentity(value) {
        const user = await db.User.findOne({identityNumber: value})
        return user
    }
    static async updateUserById(id, data) {
        const {
            userName,
            accountNumber,
            emailAddress,
            identityNumber
        } = data
        const user = {
            userName,
            accountNumber,
            emailAddress,
            identityNumber
        }
        
        const newUser = await db.User.updateOne({ _id: id }, user)
        return newUser
    }
}

module.exports = User