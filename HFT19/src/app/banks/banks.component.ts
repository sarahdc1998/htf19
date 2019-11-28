import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {Observable} from "rxjs";
import {Bank} from "../models/bank.model";

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {
  banks: Bank[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getBanks().subscribe(banks => {
        this.banks = banks;
        console.log(banks);
       }
    );
  }

}
