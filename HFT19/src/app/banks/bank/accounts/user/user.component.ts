import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  bankName = 'caymannationalbank';
  userId = '3c5cc172-d0ee-4e29-b3a3-a0f7101216f4';
  user: User;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUser(this.bankName, this.userId).subscribe(user => {
      this.user = user.result;
    });
  }

}
