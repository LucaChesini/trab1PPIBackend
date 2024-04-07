const express = require("express");
const CardController = require("./controllers/CardController");
const routes = express.Router();

routes.get('/cards', CardController.index);
routes.post('/cards', CardController.store);
routes.get('/cards/:id', CardController.show);
routes.put('/cards/:id', CardController.update);
routes.delete('/cards/:id', CardController.delete);

module.exports = routes;