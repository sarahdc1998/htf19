import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user.model";
import {DataService} from "../../../services/data.service";
import {Bank} from "../../../models/bank.model";
import {ActivatedRoute, NavigationStart, Router} from "@angular/router";
import 'rxjs/Rx';

@Component({
  selector: 'app-bank-detail',
  templateUrl: './bank-detail.component.html',
  styleUrls: ['./bank-detail.component.css']
})
export class BankDetailComponent implements OnInit {
  bankName;
  bank: Bank;

  constructor(private dataService: DataService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
     this.bankName =  params['name'];

      this.dataService.getBank(this.bankName.replace(/\s/g, "")).subscribe(bank => {
        this.bank = bank;
        console.log(this.bank);
      });
    });

  }

}
