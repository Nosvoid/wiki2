import { Component, OnInit } from '@angular/core';

import carveData from "../_json/carve-runes.json";
import tattoosData from "../_json/tattoos.json";

interface Carve {
  name: String;
  img: String;
}

interface Tattoos {
  name: String;
  scroll: String;
  scrollImg: String;
  img: String;
}

@Component({
  selector: 'app-tattoos',
  templateUrl: './tattoos.component.html',
  styleUrls: ['./tattoos.component.css']
})
export class TattoosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  carve: Carve[] = carveData;
  tattoos: Tattoos[] = tattoosData;
}
