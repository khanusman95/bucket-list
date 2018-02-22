import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { TodoComponent } from '../app/todo/todo.component';
import { AppComponent } from '../app/app.component';
import { HelpComponent } from '../app/help/help.component';


const routes: Routes = [
  {
    path: '',
    component: TodoComponent
  },

  {
    path: 'help',
    component: HelpComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
