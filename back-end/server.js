const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// setup express
const app = express();

// setup body parser middleware to conver to JSON and handle URL encoded forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors());

// connect to the mongodb database
mongoose.connect('mongodb://localhost:27017/swim-school', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.get('/WelcomeMessage', (req,res) => {

    const WelcomeMessage = "Test";

    res.send(WelcomeMessage);
});

app.post('/WelcomeMessage', (req,res) => {
    console.log(req.body);
});

app.listen(3002, () => console.log('Server listening on port 3002!'));