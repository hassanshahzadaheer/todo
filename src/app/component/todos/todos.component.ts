import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  
  localItem: string | null;
  todoList: Todo[];
  
  constructor() { 
    
    this.localItem = localStorage.getItem("todoList");

    if(this.localItem === null) 
    {
      this.todoList = [];
    } else {
      this.todoList = JSON.parse(this.localItem);
    }
    
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    // getting index of particular item in array
    const index = this.todoList.indexOf(todo);
    // console.log(todo);
    
    // // delete item on targeted index 
    this.todoList.splice(index, 1);
    localStorage.setItem("todoList",JSON.stringify(this.todoList));
  }

  addTodo(todo: Todo) {
    this.todoList.push(todo);
    localStorage.setItem("todoList",JSON.stringify(this.todoList));
  }
  toggleTask(todo: Todo) {
    const index = this.todoList.indexOf(todo);  
    this.todoList[index].active = !this.todoList[index].active;
   
    localStorage.setItem("todoList",JSON.stringify(this.todoList));
  }
}
