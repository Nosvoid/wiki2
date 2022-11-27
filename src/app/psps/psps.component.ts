import { Component, OnInit } from '@angular/core';

import pspsData from "../_json/psps.json";

interface Psps {
  name: String;
  id: String;
  partner: String;
  location: String;
  buff: String;
  skin: String;
  class: String;
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

function filter() {
  const filter = <HTMLSelectElement>document.getElementById('psps-filter');
  filter.addEventListener('change', () => {
      let filterValue = filter.options[filter.selectedIndex].text;
      let raidItems = document.querySelectorAll('.raid');
      let pvpItems = document.querySelectorAll('.pvp');
      let fishItems = document.querySelectorAll('.fish');
      let goldItems = document.querySelectorAll('.gold');
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
              cookingItems.forEach(element => {
                element.classList.remove('display-none');
              });
              break;
      }
  });
}

@Component({
  selector: 'app-psps',
  templateUrl: './psps.component.html',
  styleUrls: ['./psps.component.css']
})
export class PspsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    filter();
    showBuffs();
  }

  psps: Psps[] = pspsData;
}
