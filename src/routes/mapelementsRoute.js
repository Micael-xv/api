import mapelementsController from '../controllers/mapelementsController';

export default (app) => {
  app.post('/mapelements/persist', mapelementsController.persist);
  app.post('/mapelements/persist/:id', mapelementsController.persist);
  app.post('/mapelements/destroy', mapelementsController.destroy);
  app.get('/mapelements', mapelementsController.get);
  app.get('/mapelements/:id', mapelementsController.get);
};
