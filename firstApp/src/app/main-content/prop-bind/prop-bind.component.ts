import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-bind',
  templateUrl: './prop-bind.component.html',
  styleUrls: ['./prop-bind.component.scss']
})
export class PropBindComponent implements OnInit {
  itemImageUrl = "./assets/images/angular.png";
  isUnchanged = true; //true or false totoggle the button
  className = 'one';
  className1 = 'two';
  constructor() { }

  ngOnInit(): void {
  }

}
