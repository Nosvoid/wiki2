import { Component, OnInit } from '@angular/core';

import carveData from "../_json/carve-runes-weapons.json";
import carveData1 from "../_json/carve-runes-armours.json";
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
  selector: 'app-carves',
  templateUrl: './carves.component.html',
  styleUrls: ['./carves.component.css']
})
export class CarvesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  carve: Carve[] = carveData;
  carve1: Carve[] = carveData1;
  tattoos: Tattoos[] = tattoosData;
}
