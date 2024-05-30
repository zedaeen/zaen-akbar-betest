const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path: path.join(__dirname, '../../.env')});

const url = process.env.MONGO_URL ;
const dbName = process.env.MONGO_DB_NAME;
const mongoUrl = `${url}/${dbName}`

// Connect to MongoDB using Mongoose
mongoose.connect(mongoUrl, {autoIndex: true})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});

module.exports = mongoose