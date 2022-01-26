import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsBoxComponent } from './events-box/events-box.component';
import { InputValuesComponent } from './input-values/input-values.component';
import { CounterComponent } from './counter/counter.component';



@NgModule({
  declarations: [
    EventsBoxComponent,
    InputValuesComponent,
    CounterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EventsBoxComponent,
    InputValuesComponent,
    CounterComponent
  ]
})
export class MainContentModule { }
