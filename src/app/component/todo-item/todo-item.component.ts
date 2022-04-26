import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Input() i: number;

  @Output() deleteTask : EventEmitter<Todo> = new EventEmitter();
  @Output() onTaskDone: EventEmitter<Todo> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo: Todo) {
    this.deleteTask.emit(this.todo);
    
  }

  onTaskComplete(todo: Todo) {
    this.onTaskDone.emit(todo);
    

  }

}
