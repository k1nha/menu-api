interface ProductType {
  id: string;
  name: string;
  category: number;
  type: number;
  value: number;
}

export class Product {
  public readonly id: string;
  public readonly name: string;
  public readonly category: number;
  public readonly type: number;
  public readonly value: number;

  constructor({ id, name, category, type, value }: ProductType) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.type = type;
    this.value = value;
  }
}
