import { Component, OnInit } from '@angular/core';

import accessoriesData from "../_json/accessories.json";

interface Accessories {
  name: String;
  location: String;
  buff: String;
  class: String;
}

function filter() {
  const filter = <HTMLSelectElement>document.getElementById('accessories-filter');
  filter.addEventListener('change', () => {
      let filterValue = filter.options[filter.selectedIndex].text;
      let raidItems = document.querySelectorAll('.raid');
      let pvpItems = document.querySelectorAll('.pvp');
      let fishItems = document.querySelectorAll('.fish');
      let goldItems = document.querySelectorAll('.gold');
      let bettingItems = document.querySelectorAll('.betting');
      let perfingItems = document.querySelectorAll('.perfing');

      switch(filterValue) {
          case "All":
              raidItems.forEach(element => {
                  element.classList.remove('display-none');
              });
              pvpItems.forEach(element => {
                  element.classList.remove('display-none');
              });
              fishItems.forEach(element => {
                  element.classList.remove('display-none');
              });
              goldItems.forEach(element => {
                  element.classList.remove('display-none');
              });
              bettingItems.forEach(element => {
                  element.classList.remove('display-none');
              });
              perfingItems.forEach(element => {
                  element.classList.remove('display-none');
              });
              break;
          case "PVP":
              raidItems.forEach(element => {
                  element.classList.add('display-none');
              });
              pvpItems.forEach(element => {
                  element.classList.remove('display-none');
              });
              fishItems.forEach(element => {
                  element.classList.add('display-none');
              });
              goldItems.forEach(element => {
                  element.classList.add('display-none');
              });
              bettingItems.forEach(element => {
                  element.classList.add('display-none');
              });
              perfingItems.forEach(element => {
                  element.classList.add('display-none');
              });
              break;
          case "Raid/PVE":
              raidItems.forEach(element => {
                  element.classList.remove('display-none');
              });
              pvpItems.forEach(element => {
                  element.classList.add('display-none');
              });
              fishItems.forEach(element => {
                  element.classList.add('display-none');
              });
              goldItems.forEach(element => {
                  if(element.classList.contains('raid')) {
                      element.classList.remove('display-none');
                  } else {
                      element.classList.add('display-none');
                  }
              });
              bettingItems.forEach(element => {
                  element.classList.add('display-none');
              });
              perfingItems.forEach(element => {
                  element.classList.add('display-none');
              });
              break;
          case "Fish":
              raidItems.forEach(element => {
                  element.classList.add('display-none');
              });
              pvpItems.forEach(element => {
                  element.classList.add('display-none');
              });
              fishItems.forEach(element => {
                  element.classList.remove('display-none');
              });
              goldItems.forEach(element => {
                  element.classList.add('display-none');
              });
              bettingItems.forEach(element => {
                  element.classList.add('display-none');
              });
              perfingItems.forEach(element => {
                  element.classList.add('display-none');
              });
              break;
          case "Gold":
              raidItems.forEach(element => {
                  element.classList.add('display-none');
              });
              pvpItems.forEach(element => {
                  element.classList.add('display-none');
              });
              fishItems.forEach(element => {
                  element.classList.add('display-none');
              });
              goldItems.forEach(element => {
                  element.classList.remove('display-none');
              });
              bettingItems.forEach(element => {
                  element.classList.add('display-none');
              });
              perfingItems.forEach(element => {
                  element.classList.add('display-none');
              });
              break;
          case "Betting":
              raidItems.forEach(element => {
                  element.classList.add('display-none');
              });
              pvpItems.forEach(element => {
                  element.classList.add('display-none');
              });
              fishItems.forEach(element => {
                  element.classList.add('display-none');
              });
              goldItems.forEach(element => {
                  element.classList.add('display-none');
              });
              bettingItems.forEach(element => {
                  element.classList.remove('display-none');
              });
              perfingItems.forEach(element => {
                  element.classList.add('display-none');
              });
              break;
          case "Perfing SPs":
              raidItems.forEach(element => {
                  element.classList.add('display-none');
              });
              pvpItems.forEach(element => {
                  element.classList.add('display-none');
              });
              fishItems.forEach(element => {
                  element.classList.add('display-none');
              });
              goldItems.forEach(element => {
                  element.classList.add('display-none');
              });
              bettingItems.forEach(element => {
                  element.classList.add('display-none');
              });
              perfingItems.forEach(element => {
                  element.classList.remove('display-none');
              });
              break;
      }
  });
}

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    filter();
  }

  accessories: Accessories[] = accessoriesData;
}
