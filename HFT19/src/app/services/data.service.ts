import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = "https://htf.zinderlabs.com/";
  token = "915e69a1245cfac52524f58fa9f6c9e7";

  constructor(private http: HttpClient, private router: Router) { }

  public getBanks() {
    return this.http.get(`${this.baseUrl}/banks`, { headers: { Authorization: `Bearer ${this.token}` }});
  }

  public getBank(nameBank) {
    this.http.get(`${this.baseUrl}/${nameBank}`, { headers: { Authorization: `Bearer ${this.token}` }});
  }

  public getAccounts(nameBank) {
    this.http.get(`${this.baseUrl}/${nameBank}/accounts`, { headers: { Authorization: `Bearer ${this.token}` }});
  }

  public  getAccount(id) {

  }

  public getTransactions(nameBank) {
    this.http.get(`${this.baseUrl}/${nameBank}/transactions`, { headers: { Authorization: `Bearer ${this.token}` }});
  }
}


