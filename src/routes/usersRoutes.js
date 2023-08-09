const route = require('express').Router();

const usersControllers = require('../controllers/usersControllers');

route.post('/user', usersControllers.create);

module.exports = route;