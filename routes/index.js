const express = require('express');
const noteRouter = require('./notes')
const app = express();
app.use('/note', noteRouter);

module.exports = app;