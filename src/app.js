const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

const routes = require("./routes")

// Load environment variables from .env file
dotenv.config({path: path.join(__dirname, '../.env')});

const app = express();

app.use(cors())
app.use(express.json());

// Basic route
app.use('/api', routes(express));

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
