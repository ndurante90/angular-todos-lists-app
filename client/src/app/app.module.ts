import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosListContainerComponent } from './components/todos-list-container/todos-list-container.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodosListContainerComponent,
    TodoItemComponent,
    TodosListComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
