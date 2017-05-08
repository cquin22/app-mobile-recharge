import { Component } from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  moduleId: module.id,
  selector: 'recharge',
  templateUrl: 'recharge.component.html',
  styleUrls: ['./recharge.component.less']
})
export class RechargeComponent {
  public phone:any;

  public value:any;

  public currency:string = "COP";

  public isSend:boolean = false;

  public dataResponse:any;

  constructor(private _apiService:ApiService){};

  sendRecharge(){
    let config = {client: {phone: this.phone}, recharge: {value: this.value, currency: this.currency}};
    this.isSend = true;
    this._apiService.setClientAndRecharge(config)
      .subscribe(res => {
        this.isSend = false;
        this.dataResponse = res.data;
      })
  }


}
