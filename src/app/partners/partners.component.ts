import { Component, OnInit } from '@angular/core';

import partnersData from "../_json/partners.json";

interface Partners {
  name: String;
  type: String;
  location: String;
  skin: String;
}

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  partners: Partners[] = partnersData;
}
