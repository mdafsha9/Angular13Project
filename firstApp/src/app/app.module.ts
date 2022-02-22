import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MainContentModule} from './main-content/main-content.module';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectiveOneComponent } from './main-directive/directive-one/directive-one.component';
import { DirectiveTwoComponent } from './main-directive/directive-two/directive-two.component';
import { PractiseComponent } from './practise/practise.component';
import {FormsModule} from '@angular/forms';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ParentOneComponent } from './parent-one/parent-one.component';
import { MyPipesComponent } from './my-pipes/my-pipes.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectiveOneComponent,
    DirectiveTwoComponent,
    PractiseComponent,
    ChildComponentComponent,
    ChildOneComponent,
    ParentOneComponent,
    MyPipesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MainContentModule,
    AppRoutingModule
  ],
  providers: [
    {provide:LocationStrategy, useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
