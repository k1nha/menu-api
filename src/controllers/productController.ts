import { Request, Response } from 'express';
import { PrismaProductRepository } from 'src/repository/PrismaProductRepository';
import prisma from 'src/services/PrismaClient';

const makeRepository = () => {
  return new PrismaProductRepository(prisma);
};

export class ProductController {
  async getAllProducts(req: Request, res: Response) {
    const rep = makeRepository().getAll;

    return res.status(200).json({ data: rep });
  }
}
