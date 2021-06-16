const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// setup express
const app = express();

app.get('/', (req,res) => res.send('test'))

app.listen(3002, () => console.log('Server listening on port 3002!'));