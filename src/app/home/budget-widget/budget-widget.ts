import { Component, inject } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { CurrencyPipe } from '@angular/common';
import { BudgetCell } from '../../shared/budget/budget-cell/budget-cell';
import { Purchases } from '../../shared/budget/purchases/purchases';

@Component({
  selector: 'app-budget-widget',
  imports: [BudgetCell, Purchases, CurrencyPipe],
  templateUrl: './budget-widget.html',
  styleUrl: './budget-widget.css'
})
export class BudgetWidget {
  private budgetService = inject(BudgetService);
  purchases = this.budgetService._purchases;
  cards = this.budgetService._cards

  getCurrency(id:number) { 
    return this.cards().find(e => e.id === id)?.currency;
  }
}
