import { Injectable, signal } from "@angular/core";
import { type Task } from "../models/task.model";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private todoList = signal([
        { id: 1, task: 'Buy groceries', deadLine: "20.05.2026"},
        { id: 2, task: 'Walk the dog', deadLine: "20.05.2026"},
        { id: 3, task: 'Read a book', deadLine: "20.05.2026"},
        { id: 4, task: 'Play with children', deadLine: "20.05.2026"},
        { id: 5, task: 'I want to be a programmer and this is my task. Blah-blah-blah.', deadLine: "20.05.2026"},
        { id: 6, task: 'Read a book', deadLine: "20.05.2026"},
        { id: 7, task: 'Read a book', deadLine: "20.05.2026"},
        { id: 8, task: 'Read a book', deadLine: "20.05.2026"},
        { id: 9, task: 'Read a book', deadLine: "20.05.2026"},
        { id: 10, task: 'Read a book', deadLine: "20.05.2026"},
        { id: 11, task: 'Read a book', deadLine: "20.05.2026"},
      ])

    _todoList = this.todoList.asReadonly();

      addTask(task: Task) { 
        this.todoList.update(list => [...list, task])
      }

      removeTask(id: number) {
        this.todoList.update(list => list.filter(task => task.id !== id))
      }
}