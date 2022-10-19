import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { TodoItem } from '../model/todo-item';
import { StatusType } from '../model/todo-status';
import { TodosList, todosListFactory } from '../model/todos-list';
import { v4 as uuidv4 } from 'uuid';

let items = [
    {
       id: uuidv4(),
       name: "test",
       creationDate: new Date(),
       items: [
        {
          id: uuidv4(),
          name: "item1 of test",
          creationDate: new Date(),
          status: StatusType.NotCompleted,
          description: "Andare in banca"
        },
        {
          id: uuidv4(),
          name: "item2 of test",
          creationDate: new Date(),
          status: StatusType.NotCompleted,
          description: "Prendere da mangiare al cane"
        }
      ],
      status: StatusType.NotCompleted
    },
    {
      id: uuidv4(),
      name: "test2",
      creationDate: new Date(),
      items: [
        {
          id: uuidv4(),
          name: "item1 of test2",
          creationDate: new Date(),
          status: StatusType.Completed,
          description: "Andare a Treviso"
        }
      ],
      status: StatusType.Completed
    }
  ]



@Injectable({
  providedIn: 'root'
})

export class TodoService {

  public lists$: BehaviorSubject<TodosList[]> = new BehaviorSubject<TodosList[]>(items);

  constructor() {
  }

  getTodosList(): TodosList[]{
    return JSON.parse(JSON.stringify(items));
  }

  update(todoItem: TodoItem){
    items = [...items];
    items.forEach(list => {
        list.items.forEach(entry => {
          //check by id instead of name
          if(entry.name === todoItem.name){
            Object.assign(entry, todoItem);
            //updates list status: a list is completed only if all its items are completed
            list.status = this.getListStatus(list.items);
            this.lists$.next(items);
          }
        })
    });
  }

  getListStatus(items: TodoItem[]): StatusType{
    return items.every(it => it.status === StatusType.Completed) ? StatusType.Completed : StatusType.NotCompleted;
  }

  delete(list: TodosList){
    //filter by id instead of name
    items = items.filter(it => it.name !== list.name);
    this.lists$.next(items);
  }

  //only todoslist case at the moment
  addItem(event: any) {
    const { name, status } = event;
    const item = todosListFactory(name, status, event.items);
    items = [...items, item];
    this.lists$.next(items);
  }
}
