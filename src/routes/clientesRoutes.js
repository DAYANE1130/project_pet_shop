const route = require('express').Router();

route.post('/');
route.get('/');
route.get('/:id');
route.put('/:id');
route.delete('/:id');

module.exports = route;