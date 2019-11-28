import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanksComponent } from './banks/banks.component';
import { BankComponent } from './banks/bank/bank.component';
import { AccountsComponent } from './banks/bank/accounts/accounts.component';
import { AccountComponent } from './banks/bank/accounts/account/account.component';
import { TransactionsComponent } from './banks/bank/transactions/transactions.component';
import { TransactionComponent } from './banks/bank/transactions/transaction/transaction.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BanksComponent,
    BankComponent,
    AccountsComponent,
    AccountComponent,
    TransactionsComponent,
    TransactionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
