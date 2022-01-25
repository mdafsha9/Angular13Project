import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsBoxComponent } from './events-box/events-box.component';



@NgModule({
  declarations: [
    EventsBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EventsBoxComponent
  ]
})
export class MainContentModule { }
