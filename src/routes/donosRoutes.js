const route = require('express').Router();
const donosControllers = require('../controllers/donosControllers');

route.post('/dono', donosControllers.create);
route.get('/donos/', donosControllers.getAll);
route.get('/dono/:id', donosControllers.getById);
route.put('/:id');
route.delete('/dono/:id', donosControllers.remove);

module.exports = route;