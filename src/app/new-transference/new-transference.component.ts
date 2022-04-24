import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private service: TransferencesService, private routerLink: Router){

  }

  transfer(){
    const transferForEmit = {
      value: this.value,
      destiny: this.destiny,
    };

    this.service.add(transferForEmit).subscribe({
      next: (t) => console.log(transferForEmit),
      error: (e) => console.error(e),
    });

    this.clearFields();
    this.routerLink.navigateByUrl("extrato");
  }

  clearFields(){
    this.value = 0;
    this.destiny = '';
  }
}
