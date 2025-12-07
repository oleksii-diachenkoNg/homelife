import { Component, inject } from '@angular/core';
import { Card } from './card/card';
import { CardInfo } from "./card-info/card-info";
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-budget',
  imports: [Card, CardInfo],
  templateUrl: './budget.html',
  styleUrl: './budget.css'
})
export class Budget {
  private budgetService = inject(BudgetService)

  cards = this.budgetService._cards
}
