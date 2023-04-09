import { PrismaProductRepository } from 'src/repository/PrismaProductRepository';
import prisma from 'src/services/PrismaClient';

const makeSut = () => {
  return new PrismaProductRepository(prisma);
};

describe('Prisma Product Repository', () => {
  beforeAll(async () => {
    await prisma.product.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  test('Should create product', async () => {
    const sut = makeSut();

    await sut.save({
      name: 'any name',
      categoryId: 2,
      typeId: 1,
      value: 1,
    });

    const product = await sut.findByName('any name');

    expect(product).toHaveProperty('id');
    expect(product?.name).toBe('any name');
  });
});
