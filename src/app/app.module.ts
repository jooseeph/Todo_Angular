import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TodoComponent } from './todo/todo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoComponent],
  imports: [BrowserModule, NgbModule,FormsModule],
  providers: [],
  bootstrap: [TodoComponent],
})
export class AppModule {}
