const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// Load environment variables from .env file
dotenv.config({path: path.join(__dirname, '../.env')});

const app = express();

app.use(cors())
app.use(express.json());

// Basic route
app.get('/api', (req, res) => { res.send("OK") });

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
