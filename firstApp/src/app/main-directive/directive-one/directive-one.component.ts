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
  contacts = [
    {'firstName' : 'Lorie',
    'lastName' : 'Wright',
    'age' : 25},
    {'firstName' : 'Marie',
    'lastName' : 'Low',
    'age' : 30}, 
    {'firstName' : 'Royal',
    'lastName' : 'Roy',
    'age' : 28}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
