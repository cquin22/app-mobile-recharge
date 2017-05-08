import { Component } from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  moduleId: module.id,
  selector: 'recharge',
  templateUrl: 'create.expense.component.html',
  styleUrls: ['./create.expense.component.less']
})
export class ExpenseComponent {
  public phone:any;

  public time:any;

  public isSend:boolean = false;

  public dataResponse:any;

  constructor(private _apiService:ApiService){};

  sendExpense(){
    let config = {client: {phone: this.phone}, expense: {time: this.time}};
    this.isSend = true;
    this._apiService.setExpense(config)
      .subscribe(res => {
        this.isSend = false;
        this.dataResponse = res.data;
      })
  }


}
