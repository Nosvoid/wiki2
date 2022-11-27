import { Component, OnInit } from '@angular/core';

function openPrestige() {
  let btn = document.querySelectorAll('.open-prestige');
  
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
  selector: 'app-prestige-system',
  templateUrl: './prestige-system.component.html',
  styleUrls: ['./prestige-system.component.css']
})

export class PrestigeSystemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    openPrestige();
  }

}
