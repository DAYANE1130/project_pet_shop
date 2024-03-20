const route = require('express').Router();
const loginController = require('../controllers/loginController');
const validateUsers = require('../middlewares/validateUsers');

route.post('/login',
validateUsers.validateFieldsLogin, 
validateUsers.validateEmail, 
validateUsers.validatePassword, 
loginController.loginUser);

module.exports = route;