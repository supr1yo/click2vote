const express = require('express');
const app = express();
require('dotenv').config();
const PORT = 3000 || process.env.PORT;
const database = require( './database/database');

app.get('/', (req, res) => {
    res.send({
        message: 'Hello World!'
    });
});

database().then(() => {
    app.listen(PORT, () => {
        console.log(`Running on http://localhost:${PORT}`);
    })
})