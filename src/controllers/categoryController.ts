import { Response, Request } from 'express';
import { PrismaCategoryRepository } from 'src/repository/PrismaCategoryRepository';
import prisma from 'src/services/PrismaClient';

const makeRepository = () => {
  return new PrismaCategoryRepository(prisma);
};

export class CategoryController {
  async create(req: Request, res: Response) {
    const body = req.body;

    const rep = await makeRepository().save(body);

    return res.status(201).send(rep);
  }

  async getAll(req: Request, res: Response) {
    const rep = await makeRepository().getAll();

    return res.status(200).json({ data: rep });
  }

  async delete(req: Request, res: Response) {
    const categoryId = +req.params;

    const rep = await makeRepository().deleteUnique(categoryId);

    return res.status(204).json({ data: rep });
  }
}
