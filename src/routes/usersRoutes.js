const route = require('express').Router();

const usersControllers = require('../controllers/usersControllers');
const validateUsers = require('../middlewares/validateUsers');

route.post('/user',
  validateUsers.validateFields,
  validateUsers.validateDataType,
  validateUsers.validateEmail,
  validateUsers.validatePassword,
  usersControllers.create);

module.exports = route;