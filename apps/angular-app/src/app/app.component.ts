import { Component } from '@angular/core';
import '@angular-app/elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  feelingLucky() {
    console.log('Feeling Lucky');
  }
}
