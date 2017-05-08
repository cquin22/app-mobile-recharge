import { Component } from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  moduleId: module.id,
  selector: 'recharge',
  templateUrl: 'expense.history.component.html',
  styleUrls: ['./expense.history.component.less']
})
export class ExpenseHistoryComponent {
  public phone:any;

  public isSend:boolean = false;

  public dataResponse:any;

  constructor(private _apiService:ApiService){};

  getExpense(){
    this.isSend = true;
    this._apiService.getExpense(this.phone)
      .subscribe(res => {
        this.isSend = false;
        this.dataResponse = res.data;
      })
  }


}
