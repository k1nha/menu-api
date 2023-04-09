import { Router } from 'express';
import { ProductController } from 'src/controllers/productController';

const routes = Router();
const product = new ProductController();

// PRODUCTS
// TODO: Delete and Put route for prduct
routes.get('/product', product.getAllProducts);
routes.post('/product/', product.create);
routes.get('/product/category/:categoryId', product.getProductByCategory);
routes.get('/product/:name', product.getProductByName);
routes.get('/product/type/:typeId', product.getProductByType);

// CATEGORIES
routes.get('/product/category');
routes.post('/products/category');
routes.delete('/products/category/:categoryId');

// TYPES
routes.get('/product/type');
routes.post('/products/type');
routes.delete('/products/type/:typeId');

export { routes };
