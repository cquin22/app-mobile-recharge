import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'ng2-materialize';

//Routes
import {AppRoutesModule} from "./app.routers";

import { AppComponent } from './app.component';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {RechargeComponent} from "./recharge/recharge.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {ApiService} from "./services/api.service";
import {BalanceComponent} from "./balance/balance.component";
import {HistoryComponent} from "./history/history.component";
import {ExpenseHistoryComponent} from "./expense_history/expense.history.component";
import {ExpenseComponent} from "./create_expense/create.expense.component";
import {CostComponent} from "./cost/cost.component";



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    RechargeComponent,
    NavbarComponent,
    BalanceComponent,
    HistoryComponent,
    ExpenseHistoryComponent,
    ExpenseComponent,
    CostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule.forRoot(),
    AppRoutesModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
