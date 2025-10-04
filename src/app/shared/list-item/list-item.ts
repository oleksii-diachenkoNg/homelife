import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'li[list-item]',
  imports: [],
  templateUrl: './list-item.html',
  styleUrl: './list-item.css'
})
export class ListItem {
  id = input.required<number>();
  title = input.required<string>();
  buttonText = input.required<string>();
  @Output() done = new EventEmitter<number>();

  remove() { 
    this.done.emit(this.id());
  }
}
