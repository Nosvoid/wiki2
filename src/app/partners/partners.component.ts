import { Component, OnInit } from '@angular/core';

import partnersData from "../_json/partners.json";

interface Partners {
  name: String;
  type: String;
  location: String;
  buff: String;
  skin: String;
}

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    showBuffs();
    
  }

  partners: Partners[] = partnersData;
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
