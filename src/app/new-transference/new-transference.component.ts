import { Component, EventEmitter, Output } from '@angular/core';
import { Transference } from '../models/transference';
@Component({
  selector: 'app-new-transference',
  templateUrl: './new-transference.component.html',
  styleUrls: ['./new-transference.component.scss']
})

export class NewTransferenceComponent {
  @Output() toTransfer = new EventEmitter<Transference>();

  id!: number;
  value!: number;
  destiny!: string;
  date!: string;

  transfer(){
    this.toTransfer.emit({
      id: this.id,
      value: this.value,
      destiny: this.destiny,
      date: this.date,
    });
    this.clearFields();
  }

  clearFields(){
    this.value = 0;
    this.destiny = '';
  }
}
