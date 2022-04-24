import { Component } from '@angular/core';
import { Transference } from './transference';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ByteBank';
  transference! : Transference;

  transfer($event: Transference){
    this.transference = $event;
  }
}
