import usuarioController from '../controllers/usuarioController';
import verifyToken from '../middleware/verifyToken';
import verifyCargo from '../middleware/verifyCargo';

export default (app) => {
  app.post('/usuario/persist', usuarioController.persist);
  app.post('/usuario/register', usuarioController.register);
  app.post('/usuario', verifyToken, usuarioController.persist);
  app.post('/usuario/login', usuarioController.login);
  app.post('/usuario/persist/:id', usuarioController.persist);
  app.post('/usuario/destroy', verifyToken, verifyCargo, usuarioController.destroy);
  app.get('/usuario', verifyToken, verifyCargo, usuarioController.get);
  app.get('/usuario/:id', usuarioController.get);
};
