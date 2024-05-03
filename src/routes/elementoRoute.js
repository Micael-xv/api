import elementoController from '../controllers/elementoControler';

export default (app) => {
  app.post('/elemento/persist', elementoController.persist);
  app.post('/elemento/persist/:id', elementoController.persist);
  app.post('/elemento/destroy', elementoController.destroy);
  app.get('/elemento', elementoController.get);
  app.get('/elemento/:id', elementoController.get);
};
