const express = require('express');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(logger);

// Example route
app.get('/', (req, res) => {
  res.send('API is running');
});

app.use(errorHandler);

module.exports = app; 