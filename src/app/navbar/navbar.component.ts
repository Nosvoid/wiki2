import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  closeMenuLink() {
    let body = document.querySelector('body');
    let burgerIcon = <HTMLElement>document.getElementById("burger");
    let closeIcon = <HTMLElement>document.getElementById("close");
    let wikiNavbarMenu = <HTMLElement>document.getElementById('wiki-navbar-menu');

    if(body?.classList.contains('open')) {
      burgerIcon.style.display = "block";
      closeIcon.style.display = "none";
      wikiNavbarMenu.style.transform = "translateY(-100%)";
      wikiNavbarMenu.style.opacity = "0";
      body.classList.remove('open');
    }

    var dropDownBtns = document.querySelectorAll('[data-dropdown].active');
    dropDownBtns.forEach(dropdown => {
    dropdown.classList.remove("active");
  });
  }

  constructor() {}

  ngOnInit(): void {}

}
