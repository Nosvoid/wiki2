import { Component, OnInit } from '@angular/core';

import resistancesData from "../_json/resistances.json";

interface Resistances {
  name: String;
  id: String;
  location: String;
  buff: String;
}

@Component({
  selector: 'app-resistances',
  templateUrl: './resistances.component.html',
  styleUrls: ['./resistances.component.css']
})
export class ResistancesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  resistances: Resistances[] = resistancesData;
}
