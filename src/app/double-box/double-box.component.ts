import { Component, OnInit } from '@angular/core';

import doubleBoxData from "../_json/special-sets/double-box.json";

interface DoubleBox {
  regular: Array<Regular>;
  a4: Array<A4>;
}

interface Regular {
  name: String;
  img: String;
}
interface A4 {
  name: String;
  img: String;
}

@Component({
  selector: 'app-double-box',
  templateUrl: './double-box.component.html',
  styleUrls: ['./double-box.component.css']
})
export class DoubleBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  doublebox: DoubleBox[] = doubleBoxData;
}
