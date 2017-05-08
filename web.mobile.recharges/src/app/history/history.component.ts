import { Component } from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  moduleId: module.id,
  selector: 'recharge',
  templateUrl: 'history.component.html',
  styleUrls: ['./history.component.less']
})
export class HistoryComponent {
  public phone:any;

  public isSend:boolean = false;

  public dataResponse:any;

  constructor(private _apiService:ApiService){};

  getBalance(){
    this.isSend = true;
    this._apiService.getRecharge(this.phone)
      .subscribe(res => {
        this.isSend = false;
        this.dataResponse = res.data;
      })
  }


}
