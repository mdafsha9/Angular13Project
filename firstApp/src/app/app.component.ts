import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '12';
   data= {
   name : 'Bruce',
     age :25,
     emailId :'bruce@gmail.com'
   }
}
