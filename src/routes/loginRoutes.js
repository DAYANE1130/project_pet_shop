const route = require('express').Router();
const loginController = require('../controllers/loginController');

route.post('/login', loginController.loginUser);

module.exports = route;