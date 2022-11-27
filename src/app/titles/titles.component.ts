import { Component, OnInit } from '@angular/core';

import titlesData from "../_json/titles.json";

interface Titles {
  name: String;
  id: String;
  location: String;
  img: String;
  class: String;
}

function filter() {
  const filter = <HTMLSelectElement>document.getElementById('titles-filter');
  filter.addEventListener('change', () => {
      let filterValue = filter.options[filter.selectedIndex].text;
      let raidItems = document.querySelectorAll('.raid');
      let pveItems = document.querySelectorAll('.pve');
      let pvpItems = document.querySelectorAll('.pvp');
      let fishItems = document.querySelectorAll('.fish');
      let goldItems = document.querySelectorAll('.gold');
      let bettingItems = document.querySelectorAll('.betting');
      let aestheticItems = document.querySelectorAll('.aesthetic');
      let expItems = document.querySelectorAll('.exp');
      let doubleBoxItems = document.querySelectorAll('.double-box');
      let cookingItems = document.querySelectorAll('.cooking');

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
              aestheticItems.forEach(element => {
                  element.classList.remove('display-none');
              });
              expItems.forEach(element => {
                  element.classList.remove('display-none');
              });
              pveItems.forEach(element => {
                element.classList.remove('display-none');
              });
              doubleBoxItems.forEach(element => {
                element.classList.remove('display-none');
              });
              cookingItems.forEach(element => {
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
              aestheticItems.forEach(element => {
                element.classList.add('display-none');
              });
              expItems.forEach(element => {
                element.classList.add('display-none');
              });
              pveItems.forEach(element => {
                element.classList.add('display-none');
              });
              doubleBoxItems.forEach(element => {
                element.classList.add('display-none');
              });
              cookingItems.forEach(element => {
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
              aestheticItems.forEach(element => {
                element.classList.add('display-none');
              });
              expItems.forEach(element => {
                element.classList.add('display-none');
              });
              pveItems.forEach(element => {
                element.classList.add('display-none');
              });
              doubleBoxItems.forEach(element => {
                element.classList.add('display-none');
              });
              cookingItems.forEach(element => {
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
              aestheticItems.forEach(element => {
                element.classList.add('display-none');
              });
              expItems.forEach(element => {
                element.classList.add('display-none');
              });
              pveItems.forEach(element => {
                element.classList.add('display-none');
              });
              doubleBoxItems.forEach(element => {
                element.classList.add('display-none');
              });
              cookingItems.forEach(element => {
                element.classList.add('display-none');
              });
              break;
          case "Betting / Perfing SPs":
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
              aestheticItems.forEach(element => {
                element.classList.add('display-none');
              });
              expItems.forEach(element => {
                element.classList.add('display-none');
              });
              pveItems.forEach(element => {
                element.classList.add('display-none');
              });
              doubleBoxItems.forEach(element => {
                element.classList.add('display-none');
              });
              cookingItems.forEach(element => {
                element.classList.add('display-none');
              });
              break;
          case "Aesthetic":
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
              aestheticItems.forEach(element => {
                element.classList.remove('display-none');
              });
                expItems.forEach(element => {
                element.classList.add('display-none');
              });
              pveItems.forEach(element => {
                element.classList.add('display-none');
              });
              doubleBoxItems.forEach(element => {
                element.classList.add('display-none');
              });
              cookingItems.forEach(element => {
                element.classList.add('display-none');
              });
              break;
          case "Exp":
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
              aestheticItems.forEach(element => {
                element.classList.add('display-none');
              });
              expItems.forEach(element => {
                element.classList.remove('display-none');
              });
              pveItems.forEach(element => {
                element.classList.add('display-none');
              });
              doubleBoxItems.forEach(element => {
                element.classList.add('display-none');
              });
              cookingItems.forEach(element => {
                element.classList.add('display-none');
              });
              break;
          case "PVE":
              raidItems.forEach(element => {
                  element.classList.add('display-none');
              });
              pveItems.forEach(element => {
                  element.classList.remove('display-none');
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
              aestheticItems.forEach(element => {
                element.classList.add('display-none');
              });
              expItems.forEach(element => {
                element.classList.add('display-none');
              });
              doubleBoxItems.forEach(element => {
                element.classList.add('display-none');
              });
              cookingItems.forEach(element => {
                element.classList.add('display-none');
              });
              break;
          case "Double Box":
              raidItems.forEach(element => {
                  element.classList.add('display-none');
              });
              pveItems.forEach(element => {
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
              aestheticItems.forEach(element => {
                element.classList.add('display-none');
              });
              expItems.forEach(element => {
                element.classList.add('display-none');
              });
              doubleBoxItems.forEach(element => {
                element.classList.remove('display-none');
              });
              cookingItems.forEach(element => {
                element.classList.add('display-none');
              });
              break;
          case "Raid":
              raidItems.forEach(element => {
                  element.classList.remove('display-none');
              });
              pveItems.forEach(element => {
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
              aestheticItems.forEach(element => {
                element.classList.add('display-none');
              });
              expItems.forEach(element => {
                element.classList.add('display-none');
              });
              doubleBoxItems.forEach(element => {
                element.classList.add('display-none');
              });
              cookingItems.forEach(element => {
                element.classList.add('display-none');
              });
              break;
          case "Cooking":
              raidItems.forEach(element => {
                  element.classList.add('display-none');
              });
              pveItems.forEach(element => {
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
              aestheticItems.forEach(element => {
                element.classList.add('display-none');
              });
              expItems.forEach(element => {
                element.classList.add('display-none');
              });
              doubleBoxItems.forEach(element => {
                element.classList.add('display-none');
              });
              cookingItems.forEach(element => {
                element.classList.remove('display-none');
              });
              break;
      }
  });
}

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    filter();
  }

  titles: Titles[] = titlesData;
}
