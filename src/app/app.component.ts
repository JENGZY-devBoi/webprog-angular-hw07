import { Component } from '@angular/core';
import { BankdataserviceService } from './bankdataservice.service';
import { IBankdata } from 'src/assets/data/bankdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HW0730082';
  bankaccs: IBankdata[] = [];

  constructor(private bankaccS: BankdataserviceService) {}

  ngOnInit(): void {
    this.bankaccs = this.bankaccS.getBankAcc();
  }
}
