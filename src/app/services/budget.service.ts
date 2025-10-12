import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private totalBudget = signal(0);

  _totalBudget = this.totalBudget.asReadonly();

}