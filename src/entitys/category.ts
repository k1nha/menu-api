interface CategoryI {
  id: number;
  name_category: string;
  typeId: number;
}

export class Category {
  public readonly id: number;
  public readonly name_category: string;
  public readonly typeId: number;

  constructor({ id, name_category, typeId }: CategoryI) {
    this.id = id;
    this.name_category = name_category;
    this.typeId = typeId;
  }
}
