import Resto from '../views/pages/resto';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Resto,
  '/resto': Resto,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
