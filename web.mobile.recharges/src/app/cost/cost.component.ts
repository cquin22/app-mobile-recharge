import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  moduleId: module.id,
  selector: 'recharge',
  templateUrl: 'cost.component.html',
  styleUrls: ['./cost.component.less']
})
export class CostComponent implements OnInit{
  constructor(private _apiService:ApiService){};

  public isSend:boolean = false;

  public cost:any;

  public response:any;

  getCost(){
    this.isSend = true;
    this._apiService.getCost()
      .subscribe(res => {
        this.isSend = false;
        this.cost = res.data[0].value;
      })
  }

  updateCost(){
    this.isSend = true;
    let config = {value: this.cost}
    this._apiService.updateCost(config)
      .subscribe(res => {
        this.isSend = false;
        this.response = res.data[0];
        this.cost = res.data[0].value;
      })
  }

  ngOnInit(){
    this.getCost();
  }
}
