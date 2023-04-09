import { Type } from 'src/entitys/type';

export interface TypeRepository {
  save(type: Type): Promise<void>;
  getAll(): Promise<Type[]>;
  deleteUnique(id: number): Promise<void>;
}
