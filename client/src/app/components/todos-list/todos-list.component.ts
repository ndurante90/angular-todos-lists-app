import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodoItem } from 'src/app/model/todo-item';
import { StatusType } from 'src/app/model/todo-status';
import { TodosList } from 'src/app/model/todos-list';
import { TodoService } from 'src/app/services/todo-service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  @Input() todosLists: TodosList[] | undefined;

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
  }

  isCompleted(list: TodosList){
    return list.status == StatusType.Completed;
  }

  deleteList(list: TodosList){
    this.todoService.delete(list);
  }
}
