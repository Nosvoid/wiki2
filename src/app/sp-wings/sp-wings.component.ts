import { Component, OnInit } from '@angular/core';

import wingsData from "../_json/specialists/wings.json";

interface Wings {
  name: String;
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
    });
  });
}

@Component({
  selector: 'app-sp-wings',
  templateUrl: './sp-wings.component.html',
  styleUrls: ['./sp-wings.component.css']
})
export class SpWingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    showBuffs();
  }

  wings: Wings[] = wingsData;
}
