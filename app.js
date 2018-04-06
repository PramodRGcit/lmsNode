const express = require('express');
const routes = require('./src/routes/routes');
const path = require('path');

var app = express()

app.use(express.json());
app.use('/lms', routes);

app.set('views', path.join(__dirname+'/src/views/admin'));
app.set('view engine', 'ejs');

module.exports = app;