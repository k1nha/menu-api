import { Product } from 'src/entitys/product';
import { ProductRepository } from './ProductRepository';
import { PrismaClient } from '@prisma/client';

export class PrismaProductRepository implements ProductRepository {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly prisma: PrismaClient) { }

  public async save(product: Product): Promise<void> {
    await this.prisma.product.create({
      data: {
        name: product.name,
        categoryId: product.categoryId,
        typeId: product.typeId,
        value: product.value,
      },
    });
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products;
  }

  public async findByCategory(
    category: number,
  ): Promise<Product[] | undefined> {
    const product = await this.prisma.product.findMany({
      where: {
        categoryId: category,
      },
    });

    if (!product) return undefined;

    // return new Product(product.id, product.name, product.caategory, product.type, product.values);

    return product;
  }

  public async findByName(name: string): Promise<Product[] | undefined> {
    const product = await this.prisma.product.findMany({
      where: {
        name,
      },
    });

    if (!product) return undefined;

    return product;
  }

  public async findByType(type: number): Promise<Product[] | undefined> {
    const product = await this.prisma.product.findMany({
      where: {
        typeId: type,
      },
    });

    if (!product) return undefined;

    return product;
  }
}
