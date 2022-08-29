import { Component, OnInit } from '@angular/core';

import fairiesData from "../_json/fairies.json";

interface Fairies {
  name: String;
  location: String;
  buff: String;
}

@Component({
  selector: 'app-fairies',
  templateUrl: './fairies.component.html',
  styleUrls: ['./fairies.component.css']
})
export class FairiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  fairies: Fairies[] = fairiesData;
}
