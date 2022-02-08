import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-one',
  templateUrl: './directive-one.component.html',
  styleUrls: ['./directive-one.component.scss']
})
export class DirectiveOneComponent implements OnInit {
  goodMessage = true;
  message = false;
  morningMessage = true;
  constructor() { }

  ngOnInit(): void {
  }

}
