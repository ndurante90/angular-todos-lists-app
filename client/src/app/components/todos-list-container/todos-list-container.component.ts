import { Component, OnInit } from '@angular/core';
import { TodosList } from 'src/app/model/todos-list';
import { TodoService } from 'src/app/services/todo-service';

@Component({
  selector: 'app-todos-list-container',
  templateUrl: './todos-list-container.component.html',
  styleUrls: ['./todos-list-container.component.css']
})
export class TodosListContainerComponent implements OnInit {

  items: TodosList[] | undefined;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.items = this.todoService.getTodosList();
  }

}
