import { Component, EventEmitter, Output } from '@angular/core';
import { Transference } from '../models/transference';
import { TransferencesService } from '../services/transferences.service';
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

  constructor(private service: TransferencesService){

  }

  transfer(){
    const transferForEmit = {
      value: this.value,
      destiny: this.destiny,
    };

    this.service.add(transferForEmit).subscribe(transference => {
      console.log(transference);
    },
    error => console.error(error));

    this.clearFields();
  }

  clearFields(){
    this.value = 0;
    this.destiny = '';
  }
}
