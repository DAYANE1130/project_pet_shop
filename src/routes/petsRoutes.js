const route = require('express').Router();

route.post('/pet');
route.get('/pet');
route.get('/pet/:id'); // conferir
route.put('/pet/:id');
route.delete('/pet/:id');

module.exports = route;
