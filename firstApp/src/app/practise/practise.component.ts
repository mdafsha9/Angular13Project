import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.scss']
})
export class PractiseComponent implements OnInit {
    className = "c1";
    className1 = "c2";
  constructor() { }

  ngOnInit(): void {
  }

}
