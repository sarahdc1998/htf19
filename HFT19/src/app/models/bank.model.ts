export class Bank {
  public id: string;
  public name: string;
  public difficulty: number;
  public apiPath: string;

  constructor(id: string, name: string, difficulty: number, apiPath: string) {
    this.id = id;
    this.name = name;
    this.difficulty = difficulty;
    this.apiPath = apiPath;
  }
}
