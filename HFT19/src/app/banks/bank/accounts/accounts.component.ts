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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers(this.bankName).subscribe(users => {
      this.users = users.result;
    });
  }

}
