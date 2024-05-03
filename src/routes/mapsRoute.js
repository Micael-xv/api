import mapsController from '../controllers/mapsController';

export default (app) => {
  app.post('/maps/persist', mapsController.persist);
  app.post('/maps/persist/:id', mapsController.persist);
  app.post('/maps/destroy', mapsController.destroy);
  app.get('/maps', mapsController.get);
  app.get('/maps/:id', mapsController.get);
};
