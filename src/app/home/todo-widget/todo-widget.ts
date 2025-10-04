import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ListItem } from '../../shared/list-item/list-item';

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-widget',
  imports: [ListItem],
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
