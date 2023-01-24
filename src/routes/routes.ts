import { Router } from "express";
import { Request, Response } from "express";
import { MenuController } from "../controllers/menuController";
import { validate } from "../middlewares/produtcMiddleware";

const routes = Router();
const menu = new MenuController();

routes.get('/menu', menu.getMenu);

routes.post('/menu/', validate ,menu.createNewProduct);

// routes.get('/menu/:id',);

routes.delete('/menu/:id', menu.deleteProduct);

routes.put('/menu/:id', validate, menu.updateProduct);

export default routes;