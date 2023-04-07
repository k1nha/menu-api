import { Product } from 'src/entitys/product';

export interface ProductRepository {
  save(product: Product): Promise<void>;
  findByName(name: string): Promise<Product | undefined>;
  findByCategory(category: number): Promise<Product[] | undefined>;
  findByType(type: number): Promise<Product[] | undefined>;
}
