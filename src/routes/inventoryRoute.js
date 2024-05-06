import inventoryController from '../controllers/inventoryController';

export default (app) => {
  app.post('/inventory/persist', inventoryController.persist);
  app.post('/inventory/persist/:id', inventoryController.persist);
  app.post('/inventory/destroy', inventoryController.destroy);
  app.get('/inventory', inventoryController.get);
  app.get('/inventory/:id', inventoryController.get);
};
