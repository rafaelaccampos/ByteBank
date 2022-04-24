import { Component, EventEmitter, Output } from '@angular/core';
import { Transference } from '../transference';
@Component({
  selector: 'app-new-transference',
  templateUrl: './new-transference.component.html',
  styleUrls: ['./new-transference.component.scss']
})

export class NewTransferenceComponent {
  @Output() toTransfer = new EventEmitter<Transference>();
  value!: number;
  destiny!: number;

  transferir(){
    console.log('Solicitada nova transferência');
    console.log('Valor:', this.value);
    console.log('Destino:', this.destiny);
    this.toTransfer.emit({
      value: this.value,
      destiny: this.destiny
    })
  }
}
