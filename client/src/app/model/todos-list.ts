import { TodoItem } from "./todo-item";

export class TodosList{
  name: string;
  creationDate: Date;
  items: TodoItem[];

  constructor(){
    this.name = "";
    this.creationDate = new Date();
    this.items = [];
  }
}
