import { Component, OnInit } from '@angular/core';

import perfectionsetData from "../_json/special-sets/perfection-set.json";

interface perfection {
  regular: Array<Regular>;

}

interface Regular {
  name: String;
  img: String;
  location: String;
}

@Component({
  selector: 'app-perfection-set',
  templateUrl: './perfection-set.component.html',
  styleUrls: ['./perfection-set.component.css']
})
export class PerfectionSetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  perfection: perfection[] = perfectionsetData;
}
