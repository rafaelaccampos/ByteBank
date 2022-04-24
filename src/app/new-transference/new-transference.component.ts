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
  date!: Date;

  transfer(){
    this.toTransfer.emit({
      value: this.value,
      destiny: this.destiny,
      date: this.date,
    });
    this.clearFields();
  }

  clearFields(){
    this.value = 0;
    this.destiny = 0;
  }
}
