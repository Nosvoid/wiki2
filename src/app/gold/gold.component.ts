import { Component, OnInit } from '@angular/core';

import goldData from "../_json/special-sets/gold.json";

interface Gold {
  type: String;
  items: Array<Items>;
}

interface Items {
  name: String;
  img: String;
}

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  gold: Gold[] = goldData;
}
