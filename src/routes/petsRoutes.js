const route = require('express').Router();
const petsControllers = require('../controllers/petsController');

route.post('/');
route.get('/', petsControllers.getAll);
route.get('/:id'); // conferir
route.put('/:id');
route.delete('/:id');

module.exports = route;
