import { Injectable } from '@angular/core';
import { Transference } from '../models/transference';

@Injectable({
  providedIn: 'root'
})
export class TransferencesService {
  private listOfTransferences: Transference[] = [];

  constructor() {
  }

  get transferences()
  {
    return this.listOfTransferences;
  }

  add($event: Transference){
    this.fillTransference($event);
    //const transference = {...$event, data: new Date()};
    this.transferences.push($event);
  }

  fillTransference(transference: Transference)
  {
    transference.date = new Date().toString();
  }
}
