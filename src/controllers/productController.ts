import { Request, Response } from 'express';
import { PrismaProductRepository } from 'src/repository/PrismaProductRepository';
import prisma from 'src/services/PrismaClient';

const makeRepository = () => {
  return new PrismaProductRepository(prisma);
};

export class ProductController {
  async create(req: Request, res: Response) {
    const body = req.body;

    const rep = makeRepository().save(body);

    return res.status(201).send(rep);
  }

  async getAllProducts(req: Request, res: Response) {
    const rep = makeRepository().getAll;

    return res.status(200).json({ data: rep });
  }

  async getProductByName(req: Request, res: Response) {
    const { name } = req.params;

    const rep = makeRepository().findByName(name);

    return res.status(200).json({ data: rep });
  }

  async getProductByType(req: Request, res: Response) {
    const typeId = +req.params;
    const rep = makeRepository().findByType(typeId);

    return res.status(200).json({ data: rep });
  }

  async getProductByCategory(req: Request, res: Response) {
    const categoryId = +req.params;

    const rep = makeRepository().findByCategory(categoryId);

    return res.status(200).json({ data: rep });
  }
}
