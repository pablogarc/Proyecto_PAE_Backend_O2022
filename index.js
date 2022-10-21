const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const apiKey = process.env.API_KEY;
const port = process.env.PORT || 3000;

app.use('/', require ('./routes/movies.routes'), require ('./routes/users.routes'));

app.listen(port, () => {
    console.log(`App is running in port ${port}`);
})