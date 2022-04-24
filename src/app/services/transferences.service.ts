import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transference } from '../models/transference';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransferencesService {
  private listOfTransferences: Transference[] = [];
  private url = 'http://localhost:3000/transferences';

  constructor(private httpClient: HttpClient) {
  }

  get transferences()
  {
    return this.listOfTransferences;
  }

  getAll() : Observable<Transference[]>{
    return this.httpClient.get<Transference[]>(this.url)
  }

  add($event: Transference){
    this.fillTransference($event);
    this.transferences.push($event);
  }

  fillTransference(transference: Transference)
  {
    transference.date = new Date().toString();
  }
}
