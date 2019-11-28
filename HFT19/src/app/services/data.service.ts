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
    this.http.get(`${this.baseUrl}/banks`, { headers: { Authorization: `Bearer ${this.token}` }});
  }

  public getBank(id) {

  }

  public getAccounts() {

  }

  public  getAccount(id) {

  }
}


