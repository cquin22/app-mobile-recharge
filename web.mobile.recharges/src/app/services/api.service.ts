import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const BASE_URL = 'http://13.85.31.56:8090/';
// const BASE_URL = 'http://localhost:1337/';

@Injectable()
export class ApiService {

  constructor(private _http:Http) {
    console.log('Se ha creado una instancia del servicio de rest');
  }

  setClientAndRecharge(config:any) {
    let url = BASE_URL + 'recharge';
    return this._http.post(url, config)
      .map(res => res.json());
  }

  setExpense(config:any) {
    let url = BASE_URL + 'expense';
    return this._http.post(url, config)
      .map(res => res.json());
  }

  getRecharge(phone:any) {
    let url = BASE_URL + 'recharge?phone=' + phone;
    return this._http.get(url)
      .map(res => res.json());
  }

  getBalance(config:any) {
    let url = BASE_URL + 'balance';
    return this._http.post(url, config)
      .map(res => res.json());
  }

  getExpense(phone:any) {
    let url = BASE_URL+ 'expense?phone=' + phone;
    return this._http.get(url)
      .map(res => res.json());
  }

  getCost() {
    let url = BASE_URL + 'cost';
    return this._http.get(url)
      .map(res => res.json());
  }

  updateCost(config:any) {
    let url = BASE_URL + 'cost';
    return this._http.put(url, config)
      .map(res => res.json());
  }

}
