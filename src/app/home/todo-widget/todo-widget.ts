import { Component, computed, inject } from '@angular/core';
import { TodoListItem } from './todo-list-item/todo-list-item';
import { TodoService } from '../../services/todo.service';

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-widget',
  imports: [TodoListItem],
  templateUrl: './todo-widget.html',
  styleUrl: './todo-widget.css'
})
export class TodoWidget {
  private todoService = inject(TodoService);

  todoList = this.todoService._todoList;

  removeTask(id: number) {
    this.todoService.removeTask(id);
  }
}
