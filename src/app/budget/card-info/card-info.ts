import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card-info',
  imports: [CurrencyPipe],
  templateUrl: './card-info.html',
  styleUrl: './card-info.css'
})
export class CardInfo {
  card = input.required<Card>();
  purchases = [
    {
      id: 1,
      shop: "Aldi",
      summ: 500,
      date: "22.02.2025",
    },
  ]
}
