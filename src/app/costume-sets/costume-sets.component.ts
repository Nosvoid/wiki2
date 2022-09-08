import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

// Json
import allsetsData from "../_json/costumes/all-sets.json";

interface AllSets {
  name: String;
  location: String;
  skins: String;
  buff: String;
}

@Component({
  selector: 'app-costume-sets',
  templateUrl: './costume-sets.component.html',
  styleUrls: ['./costume-sets.component.css']
})
export class CostumeSetsComponent implements OnInit {
  
  showBuffs() {
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
  
  constructor() {}

  ngOnInit(): void {
    this.showBuffs();
  }

  allsets:AllSets[]=allsetsData;
}
