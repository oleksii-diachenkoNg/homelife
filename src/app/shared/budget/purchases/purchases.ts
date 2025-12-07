import { Component, input, OnInit} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { type Purchase } from '../../../models/purchase.model';

@Component({
  selector: 'app-purchases',
  imports: [CurrencyPipe],
  templateUrl: './purchases.html',
  styleUrl: './purchases.css'
})
export class Purchases {
  purchase = input.required<Purchase>()
  currency = input.required<string | undefined>();
}
