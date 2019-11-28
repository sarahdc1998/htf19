import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanksComponent } from './banks/banks.component';
import { BankComponent } from './banks/bank/bank.component';
import { AccountsComponent } from './banks/bank/accounts/accounts.component';
import { AccountComponent } from './banks/bank/accounts/user/account/account.component';
import { TransactionsComponent } from './banks/bank/accounts/user/account/transactions/transactions.component';
import { TransactionComponent } from './banks/bank/accounts/user/account/transactions/transaction/transaction.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './banks/bank/accounts/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    BanksComponent,
    BankComponent,
    AccountsComponent,
    AccountComponent,
    TransactionsComponent,
    TransactionComponent,
    HeaderComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
