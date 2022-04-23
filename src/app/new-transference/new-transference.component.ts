import { Component, Injectable, OnInit } from '@angular/core';
@Component({
  selector: 'app-new-transference',
  templateUrl: './new-transference.component.html',
  styleUrls: ['./new-transference.component.scss']
})

@Injectable({
  providedIn: 'root',
})

export class NewTransferenceComponent {
  value!: Number;
  destiny!: Number;

  transferir(){
    console.log('Solicitada nova transferência');
    console.log('Valor:', this.value);
    console.log('Destino:', this.destiny);
  }
}
