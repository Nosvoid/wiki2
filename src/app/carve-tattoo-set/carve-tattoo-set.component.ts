import { Component, OnInit } from '@angular/core';

import carvetattoosetData from "../_json/special-sets/double-box.json";

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
  selector: 'app-carve-tattoo-set',
  templateUrl: './carve-tattoo-set.component.html',
  styleUrls: ['./carve-tattoo-set.component.css']
})
export class CarveTattooSetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  doublebox: DoubleBox[] = carvetattoosetData;
}
