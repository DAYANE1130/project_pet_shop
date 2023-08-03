const express = require('express');
require('express-async-errors');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
const routes = require('./routes/index');
const errorMiddleware = require('./middlewares/error');

const app = express();
app.use(express.json());

app.use('/', routes.petsRoutes);
app.use('/', routes.clientesRoutes);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(errorMiddleware);

module.exports = app;