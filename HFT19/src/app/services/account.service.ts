import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class AccountService {
  private users: User[] = [];

  constructor() { }

  setUsers(users: User[]) {
    this.users = users;
  }

  getUsers() {
    return this.users;
  }
}
