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
}

module.exports = User