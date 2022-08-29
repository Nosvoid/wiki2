import { Component, OnInit } from '@angular/core';

import obtainingData from "../_json/specialists/obtaining.json";

interface Obtaining {
  name: String;
  location: String;
  img: Array<SPIcons>;
  class: String;
}

interface SPIcons {
  icon: String;
}

@Component({
  selector: 'app-obtaining-sps',
  templateUrl: './obtaining-sps.component.html',
  styleUrls: ['./obtaining-sps.component.css']
})
export class ObtainingSpsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  obtaining: Obtaining[] = obtainingData;
}
