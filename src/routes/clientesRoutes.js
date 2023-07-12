const route = require('express').Router();

route.post('/cliente');
route.get('/cliente');
route.get('/cliente/:id');
route.put('/cliente/:id');
route.delete('/cliente/:id');

module.exports = route;