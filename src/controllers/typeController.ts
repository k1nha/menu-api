import { Request, Response } from 'express';
import { PrismaTypeRepository } from 'src/repository/PrismaTypeRepository';
import prisma from 'src/services/PrismaClient';

const makerRepository = () => {
  return new PrismaTypeRepository(prisma);
};

export class TypeController {
  async create(req: Request, res: Response) {
    const body = req.body;

    const rep = makerRepository().save(body);

    return res.status(201).send(rep);
  }

  async getAll(req: Request, res: Response) {
    const rep = makerRepository().getAll;

    return res.status(200).json({ data: rep })
  }

  async delete(req: Request, res: Response) {
    const typeId = +req.params

    const rep = makerRepository().deleteUnique(typeId)

    return res.status(204).json({data: rep})
  }
}
