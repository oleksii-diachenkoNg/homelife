import { Component, input } from '@angular/core';

@Component({
  selector: 'li[todo-list-item]',
  imports: [],
  templateUrl: './todo-list-item.html',
  styleUrl: './todo-list-item.css'
})
export class TodoListItem {
  description = input.required<string>();
}
