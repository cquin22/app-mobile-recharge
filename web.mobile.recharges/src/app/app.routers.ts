import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RechargeComponent} from "./recharge/recharge.component";
import {BalanceComponent} from "./balance/balance.component";
import {HistoryComponent} from "./history/history.component";
import {ExpenseHistoryComponent} from "./expense_history/expense.history.component";
import {ExpenseComponent} from "./create_expense/create.expense.component";
import {CostComponent} from "./cost/cost.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: RechargeComponent },
  { path: 'balance', component: BalanceComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'expense-history', component: ExpenseHistoryComponent },
  { path: 'expense', component: ExpenseComponent },
  { path: 'costs', component: CostComponent }

];

export const AppRoutesModule:ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
