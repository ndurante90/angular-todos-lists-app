export class TodoItem{
  name: string;
  creationDate: Date;

  constructor(){
    this.name = "";
    this.creationDate = new Date();
  }
}
