export class Login {
  public username: string;
  public hashedPassword: string;

  constructor(username: string, hashedPassword: string) {
  this.username = username;
  this.hashedPassword = hashedPassword;
  }
}
