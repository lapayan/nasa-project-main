const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const api = require('./routes/api');

const app = express();

app.use(cors({
  origin: '137.184.114.190',
}));
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/v1', api);

app.get('/*', (req, res) => {
  res.send("Hello World!");
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;