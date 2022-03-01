import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { CounterComponent } from './main-content/counter/counter.component';


const routes: Routes = [
  {path:'signIn', component: SignInComponent},
  {path:'counter', component:CounterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
