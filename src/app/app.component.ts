import { Component } from '@angular/core';
import { TransferencesService } from './services/transferences.service';
import { Transference } from './models/transference';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ByteBank';
}
