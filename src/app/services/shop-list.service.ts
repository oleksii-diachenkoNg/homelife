import { Injectable, signal } from "@angular/core";
import { type ShopItem } from "../models/shop-item.model";

@Injectable({
    providedIn: 'root'
})
export class ShopListService {
    bag = signal<ShopItem[]>([
        { id: 1, product: 'Apples', quantity: 5 },
        { id: 2, product: 'Bananas', quantity: 3 },
        { id: 3, product: 'Oranges', quantity: 4 }
    ]);

    _bag = this.bag.asReadonly();

    addToBag(item: ShopItem) { 
        this.bag.update(bag => [...bag, item]);
    }

    removeFromBag(id: number) { 
        this.bag.update(bag => bag.filter(item => item.id !== id))
    }
}