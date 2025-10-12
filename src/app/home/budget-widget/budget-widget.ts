import { Component, inject } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { CurrencyCell } from './currency-cell/currency-cell';

@Component({
  selector: 'app-budget-widget',
  imports: [CurrencyCell],
  templateUrl: './budget-widget.html',
  styleUrl: './budget-widget.css'
})
export class BudgetWidget {
  budgetService = inject(BudgetService);
  totalBudget = this.budgetService._totalBudget;

  cards = [
    {
      title: 'General Card',
      cardNum: '2222-2222-2222-2222',
      balance: '3000',
      currency: 'USD'
    },
    {
      title: 'General Card',
      cardNum: '2222-2222-2222-2222',
      balance: '5000',
      currency: 'UAH'
    },
    {
      title: 'General Card',
      cardNum: '2222-2222-2222-2222',
      balance: '4000',
      currency: 'EUR'
    }
  ]
}
