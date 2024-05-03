// eslint-disable-next-line quotes
import usuarioController from "../controllers/usuarioController";

export default (app) => {
  app.post('/usuario/persist', usuarioController.persist);
  app.post('/usuario/register', usuarioController.register);
  app.post('/usuario/login', usuarioController.login);
  app.post('/usuario/persist/:id', usuarioController.persist);
  app.post('/usuario/destroy', usuarioController.destroy);
  app.get('/usuario', usuarioController.get);
  app.get('/usuario/:id', usuarioController.get);
};
