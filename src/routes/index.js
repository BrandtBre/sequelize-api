import autoresRoute from './autoresRoute';
import categoriasRoute from './categoriasRoute';
import livrosRoute  from './livrosRoute';
import usuariosRoute from './ususariosRoute';

function Routes(app) {
    categoriasRoute(app);
    autoresRoute(app);
    livrosRoute(app);
    usuariosRoute(app);
}

export default Routes;