import { Component, OnInit } from '@angular/core';

import raidsData from "../_json/raids.json";

interface Raids {
  name: String;
  location: String;
  box: String;
  rewards: Array<RaidRewards>;
}

interface RaidRewards {
  reward: String;
}

@Component({
  selector: 'app-raids',
  templateUrl: './raids.component.html',
  styleUrls: ['./raids.component.css']
})
export class RaidsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  raids: Raids[] = raidsData;
}
