import { Component, OnInit } from '@angular/core';

import sellableData from "../_json/sellable-items.json";

interface sellable {
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
  selector: 'app-sellable-items',
  templateUrl: './sellable-items.component.html',
  styleUrls: ['./sellable-items.component.css']
})
export class SellableItemsComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
       
  }

  sellable: sellable[] = sellableData;
}
