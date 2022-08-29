import { Component, OnInit } from '@angular/core';

import reputationData from "../_json/special-sets/reputation.json";

interface Reputation {
  type: String;
  items: Array<Items>;
}

interface Items {
  name: String;
  img: String;
}

@Component({
  selector: 'app-reputation',
  templateUrl: './reputation.component.html',
  styleUrls: ['./reputation.component.css']
})
export class ReputationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reputation: Reputation[] = reputationData;
}
