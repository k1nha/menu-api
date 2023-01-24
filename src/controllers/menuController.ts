import { Request, Response } from "express";
import { getAll, createProduct, deleteProduct, updateProduct  } from "../models/menuModel";

export class MenuController {
  async getMenu(req: Request, res: Response) {

    const allProducts = await getAll();
    
    return res.status(200).json(allProducts);
  }

  async createNewProduct(req: Request, res: Response) {

    const createdProduct = await createProduct(req.body);

    return res.status(201).json(createdProduct);
  }

  async getProduct(req: Request, res: Response) {
    
    return res.status(200).json()
  }

  async deleteProduct(req: Request, res: Response) { 

    const { id } = req.params;

    await deleteProduct(id);
    return res.status(204).json({ message: "Product deleted" });
  }

  async updateProduct(req: Request, res: Response) {
    const { id } = req.body;
    await updateProduct(id, req.body);
    return res.status(204).json({ message: "Product updated" });
  }
}
