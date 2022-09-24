import { Component, OnInit } from '@angular/core';

import pvpData from "../_json/special-sets/pvp-set.json";

interface Pvp {
  type: String;
  items: Array<Items>;
}

interface Items {
  name: String;
  img: String;
}

@Component({
  selector: 'app-pvp-set',
  templateUrl: './pvp-set.component.html',
  styleUrls: ['./pvp-set.component.css']
})
export class PvpSetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pvp: Pvp[] = pvpData;
}
