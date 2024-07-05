const express = require("express");
const CardController = require("./controllers/CardController");
const routes = express.Router();

routes.get('/cards', CardController.findAll);
routes.post('/cards', CardController.store);
routes.get('/cards/:id', CardController.show);
routes.put('/cards/:id', CardController.update);
routes.delete('/cards/:id', CardController.destroy);

module.exports = routes;