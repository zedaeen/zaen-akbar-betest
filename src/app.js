const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const middlewares = require("./middlewares")
const routes = require("./routes")

// Load environment variables from .env file
dotenv.config({path: path.join(__dirname, '../.env')});

const app = express();

middlewares(app, express)

// Basic route
app.use('/api', routes(express));

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
