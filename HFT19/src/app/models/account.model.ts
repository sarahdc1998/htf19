import { Transaction } from './transaction.model';

export class Account {
  public id: string;
  public iban: string;
  public created: string;
  public balance: number;
  public currency: string;
  public transactions: Transaction[];

  constructor(id: string, iban: string, created: string, balance: number,
              currency: string, transactions: Transaction[]) {
    this.id = id;
    this.iban = iban;
    this.created = created;
    this.balance = balance;
    this.currency = currency;
    this.transactions = transactions;
  }
}
