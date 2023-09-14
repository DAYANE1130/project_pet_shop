const route = require('express').Router();
const donosControllers = require('../controllers/donosControllers');
const validateDonos = require('../middlewares/validateDonos');

route.post('/dono',
  validateDonos.validateFields, // CAMPOS VAZIOS EM PRIMEIRO LUGAR 
  validateDonos.validateDataType,
  donosControllers.create);
route.get('/donos/', donosControllers.getAll);
route.get('/dono/:id', donosControllers.getById);
route.patch('/dono/:id', donosControllers.update);
route.delete('/dono/:id', donosControllers.remove);

module.exports = route;