import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-widget',
  imports: [],
  templateUrl: './todo-widget.html',
  styleUrl: './todo-widget.css'
})
export class TodoWidget {
  todoList = [
    { id: 1, task: 'Buy groceries', completed: false },
    { id: 2, task: 'Walk the dog', completed: true },
    { id: 3, task: 'Read a book', completed: false }
  ]
}
