import { Router } from 'express';
import { ProductController } from 'src/controllers/productController';

const routes = Router();
const product = new ProductController();

routes.get('/product', product.getAllProducts);

routes.post('/product/', product.create);

routes.get('/product/category/:categoryId', product.getProductByCategory);
routes.get('/product/:name', product.getProductByName);
routes.get('/product/type/:typeId', product.getProductByType);

// TODO: Delete and Put route for prduct

export { routes };
