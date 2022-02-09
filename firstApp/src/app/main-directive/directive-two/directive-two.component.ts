import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-two',
  templateUrl: './directive-two.component.html',
  styleUrls: ['./directive-two.component.scss']
})
export class DirectiveTwoComponent implements OnInit {
  styleProp = "aquamarine";
  txtcolor = "red";
  constructor() { }

  ngOnInit(): void {
  }

}
