import { Component, OnInit } from '@angular/core';

import petsData from "../_json/pets.json";

interface Pets {
  name: String;
  location: String;
  buff: String;
  class: String;
  skin: String;
}

function filter() {
  const filter = <HTMLSelectElement>document.getElementById('pets-filter');
  filter.addEventListener('change', () => {
      let filterValue = filter.options[filter.selectedIndex].text;
      let raidItems = document.querySelectorAll('.raid');
      let pvpItems = document.querySelectorAll('.pvp');
      let fishItems = document.querySelectorAll('.fish');
      let goldItems = document.querySelectorAll('.gold');
      let bettingItems = document.querySelectorAll('.betting');
      let perfingItems = document.querySelectorAll('.perfing');
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
                perfingItems.forEach(element => {
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
                perfingItems.forEach(element => {
                    element.classList.add('display-none');
                });
                cookingItems.forEach(element => {
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
                perfingItems.forEach(element => {
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
                perfingItems.forEach(element => {
                    element.classList.add('display-none');
                });
                cookingItems.forEach(element => {
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
                cookingItems.forEach(element => {
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
                cookingItems.forEach(element => {
                    element.classList.add('display-none');
                });
                break;
          case "Cooking":
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
                    element.classList.add('display-none');
                });
                cookingItems.forEach(element => {
                    element.classList.remove('display-none');
                });
                break;
      }
  });
}

function showBuffs() {
    $(document).ready(function() {
      $('.show-buffs').click(function(event){
        let btn = event.target;
        let nextChild = btn.nextElementSibling;

        if(nextChild?.classList.contains('display-none')) {
          nextChild.classList.remove('display-none');
          nextChild.classList.add('display-flex');
        } else if(nextChild?.classList.contains('display-flex')) {
          nextChild.classList.remove('display-flex');
          nextChild.classList.add('display-none');
        }
        $('.close-buffs').click(function(event) {
          nextChild?.classList.remove('display-flex');
          nextChild?.classList.add('display-none');
        });

        window.addEventListener('click', (e) => {
            if(e.target == nextChild) {
              nextChild?.classList.remove('display-flex');
              nextChild?.classList.add('display-none');
            }
          });
      });
    });
}

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    filter();
    showBuffs();
  }

  pets: Pets[] = petsData;
}
