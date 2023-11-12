import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'famous-quote-quiz';
  
  //TODO move from here, extract vars to config
  constructor() {
    localStorage.setItem("gameMode", "multiple");
  }
}
