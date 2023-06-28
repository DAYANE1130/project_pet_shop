const route = require('express').Router();

route.post('/pet');
route.get('/pet');
route.put('/pet');
route.delete('/pet');

module.exports = route;
