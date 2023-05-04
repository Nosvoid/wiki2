import { Component, OnInit } from '@angular/core';

import actfoursetData from "../_json/special-sets/act-four-set.json";

interface ActFourSet {
  regular: Array<Regular>;

}

interface Regular {
  name: String;
  img: String;
  location: String;
}

@Component({
  selector: 'app-act-four-set',
  templateUrl: './act-four-set.component.html',
  styleUrls: ['./act-four-set.component.css']
})
export class ActFourSetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  actfourset: ActFourSet[] = actfoursetData;
}
