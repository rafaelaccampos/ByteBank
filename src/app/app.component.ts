import { Component } from '@angular/core';
import { TransferencesService } from './services/transferences.service';
import { Transference } from './models/transference';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ByteBank';

  constructor(private service: TransferencesService){}

  transfer($event: Transference){
    this.service.add($event);
  }
}
