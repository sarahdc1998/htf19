import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BanksComponent} from './banks/banks.component';
import { AccountsComponent } from './banks/bank/accounts/accounts.component';

const routes: Routes = [
  { path: '', component: BanksComponent },
  { path: 'accounts', component: AccountsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
