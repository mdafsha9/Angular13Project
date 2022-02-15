import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pipes',
  templateUrl: './my-pipes.component.html',
  styleUrls: ['./my-pipes.component.scss']
})
export class MyPipesComponent implements OnInit {
  lowercaseExample = "ANGULAR FRAMEWORK";
  uppercaseExample = "Learning angular";
  dateExample = Date.now();
  currencyExample = 125;
  percentExample = 0.1256;
  jsonExample = {username:'Bru', age:12, major:'IT'};
  constructor() { }

  ngOnInit(): void {
  }

}
