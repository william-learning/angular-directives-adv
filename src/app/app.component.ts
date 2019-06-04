import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  toggle: boolean;
  name = 'Angular';
  toggle = false; 

  onToggle() {
    this.toggle=!this.toggle;
  }
}
