import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  test :string ='srihari v';
switchtest:number=1;
  appystyles(){

    let c ={testc:true}
   return c;

  }
}
