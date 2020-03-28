const express = require('express');
const ongController = require('./controller/ongControlador');
const incidentsController = require('./controller/incidentsControlador');
const profileController = require('./controller/profileControlador');
const sessionController = require('./controller/sessionControlador');

const rotas = express.Router();

rotas.get('/ongs', ongController.list);
rotas.post('/ongs', ongController.create);

rotas.post('/casos', incidentsController.create);
rotas.get('/casos', incidentsController.list);
rotas.delete('/casos/:id', incidentsController.delete);

rotas.get('/profile', profileController.list);

rotas.post('/login', sessionController.create);



 module.exports = rotas;