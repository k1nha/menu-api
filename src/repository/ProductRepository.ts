import { Product } from 'src/entitys/product';

export interface ProductRepository {
  save(product: Product): Promise<void>;
  findByName(name: string): Promise<Product | undefined>;
  findById(id: string): Promise<Product | undefined>;
  findByCategory(category: string): Promise<Product[] | undefined>;
  findByType(type: string): Promise<Product[] | undefined>;
}
