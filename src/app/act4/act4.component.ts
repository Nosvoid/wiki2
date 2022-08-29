import { Component, OnInit } from '@angular/core';

import npcsData from "../_json/act4-npcs.json";

interface Npcs {
  location: String;
  npcs: Array<AllNpcs>;
}

interface AllNpcs {
  name: String;
  info: String;
}

function openContent() {
  let btn = document.querySelectorAll('.open-content');

  btn.forEach(element => {
    element.addEventListener('click', () => {
      let next = element.nextElementSibling;

      if(next?.classList.contains('display-none')) {
        next.classList.remove('display-none');
        next.classList.add('display-grid');
      } else if(next?.classList.contains('display-grid')) {
        next.classList.remove('display-grid');
        next.classList.add('display-none');
      }
    });
  });
}

@Component({
  selector: 'app-act4',
  templateUrl: './act4.component.html',
  styleUrls: ['./act4.component.css']
})
export class Act4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    openContent();
  }
  npcs: Npcs[] = npcsData;

}
