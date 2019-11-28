import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private users: User[] = [];

  constructor() { }

  getUsers() {
    return this.users.slice();
  }

  setUsers(users: User[]) {
    this.users = users;
  }
}
