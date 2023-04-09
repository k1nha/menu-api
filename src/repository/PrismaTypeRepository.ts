import { PrismaClient } from '@prisma/client';
import { TypeRepository } from './TypeRepository';
import { Type } from 'src/entitys/type';

export class PrismaTypeRepository implements TypeRepository {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly prisma: PrismaClient) { }

  public async save(type: Type): Promise<void> {
    await this.prisma.type.create({
      data: {
        name_type: type.name_type,
      },
    });
  }

  public async getAll(): Promise<Type[]> {
    const types = await this.prisma.type.findMany({});
    return types;
  }

  public async deleteUnique(id: number): Promise<void> {
    await this.prisma.type.delete({
      where: {
        id,
      },
    });
  }
}
