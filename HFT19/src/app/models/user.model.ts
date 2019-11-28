import { Account } from './account.model';

export class User {
  public id: string;
  public firstName: string;
  public lastName: string;
  public gender: string;
  public nationality: string;
  public birthday: string;
  public username: string;
  public hashedPassword: string;
  public account: Account;

  constructor(id: string, firstName: string, lastName: string, gender: string, nationality: string,
              birthday: string, username: string, hashedPassword: string, account: Account) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.nationality = nationality;
    this.birthday = birthday;
    this.username = username;
    this.hashedPassword = hashedPassword;
    this.account = account;
  }
}
