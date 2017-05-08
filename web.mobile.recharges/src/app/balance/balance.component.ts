import { Component } from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  moduleId: module.id,
  selector: 'recharge',
  templateUrl: 'balance.component.html',
  styleUrls: ['./balance.component.less']
})
export class BalanceComponent {
  public phone:any;

  public isSend:boolean = false;

  public dataResponse:any;

  constructor(private _apiService:ApiService){};

  getBalance(){
    this.isSend = true;
    let config = {client: {phone: this.phone} };
    this._apiService.getBalance(config)
      .subscribe(res => {
        this.isSend = false;
        this.dataResponse = res.data;
      })
  }


}
