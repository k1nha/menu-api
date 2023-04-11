import { Router } from 'express';
import { CategoryController } from 'src/controllers/categoryController';
import { ProductController } from 'src/controllers/productController';
import { TypeController } from 'src/controllers/typeController';

const routes = Router();
const product = new ProductController();
const category = new CategoryController();
const type = new TypeController();

// PRODUCTS
// TODO: Delete and Put route for prduct
routes.get('/product', product.getAllProducts);
routes.post('/product/', product.create);
routes.get('/product/category/:categoryId', product.getProductByCategory);
routes.get('/product/:name', product.getProductByName);
routes.get('/product/type/:typeId', product.getProductByType);

// CATEGORIES
routes.get('/category', category.getAll);
routes.post('/category', category.create);
routes.delete('/category/:categoryId', category.delete);

// TYPES
routes.get('/type', type.getAll);
routes.post('/type', type.create);
routes.delete('/type/:typeId', type.delete);

export { routes };
