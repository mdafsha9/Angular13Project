import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-box',
  templateUrl: './events-box.component.html',
  styleUrls: ['./events-box.component.scss']
})
export class EventsBoxComponent implements OnInit {
  getData(value:any){
    console.warn(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
