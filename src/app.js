const express = require('express');
const petsRoutes = require('./routes/petsRoutes');
const clientesRoutes = require('./routes/clientesRoutes');

const app = express();
app.use(express.json());

app.use('/pets', petsRoutes);
app.use('/clientes', clientesRoutes);

module.exports = app;