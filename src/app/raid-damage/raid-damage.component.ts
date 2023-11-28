import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';  // Dodaj import

import raidDamageData from "../_json/special-sets/raid-damage.json";

interface RaidDamage {
  type: String;
  items: Array<Items>;
}

interface Items {
  name: String;
  img: String;
}

@Component({
  selector: 'app-raid-damage',
  templateUrl: './raid-damage.component.html',
  styleUrls: ['./raid-damage.component.css']
})
export class RaidDamageComponent implements OnInit {

  // Dodaj Router i ActivatedRoute do konstruktora
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
       
  }

  raidDamage: RaidDamage[] = raidDamageData;
}
