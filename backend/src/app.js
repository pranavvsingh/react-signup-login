const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes/routes');
const middlewares = require('./middlewares');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1', routes);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
