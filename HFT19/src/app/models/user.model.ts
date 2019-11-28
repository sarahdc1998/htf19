import { Login } from './login.model';
import { Account } from './account.model';

export class User {
  public id: string;
  public firstName: string;
  public lastName: string;
  public gender: string;
  public nationality: string;
  public birthday: string;
  public login: Login;
  public account: Account;

  constructor(id: string, firstName: string, lastName: string, gender: string, nationality: string,
              birthday: string, login: Login, account: Account) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.nationality = nationality;
    this.birthday = birthday;
    this.login = login;
    this.account = account;
  }
}
