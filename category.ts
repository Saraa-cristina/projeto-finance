export class Category {
  public id: string;

  constructor(
    public name: string,
    public icon: string
  ) {
    this.id = crypto.randomUUID(); 
  }
}
