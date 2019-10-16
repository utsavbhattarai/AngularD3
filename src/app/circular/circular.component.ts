import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.scss']
})
export class CircularComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.createDiagram();
  }
  createDiagram() {
  }

}
