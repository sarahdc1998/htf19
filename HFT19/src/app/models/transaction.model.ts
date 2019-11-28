export class Transaction  {
  public id: string;
  public sender: string;
  public recipient: string;
  public amount: number;
  public currency: string;
  public time: string;
  public message: string;

  constructor(id: string, sender: string, recipient: string, amount: number, currency: string,
              time: string, message: string) {
      this.id = id;
      this.sender = sender;
      this.recipient = recipient;
      this.amount = amount;
      this.currency = currency;
      this.time = time;
      this.message = message;
  }
}
