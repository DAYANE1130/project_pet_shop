const route = require('express').Router();
const petsControllers = require('../controllers/petsControllers');

route.post('/'); // FALTA ESSA
route.get('/pets/', petsControllers.getAll);
route.get('/pet/:id', petsControllers.getById); 
route.put('/pet/:id', petsControllers.update);
route.delete('/pet/:id', petsControllers.remove);

module.exports = route;
