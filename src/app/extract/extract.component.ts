import { Component, Input, OnInit } from '@angular/core';
import { Transference } from '../transference';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  @Input() transferences!: Transference[];

  constructor() { }

  ngOnInit(): void {
  }

}
