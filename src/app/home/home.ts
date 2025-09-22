import { Component } from '@angular/core';
import { TodoWidget } from './todo-widget/todo-widget';
import { Block } from "../shared/block/block";

@Component({
  selector: 'app-home',
  imports: [TodoWidget, Block],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  userName = 'Oleksii'
  userSurname = 'Diachenko'

  
}
