import { Component, OnInit } from '@angular/core';

function openRules() {
  let btn = document.querySelectorAll('.open-rule');

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
      })
  })
}

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})

export class RulesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    openRules();
  }

}
