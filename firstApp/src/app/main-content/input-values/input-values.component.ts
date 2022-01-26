import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-values',
  templateUrl: './input-values.component.html',
  styleUrls: ['./input-values.component.scss']
})
export class InputValuesComponent implements OnInit {
  displayValue:string = " ";
  getValue(val:string){
    console.log(val);
    this.displayValue = val;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
