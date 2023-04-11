import { PrismaClient } from '@prisma/client';
import { CategoryRepository } from './CategoryRepository';
import { Category } from 'src/entitys/category';

export class PrismaCategoryRepository implements CategoryRepository {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly prisma: PrismaClient) { }

  public async save(category: Category): Promise<void> {
    await this.prisma.category.create({
      data: {
        name_category: category.name_category,
        typeId: category.typeId,
      },
    });
  }

  public async getAll(): Promise<Category[]> {
    const categories = await this.prisma.category.findMany();
    return categories;
  }

  public async deleteUnique(id: number): Promise<void> {
    await this.prisma.category.delete({
      where: {
        id,
      },
    });
  }
}
