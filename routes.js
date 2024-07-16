const express = require("express");
const CardController = require("./controllers/CardController");
const UsuarioController = require("./controllers/UsuarioController");
const routes = express.Router();
const authenticateJWT = require('./middleware/authenticateJWT');

routes.get('/cards', authenticateJWT, CardController.findAll);
routes.post('/cards', authenticateJWT, CardController.store);
routes.get('/cards/:id', authenticateJWT, CardController.show);
routes.put('/cards/:id', authenticateJWT, CardController.update);
routes.delete('/cards/:id', authenticateJWT, CardController.destroy);

routes.get('/usuarios', UsuarioController.findAll);
routes.post('/usuarios', UsuarioController.store);
routes.get('/usuarios/:id', UsuarioController.show);
routes.put('/usuarios/:id', UsuarioController.update);
routes.delete('/usuarios/:id', UsuarioController.destroy);

module.exports = routes;