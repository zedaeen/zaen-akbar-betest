const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path: path.join(__dirname, '../../.env')});

const generateToken = async () => {
    return jwt.sign({auth: "auth"}, process.env.TOKEN_SECRET, { expiresIn: '1800s' })
}

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.TOKEN_SECRET)   
    } catch (error) {
        throw error
    }
}

module.exports = { generateToken, verifyToken }