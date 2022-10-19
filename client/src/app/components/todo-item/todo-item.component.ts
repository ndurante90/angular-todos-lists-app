import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodoItem } from 'src/app/model/todo-item';
import { StatusType } from 'src/app/model/todo-status';
import { TodoService } from 'src/app/services/todo-service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit, OnChanges {

  @Input() todoItem: TodoItem | undefined;

  constructor(private todoService: TodoService) { }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("item change");
  }

  ngOnInit(): void {
    console.log(this.todoItem);
  }

  toggleStatus(event: MouseEvent): void {
    if(this.todoItem){
      this.todoItem.status = this.todoItem?.status == StatusType.NotCompleted ? StatusType.Completed : StatusType.NotCompleted;
      this.todoService.update(this.todoItem);
    }
  }

}
