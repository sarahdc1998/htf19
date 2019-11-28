import { DataService } from './../../../services/data.service';
import { User } from './../../../models/user.model';
import { AccountService } from './../../../services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  bankName = 'caymannationalbank';
  users: User[] = [];

  constructor(private dataService: DataService, private accountsService: AccountService) { }

  ngOnInit() {
    this.dataService.getUsers(this.bankName);
    this.users = this.accountsService.getUsers();
  }

}
