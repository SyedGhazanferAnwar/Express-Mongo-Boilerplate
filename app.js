const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
