import {Component, Input, OnInit} from '@angular/core';
import {Bank} from "../../models/bank.model";

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 @Input() items: Bank;

}
