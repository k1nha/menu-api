import { Router } from 'express';
import { MenuController } from '../controllers/menuController';
import { validate } from '../middlewares/productMiddleware';

const routes = Router();
const menu = new MenuController();

routes.get('/menu', menu.getMenu);

routes.post('/menu/', validate, menu.createNewProduct);

routes.get('/menu/:id', menu.getProduct);

routes.delete('/menu/:id', menu.deleteProduct);

routes.put('/menu/:id', validate, menu.updateProduct);

export default routes;

export class ProductRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.router.get('/');
  }
}
