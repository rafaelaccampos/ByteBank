import { Component } from '@angular/core';
import { Transference } from './transference';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ByteBank';
  transferences : Transference[]  = [];

  transfer($event: Transference){
    console.log($event);
    const transference = {...$event, date: new Date()};
    this.transferences.push(transference);
  }
}
