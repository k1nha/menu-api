interface TypeI {
  id: number;
  name_type: string;
}

export class Type {
  public readonly id: number;
  public readonly name_type: string;

  constructor({ id, name_type }: TypeI) {
    this.id = id;
    this.name_type = name_type;
  }
}
