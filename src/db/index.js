const db = require("./config")

const userModel = require("./schema/user")

module.exports = {
    User: userModel(db)
}
