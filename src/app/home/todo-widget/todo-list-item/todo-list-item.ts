import { Component, EventEmitter, input, Output } from '@angular/core';
import { type Task } from '../../../models/task.model';

@Component({
  selector: 'li[todo-list-item]',
  imports: [],
  templateUrl: './todo-list-item.html',
  styleUrl: './todo-list-item.css'
})
export class TodoListItem {
  task = input.required<Task>();
  @Output() done = new EventEmitter<number>();

  markAsDone() { 
    this.done.emit(this.task().id);
  }
}
