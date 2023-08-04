const route = require('express').Router();
const petsControllers = require('../controllers/petsControllers');

route.post('/pet', petsControllers.create);
route.get('/pets/', petsControllers.getAll);
route.get('/pet/:id', petsControllers.getById); 
route.patch('/pet/:id', petsControllers.update);
route.delete('/pet/:id', petsControllers.remove);

module.exports = route;
