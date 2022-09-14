import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';

import wingsData from "../_json/costumes/wings.json";

interface Wings {
  name: String;
  buff: String;
  class: String;
}

function filter() {
  const filter = <HTMLSelectElement>document.getElementById('wings-filter');
  filter.addEventListener('change', () => {
      let filterValue = filter.options[filter.selectedIndex].text;
      let raidItems = document.querySelectorAll('.raid');
      let pveItems = document.querySelectorAll('.pve');
      let pvpItems = document.querySelectorAll('.pvp');
      let expItems = document.querySelectorAll('.exp');
      let fameItems = document.querySelectorAll('.fame');
      let raidFameItems = document.querySelectorAll('.raid-fame');

      switch(filterValue) {
          case "All":
            raidItems.forEach(element => {
                element.classList.remove('display-none');
            });
            pvpItems.forEach(element => {
                element.classList.remove('display-none');
            });
            pveItems.forEach(element => {
                element.classList.remove('display-none');
            });
            expItems.forEach(element => {
                element.classList.remove('display-none');
            });
            fameItems.forEach(element => {
                element.classList.remove('display-none');
            });
            raidFameItems.forEach(element => {
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
            pveItems.forEach(element => {
                element.classList.add('display-none');
            });
            expItems.forEach(element => {
                element.classList.add('display-none');
            });
            fameItems.forEach(element => {
                element.classList.add('display-none');
            });
            break;
          case "Raid":
            raidItems.forEach(element => {
                element.classList.remove('display-none');
            });
            pvpItems.forEach(element => {
                element.classList.add('display-none');
            });
            pveItems.forEach(element => {
                element.classList.add('display-none');
            });
            expItems.forEach(element => {
                element.classList.add('display-none');
            });
            fameItems.forEach(element => {
                element.classList.add('display-none');
            });
            raidFameItems.forEach(element => {
                element.classList.remove('display-none');
            });
            break;
          case "Fame":
            raidItems.forEach(element => {
                element.classList.add('display-none');
            });
            pvpItems.forEach(element => {
                element.classList.add('display-none');
            });
            pveItems.forEach(element => {
                element.classList.add('display-none');
            });
            expItems.forEach(element => {
                element.classList.add('display-none');
            });
            fameItems.forEach(element => {
                element.classList.remove('display-none');
            });
            raidFameItems.forEach(element => {
                element.classList.remove('display-none');
            });
            break;
          case "PVE":
            raidItems.forEach(element => {
                element.classList.add('display-none');
            });
            pvpItems.forEach(element => {
                element.classList.add('display-none');
            });
            pveItems.forEach(element => {
                element.classList.remove('display-none');
            });
            expItems.forEach(element => {
                element.classList.add('display-none');
            });
            fameItems.forEach(element => {
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
            pveItems.forEach(element => {
                element.classList.add('display-none');
            });
            expItems.forEach(element => {
                element.classList.remove('display-none');
            });
            fameItems.forEach(element => {
                element.classList.add('display-none');
            });
            break;
      }
  });
}

@Component({
  selector: 'app-costume-wings',
  templateUrl: './costume-wings.component.html',
  styleUrls: ['./costume-wings.component.css']
})
export class CostumeWingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    filter();
  }
  wings:Wings[]=wingsData;
}
