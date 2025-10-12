import { Component, input } from '@angular/core';

@Component({
  selector: 'app-currency-cell',
  imports: [],
  templateUrl: './currency-cell.html',
  styleUrl: './currency-cell.css'
})
export class CurrencyCell {
  currency = input.required<string>();
  balance = input.required<string>();
}
