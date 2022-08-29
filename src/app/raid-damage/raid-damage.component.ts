import { Component, OnInit } from '@angular/core';

import raidDamageData from "../_json/special-sets/raid-damage.json";

interface RaidDamage {
  type: String;
  items: Array<Items>;
}

interface Items {
  name: String;
  img: String;
}

function hello() {
  alert("hello");
}


@Component({
  selector: 'app-raid-damage',
  templateUrl: './raid-damage.component.html',
  styleUrls: ['./raid-damage.component.css']
})
export class RaidDamageComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
       
  }

  raidDamage: RaidDamage[] = raidDamageData;
}
