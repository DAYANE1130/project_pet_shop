const route = require('express').Router();
const petsControllers = require('../controllers/petsControllers');
const validatePets = require('../middlewares/validatePets');
const validateToken = require('../middlewares/validateToken');

route.post('/pet',
  validatePets.validateFields,
  validatePets.validateDataType,
  validateToken.verifyToken,
  petsControllers.create);
route.get('/pets/', petsControllers.getAll);
route.get('/pet/:id', petsControllers.getById);

route.delete('/pet/:id', petsControllers.remove);
route.patch('/pet/:id',
  // validatePets.validateFields,
  // validatePets.validateFieldsUpdate,
  // validatePets.validateDataType,

  petsControllers.update);

module.exports = route;
