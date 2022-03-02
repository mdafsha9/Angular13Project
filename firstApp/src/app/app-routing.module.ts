import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { CounterComponent } from './main-content/counter/counter.component';
import {EventsBoxComponent } from './main-content/events-box/events-box.component';
import {PropBindComponent } from './main-content/prop-bind/prop-bind.component';
import {InputValuesComponent } from './main-content/input-values/input-values.component';
import {ChildComponentComponent } from './child-component/child-component.component';
import {ChildOneComponent } from './child-one/child-one.component';
import {DirectiveOneComponent } from './main-directive/directive-one/directive-one.component';
import {DirectiveTwoComponent } from './main-directive/directive-two/directive-two.component';
import {MyPipesComponent } from './my-pipes/my-pipes.component';
import {ParentOneComponent } from './parent-one/parent-one.component';
import {PractiseComponent } from './practise/practise.component';

const routes: Routes = [
  {path:'signIn', component: SignInComponent},
  {path:'counter', component:CounterComponent},
  {path:'eventBox', component:EventsBoxComponent},
  {path:'propBind', component:PropBindComponent},
  {path:'inputValues', component:InputValuesComponent},
  {path:'childComponent', component:ChildComponentComponent},
  {path:'childOne', component:ChildOneComponent},
  {path:'directiveOne', component:DirectiveOneComponent},
  {path:'directiveTwo', component:DirectiveTwoComponent},
  {path:'pipes', component:MyPipesComponent},
  {path:'parentComponent', component:ParentOneComponent},
  {path:'practise', component:PractiseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
