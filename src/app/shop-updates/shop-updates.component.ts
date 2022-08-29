import { Component, OnInit } from '@angular/core';

import shopUpdatesData from "../_json/updates/shop-updates.json";

interface ShopUpdates {
  date: String;
  items: Array<Items>
}

interface Items {
  name: String;
  img: String;
}

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  shopupdates: ShopUpdates[] = shopUpdatesData;
}
