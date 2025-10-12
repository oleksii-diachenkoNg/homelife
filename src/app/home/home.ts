import { Component } from '@angular/core';
import { TodoWidget } from './todo-widget/todo-widget';
import { Block } from "../shared/block/block";
import { HouseWidget } from "./house-widget/house-widget";
import { UserWidget } from "./user-widget/user-widget";
import { ShopListWidget } from './shop-list-widget/shop-list-widget';
import { BudgetWidget } from "./budget-widget/budget-widget";

@Component({
  selector: 'app-home',
  imports: [TodoWidget, Block, HouseWidget, UserWidget, ShopListWidget, BudgetWidget],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  
}
