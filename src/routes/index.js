import autoresRoute from './autoresRoute';
import categoriasRoute from './categoriasRoute';
import livrosRoute  from './livrosRoute';
import usuariosRoute from './ususariosRoute';
import emprestimosRoute from './emprestimosRoute';

function Routes(app) {
    categoriasRoute(app);
    autoresRoute(app);
    livrosRoute(app);
    usuariosRoute(app);
    emprestimosRoute(app);
}

export default Routes;