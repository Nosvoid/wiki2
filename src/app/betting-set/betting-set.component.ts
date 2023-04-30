import { Component, OnInit } from '@angular/core';

import bettingsetData from "../_json/special-sets/betting-set.json";

interface betting {
  regular: Array<Regular>;

}

interface Regular {
  name: String;
  img: String;
  location: String;
}

@Component({
  selector: 'app-betting-set',
  templateUrl: './betting-set.component.html',
  styleUrls: ['./betting-set.component.css']
})
export class BettingSetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  betting: betting[] = bettingsetData;
}
