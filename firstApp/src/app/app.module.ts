import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MainContentModule} from './main-content/main-content.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectiveOneComponent } from './main-directive/directive-one/directive-one.component';
import { DirectiveTwoComponent } from './main-directive/directive-two/directive-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectiveOneComponent,
    DirectiveTwoComponent
  ],
  imports: [
    BrowserModule,
    MainContentModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
