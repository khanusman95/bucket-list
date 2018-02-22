import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoComponent } from './todo/todo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelpComponent } from './help/help.component';


@NgModule({
  declarations: [
    AppComponent,  
    NavbarComponent,
    TodoComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
