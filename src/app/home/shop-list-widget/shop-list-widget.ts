import { Component, inject } from '@angular/core';
import { ShopListService } from '../../services/shop-list.service';
import { ListItem } from '../../shared/list-item/list-item';

@Component({
  selector: 'app-shop-list-widget',
  imports: [ListItem],
  templateUrl: './shop-list-widget.html',
  styleUrl: './shop-list-widget.css'
})
export class ShopListWidget {
  shopListService = inject(ShopListService);

  bag = this.shopListService._bag;

  removeFromBag(id: number) { 
    this.shopListService.removeFromBag(id);
  }
}
