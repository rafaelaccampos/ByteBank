import { Component, Input, OnInit } from '@angular/core';
import { TransferencesService } from '../services/transferences.service';
import { Transference } from '../models/transference';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  transferences!: Transference[];

  constructor(private service: TransferencesService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((t) => (
      this.transferences = t
    ));
  }
}
