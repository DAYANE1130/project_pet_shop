const express = require('express');
require('express-async-errors');
const petsRoutes = require('./routes/petsRoutes');
const clientesRoutes = require('./routes/clientesRoutes');
const errorMiddleware = require('./middlewares/error');

// const INTERNAL_SERVER_ERROR = 500;

const app = express();
app.use(express.json());

app.use('/pets', petsRoutes);
app.use('/clientes', clientesRoutes);

app.use(errorMiddleware);

module.exports = app;