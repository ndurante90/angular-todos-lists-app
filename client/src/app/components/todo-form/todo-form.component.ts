import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StatusType } from 'src/app/model/todo-status';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Input() formTitle: string | undefined;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  formGroup: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      'name': [''],
      'statusType': [StatusType.NotCompleted]
    });

    this.formGroup.valueChanges.subscribe((value) => console.log(value))
  }


  submitData(event: SubmitEvent){
     event.preventDefault();
     console.log('On form submit!');
     this.onSubmit.emit(this.formGroup.value);
  }

}
