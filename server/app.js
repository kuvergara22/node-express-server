// import files and packages up here

const express = require('express');

const data = require('./data.json');

const morgan = require('morgan')


const app = express();


app.use(morgan('dev'));


const port = 3000;

// add your routes and middleware below

app.get('/', function(req,res) {
    res.status(200).send('hello world');
});

app.get('/data', function(req, res,){
 res.status(200).json(data);
 
});


// finally export the express application

module.exports = app;