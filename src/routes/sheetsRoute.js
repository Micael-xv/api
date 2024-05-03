import sheetsController from '../controllers/sheetsController';

export default (app) => {
  app.post('/sheets/persist', sheetsController.persist);
  app.post('/sheets/persist/:id', sheetsController.persist);
  app.post('/sheets/destroy', sheetsController.destroy);
  app.get('/sheets', sheetsController.get);
  app.get('/sheets/:id', sheetsController.get);
};
