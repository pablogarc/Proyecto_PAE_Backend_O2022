const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const apiKey = process.env.API_KEY;
const port = process.env.PORT || 3000;

// Static files
app.use('/static', express.static(path.join(__dirname, 'src/')));

app.get(['/', '/home', '/index'], (req, res) => {
    res.sendFile();
})

app.listen(port, () => {
    console.log(`App is running in port ${port}`);
})