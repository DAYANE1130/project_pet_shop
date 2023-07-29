const express = require('express');
require('express-async-errors');
const petsRoutes = require('./routes/petsRoutes');
const clientesRoutes = require('./routes/clientesRoutes');
const errorMiddleware = require('./middlewares/error');

const app = express();
app.use(express.json());

app.use('/', petsRoutes);
app.use('/clientes', clientesRoutes);

app.use(errorMiddleware);

module.exports = app;