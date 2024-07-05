const express = require("express");
const CardController = require("./controllers/CardController");
const UsuarioController = require("./controllers/UsuarioController");
const routes = express.Router();

routes.get('/cards', CardController.findAll);
routes.post('/cards', CardController.store);
routes.get('/cards/:id', CardController.show);
routes.put('/cards/:id', CardController.update);
routes.delete('/cards/:id', CardController.destroy);

routes.get('/usuarios', UsuarioController.findAll);
routes.post('/usuarios', UsuarioController.store);
routes.get('/usuarios/:id', UsuarioController.show);
routes.put('/usuarios/:id', UsuarioController.update);
routes.delete('/usuarios/:id', UsuarioController.destroy);

module.exports = routes;