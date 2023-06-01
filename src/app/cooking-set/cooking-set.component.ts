import { Component, OnInit } from '@angular/core';

import bettingsetData from "../_json/special-sets/cooking-set.json";

interface betting {
  regular: Array<Regular>;

}

interface Regular {
  name: String;
  img: String;
  location: String;
}

@Component({
  selector: 'app-cooking-set',
  templateUrl: './cooking-set.component.html',
  styleUrls: ['./cooking-set.component.css']
})
export class CookingSetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  betting: betting[] = bettingsetData;
}
