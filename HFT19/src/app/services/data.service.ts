import { User } from './../models/user.model';
import { AccountService } from './account.service';
import { Account } from './../models/account.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {map, tap, take, exhaust, exhaustMap} from 'rxjs/operators';
import {Bank} from '../models/bank.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'https://htf.zinderlabs.com';
  token = '915e69a1245cfac52524f58fa9f6c9e7';

  constructor(private http: HttpClient, private router: Router, private accountsService: AccountService) { }

  public getBanks() {
    return this.http.get<Bank[]>(`${this.baseUrl}/banks`, { headers: { Authorization: `${this.token}` }});
  }

  public getBank(nameBank) {
    return this.http.get<any>(`${this.baseUrl}/${nameBank}`, { headers: { Authorization: `${this.token}` }});
  }

  public getUsers(nameBank) {
    // this.http.get(`${this.baseUrl}/${nameBank}/accounts`, { headers: { Authorization: `Bearer ${this.token}` }});
    return this.http.get<any>(
      `${this.baseUrl}/${nameBank}/accounts`,
      { headers: { Authorization: `${this.token}` }}
    );
    // .pipe(
    //   tap(users => {
    //     this.accountsService.setUsers(users);
    //   })
    // );
  }

  public  getUser(nameBank, id) {
    return this.http.get<any>(
      `${this.baseUrl}/${nameBank}/accounts/${id}`,
      { headers: { Authorization: `${this.token}` }}
    );
  }

  public getTransactions(nameBank) {
    this.http.get(`${this.baseUrl}/${nameBank}/transactions`, { headers: { Authorization: `Bearer ${this.token}` }});
  }
}


