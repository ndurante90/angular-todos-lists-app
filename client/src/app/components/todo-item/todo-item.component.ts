import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/model/todo-item';
import { StatusType } from 'src/app/model/todo-status';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: TodoItem | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.todoItem);
  }

  toggleStatus(event: MouseEvent): void {
    if(this.todoItem){
      this.todoItem.status = this.todoItem?.status == StatusType.NotCompleted ? StatusType.Completed : StatusType.NotCompleted;
    }
  }

}
