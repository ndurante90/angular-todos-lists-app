import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/model/todo-item';
import { TodosList } from 'src/app/model/todos-list';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  model: TodosList = new TodosList();

  todosNumber: any[] = [2,3];

  constructor() {
    this.model.items = new Array<TodoItem>();
    this.model.items.push(new TodoItem());
    this.model.items.push(new TodoItem());
  }

  ngOnInit(): void {
  }

}
