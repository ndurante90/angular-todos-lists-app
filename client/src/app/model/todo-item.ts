import { StatusType } from "./todo-status";
import { v4 as uuidv4 } from 'uuid';

export class TodoItem{
  id: string;
  name: string;
  creationDate: Date;
  description: string;
  status: StatusType;

  constructor(){
    this.id = uuidv4();
    this.name = "";
    this.creationDate = new Date();
    this.description = "";
    this.status = StatusType.NotCompleted;
  }
}
