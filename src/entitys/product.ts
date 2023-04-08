interface ProductType {
  id: string;
  name: string;
  categoryId: number;
  typeId: number;
  value: number;
}

export class Product {
  public readonly id: string;
  public readonly name: string;
  public readonly categoryId: number;
  public readonly typeId: number;
  public readonly value: number;

  constructor({ id, name, categoryId, typeId, value }: ProductType) {
    this.id = id;
    this.name = name;
    this.categoryId = categoryId;
    this.typeId = typeId;
    this.value = value;
  }
}
