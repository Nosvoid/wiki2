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

  repIcons = [
    {
      icon: "legend_purple",
      top: "15 - 43"
    },
    {
      icon: "legend_white",
      top: "4 - 14"
    },
    {
      icon: "top3",
      top: "3"
    },
    {
      icon: "top2",
      top: "2"
    },
    {
      icon: "top1",
      top: "1"
    }
  ]

  constructor() { }

  ngOnInit(): void {
    openContent();
  }
  npcs: Npcs[] = npcsData;

}
