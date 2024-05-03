import usuarioRoute from './usuarioRoute';
import elementoRoute from './elementoRoute';
import itensRoute from './itensRoute';
import sheetsRoute from './sheetsRoute';
import campaignitensRoute from './campaignitensRoute';
import campaignsRoute from './campaignsRoute';
import inventoryRoute from './inventoryRoute';
import mapelementsRoute from './mapelementsRoute';
import mapsRoute from './mapsRoute';
import npcsRoute from './npcsRoute';

function Routes(app) {
  usuarioRoute(app);
  elementoRoute(app);
  itensRoute(app);
  sheetsRoute(app);
  campaignitensRoute(app);
  campaignsRoute(app);
  inventoryRoute(app);
  mapelementsRoute(app);
  mapsRoute(app);
  npcsRoute(app);
  sheetsRoute(app);
}

export default Routes;
