import { StatusType } from "./todo-status";

export class TodoItem{
  name: string;
  creationDate: Date;
  description: string;
  status: StatusType;

  constructor(){
    this.name = "";
    this.creationDate = new Date();
    this.description = "";
    this.status = StatusType.NotCompleted;
  }
}
