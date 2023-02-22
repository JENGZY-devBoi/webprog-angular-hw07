import { Injectable } from '@angular/core';
import { IBankdata } from 'src/assets/data/bankdata';

@Injectable({
  providedIn: 'root'
})
export class BankdataserviceService {

  constructor() { }

  public getBankAcc(): IBankdata[] {
    return [
      {
        accountId: 12345,
        accountName: 'teerapong',
        accountSurname: 'saisrikaew',
        moneyAmount: 1500.00
      },
      {
        accountId: 56789,
        accountName: 'kochanan',
        accountSurname: 'boonraksa',
        moneyAmount: 3000.20
      },
      {
        accountId: 54321,
        accountName: 'sittipong',
        accountSurname: 'pongsanuchit',
        moneyAmount: 7500.60
      }
    ];
  }
}
