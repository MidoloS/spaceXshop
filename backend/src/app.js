const express = require('express');
const app = express();
const cors = require('cors');

app.set('port', 4000);

app.use(cors());
app.use(express.json());

app.use('/products', require('./routes/products'))

module.exports = app;