const route = require('express').Router();
// const petsControllers = require('../controllers/petsController');

route.post('/');
route.get('/');
route.get('/:id');
route.put('/:id');
route.delete('/:id');

module.exports = route;