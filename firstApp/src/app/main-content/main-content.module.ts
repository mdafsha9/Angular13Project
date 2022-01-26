import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsBoxComponent } from './events-box/events-box.component';
import { InputValuesComponent } from './input-values/input-values.component';



@NgModule({
  declarations: [
    EventsBoxComponent,
    InputValuesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EventsBoxComponent,
    InputValuesComponent
  ]
})
export class MainContentModule { }
