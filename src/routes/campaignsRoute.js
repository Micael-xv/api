import campaignsController from '../controllers/campaignsController';

export default (app) => {
  app.post('/campaigns/persist', campaignsController.persist);
  app.post('/campaigns/persist/:id', campaignsController.persist);
  app.post('/campaigns/destroy', campaignsController.destroy);
  app.get('/campaigns', campaignsController.get);
  app.get('/campaigns/:id', campaignsController.get);
};
