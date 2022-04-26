import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  
  todoList: Todo[];
  
  constructor() { 
    this.todoList = [
      {
        'sno' : 1,
        'title' : 'solve all bugs of angular',
        'desc' : 'install angualr and run the following command',
        'active' : true
      },
      {
        'sno' : 2,
        'title' : 'wordpress website checking',
        'desc' : 'install angualr and run the following command',
        'active' : false
      },
      {
        'sno' : 3,
        'title' : 'metrolive changes',
        'desc' : 'install angualr and run the following command',
        'active' : true
      }
      
    ];
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    // getting index of particular item in array
    const index = this.todoList.indexOf(todo);
    // console.log(todo);
    
    // // delete item on targeted index 
    this.todoList.splice(index, 1);
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todoList.push(todo);
  }
}
