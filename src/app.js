const express = require('express');
require('express-async-errors');
const petsRoutes = require('./routes/petsRoutes');
const clientesRoutes = require('./routes/clientesRoutes');

// const INTERNAL_SERVER_ERROR = 500;

const app = express();
app.use(express.json());

app.use('/pets', petsRoutes);
app.use('/clientes', clientesRoutes);

app.use((error, req, res, _next) => {
  const status = error.status || 500;
  const message = 'Erro inesperado, tente mais tarde';
  console.error(error);
  res.status(status).json({ error: message });
});

module.exports = app;