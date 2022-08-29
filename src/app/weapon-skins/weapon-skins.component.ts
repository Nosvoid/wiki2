import { Component, OnInit } from '@angular/core';

import weaponSkinsData from "../_json/weapon-skins.json";

interface WeaponSkins {
  name: String;
  location: String;
  upgrade: String;
  buff: String;
  class: String;
}

function filter() {
  const filter = <HTMLSelectElement>document.getElementById('weapon-filter');
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
  selector: 'app-weapon-skins',
  templateUrl: './weapon-skins.component.html',
  styleUrls: ['./weapon-skins.component.css']
})
export class WeaponSkinsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    filter();
  }

  weaponSkins: WeaponSkins[] = weaponSkinsData;
}
