const express = require('express');
const routes = new express.Router();
const LogController = require('./Controllers/LogController');
const DeleteController = require('./Controllers/DeleteController');

routes.get('/', function(req, res) {
    res.sendFile(__dirname + '/Views/index.html');
});

routes.post('/login', LogController);

routes.delete('/delete', DeleteController);
module.exports = routes;
