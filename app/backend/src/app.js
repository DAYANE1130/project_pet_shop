const express = require('express');
require('express-async-errors');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
const routes = require('./routes/index');
const errorMiddleware = require('./middlewares/errors');

const app = express();
app.use(express.json());

app.use('/', routes.usersRoutes);
app.use('/', routes.loginRoutes);
app.use('/', routes.petsRoutes);
app.use('/', routes.donosRoutes);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(errorMiddleware.errorHandler);

module.exports = app;