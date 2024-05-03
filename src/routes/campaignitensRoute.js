import campaignitensController from '../controllers/campaignitensController';

export default (app) => {
  app.post('/campaignItens/persist', campaignitensController.persist);
  app.post('/campaignItens/persist/:id', campaignitensController.persist);
  app.post('/campaignItens/destroy', campaignitensController.destroy);
  app.get('/campaignItens', campaignitensController.get);
  app.get('/campaignItens/:id', campaignitensController.get);
};
