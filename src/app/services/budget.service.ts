import { Injectable, signal } from "@angular/core";
import { type Purchase } from "../models/purchase.model";
import { type Card } from "../models/card.model";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private purchases = signal<Purchase[]>([
    { id: 1, date: "25.08.2025", shop: 'Aldi', amount: 1500, cardId: 1 },
    { id: 2, date: "25.08.2025", shop: 'Aldi', amount: 202, cardId: 2 },
    { id: 3, date: "25.08.2025", shop: 'Edeka', amount: 35, cardId: 1 },
    { id: 4, date: "25.08.2025", shop: 'Lidl', amount: 50, cardId: 3 },
    { id: 5, date: "25.08.2025", shop: 'Lidl', amount: 350, cardId: 1 },
    { id: 6, date: "25.08.2025", shop: 'Rossman', amount: 10, cardId: 2 },
    { id: 7, date: "25.08.2025", shop: 'Lidl', amount: 5, cardId: 1 },
    { id: 8, date: "25.08.2025", shop: 'Lidl', amount: 50, cardId: 1 },
  ])

  private cards = signal<Card[]>([
    {
      id:1,
      title: 'General Card',
      cardNum: '2222-2222-2222-2222',
      balance: 3000,
      currency: 'USD'
    },
    {
      id:2,
      title: 'General Card',
      cardNum: '2222-2222-2222-2222',
      balance: 5000,
      currency: 'UAH'
    },
    {
      id:3,
      title: 'General Card',
      cardNum: '2222-2222-2222-2222',
      balance: 4000,
      currency: 'EUR'
    }
  ])

  _cards = this.cards.asReadonly()
  _purchases = this.purchases.asReadonly();
  
  addPurchase(newPurchase: Purchase) { 
    this.changeBalance(newPurchase.cardId, newPurchase.amount, "diff")
    this.purchases.update(purchases => [...purchases, newPurchase])
  }
  
  removePurchase(purchase: Purchase) { 
    this.changeBalance(purchase.cardId, purchase.amount, "sum");
    this.purchases.update(purchases => purchases.filter(purchase => purchase != purchase))
  }
  
  addCard(card: Card) {
    this.cards.update(cards => [...cards, card])
  }

  removeCard(id:number) { 
    this.cards.update(cards => this.cards().filter(card => card.id !== id))
  }

  changeBalance(id: number, amount: number, action: 'sum' | 'diff') { 
    const index = this.cards().findIndex(e => e.id === id);
    if(action === 'sum') { 
      this.cards()[index].balance += amount;
    } else {
      this.cards()[index].balance -= amount;
    }
  }
}