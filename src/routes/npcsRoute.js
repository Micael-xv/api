import npcsController from '../controllers/npcsController';

export default (app) => {
  app.post('/npcs/persist', npcsController.persist);
  app.post('/npcs/persist/:id', npcsController.persist);
  app.post('/npcs/destroy', npcsController.destroy);
  app.get('/npcs', npcsController.get);
  app.get('/npcs/:id', npcsController.get);
};
