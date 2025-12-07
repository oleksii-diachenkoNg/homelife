import { Component, input } from '@angular/core';
import { type Card as CardType } from '../../models/card.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  card = input.required<CardType>();
}
