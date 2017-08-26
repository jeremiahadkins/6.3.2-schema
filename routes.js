const express = require('express');
let HatController = require('./controllers/hat');
let HomeController = require('./controllers/home');

module.exports = function(app) {
  let hatRouter = express.Router();
  let homeRouter = express.Router();

  homeRouter.get('/', HomeController.home);

  hatRouter.get('/', HatController.list);
  hatRouter.post('/', HatController.add);
  hatRouter.get('/:id/delete', HatController.delete);
  hatRouter.get('/:id/update', HatController.update);
  hatRouter.post('/update', HatController.complete);
  // :id is a custom id param to be accessed via req.parmas.id

  app.use('/', homeRouter);
  app.use('/hat', hatRouter);
};
