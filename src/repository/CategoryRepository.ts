import { Category } from 'src/entitys/category';

export interface CategoryRepository {
  save(category: Category): Promise<void>;
  getAll(): Promise<Category[]>;
  deleteUnique(id: number): Promise<void>;
}
