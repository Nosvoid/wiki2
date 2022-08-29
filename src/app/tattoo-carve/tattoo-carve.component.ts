import { Component, OnInit } from '@angular/core';

import carveData from "../_json/carve-runes.json";

interface Carve {
  name: String;
  img: String;
}

@Component({
  selector: 'app-tattoo-carve',
  templateUrl: './tattoo-carve.component.html',
  styleUrls: ['./tattoo-carve.component.css']
})
export class TattooCarveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  carve: Carve[] = carveData;
}
