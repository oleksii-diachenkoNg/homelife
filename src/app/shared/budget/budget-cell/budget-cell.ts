import { Component, input } from '@angular/core';
import { Card } from '../../../models/card.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-budget-cell',
  imports: [CurrencyPipe],
  templateUrl: './budget-cell.html',
  styleUrl: './budget-cell.css'
})
export class BudgetCell {
  card = input.required<Card>();
}
