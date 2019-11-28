import { User } from './../../../models/user.model';
import { AccountService } from './../../../services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  users: User[] = [];

  constructor(private accountsService: AccountService) { }

  ngOnInit() {
    this.users = this.accountsService.getUsers();
  }

}
