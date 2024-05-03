import itensController from "../controllers/itensController";

export default (app) => {
  app.post('/itens/persist', itensController.persist);
  app.post('/itens/persist/:id', itensController.persist);
  app.post('/itens/destroy', itensController.destroy);
  app.get('/itens', itensController.get);
  app.get('/itens/:id', itensController.get);
};
