import { TodoItem } from "./todo-item";
import { StatusType } from "./todo-status";
import { v4 as uuidv4 } from 'uuid';

export class TodosList{
  id: string;
  name: string;
  creationDate: Date;
  items: TodoItem[];
  status: StatusType;

  constructor(){
    this.id = uuidv4();
    this.name = "";
    this.creationDate = new Date();
    this.items = [];
    this.status = StatusType.NotCompleted;
  }
}

export function todosListFactory(name: string, status: boolean, items: TodoItem[]): TodosList{
  const item = new TodosList();
  item.name = name;
  item.status = status ? StatusType.Completed : StatusType.NotCompleted;
  item.items = items;
  return item;
}


