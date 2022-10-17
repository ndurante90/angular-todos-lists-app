import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/model/todo-item';
import { StatusType } from 'src/app/model/todo-status';
import { TodosList } from 'src/app/model/todos-list';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  @Input() todosList: TodosList | undefined;

  isCompleted: boolean | undefined = false;

  constructor() {
  }

  ngOnInit(): void {
    this.isCompleted = this.isListCompleted();
  }

  isListCompleted(): boolean | undefined{
    return this.todosList?.items.every(item => item.status === StatusType.Completed);
  }

}
