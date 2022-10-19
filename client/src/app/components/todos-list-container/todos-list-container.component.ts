import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/model/todo-item';
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
    this.todoService.lists$.subscribe((res) => {this.items = res; console.log(this.items); console.log("HAS CHANGED!")});
  }

  onFormSubmit(event: any){
    this.todoService.addItem(event);
  }

}
