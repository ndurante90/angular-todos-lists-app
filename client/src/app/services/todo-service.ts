import { Injectable } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { StatusType } from '../model/todo-status';
import { TodosList } from '../model/todos-list';

const items = {
  list: [
    {
       name: "test",
       creationDate: new Date(),
       items: [
        {
          name: "item1 of test",
          creationDate: new Date(),
          status: StatusType.NotCompleted,
          description: "Andare in banca"
        },
        {
          name: "item2 of test",
          creationDate: new Date(),
          status: StatusType.NotCompleted,
          description: "Prendere da mangiare al cane"
        }
      ]
    },
    {
      name: "test2",
      creationDate: new Date(),
      items: [
        {
          name: "item1 of test2",
          creationDate: new Date(),
          status: StatusType.Completed,
          description: "Andare a Treviso"
        }
      ]
    }
  ]
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {


  constructor() {
  }

  getTodosList(): TodosList[]{
    return JSON.parse(JSON.stringify(items)).list;
  }
}
