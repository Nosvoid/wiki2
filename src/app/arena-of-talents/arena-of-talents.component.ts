import { Component } from '@angular/core';

@Component({
  selector: 'app-arena',
  templateUrl: './arena-of-talents.component.html',
  styleUrls: ['./arena-of-talents.component.css']
})
export class ArenaComponent {
  generalInfoVisible = false;
  howToRegisterVisible = false;
  mechanicsVisible = false;

  carouselImages = [
    '/assets/img/prestiges/p9/ArenaOfTalent/mithril/1.png',
    '/assets/img/prestiges/p9/ArenaOfTalent/mithril/2.png',
    '/assets/img/prestiges/p9/ArenaOfTalent/mithril/3.png',
    '/assets/img/prestiges/p9/ArenaOfTalent/mithril/4.png',
    '/assets/img/prestiges/p9/ArenaOfTalent/mithril/5.png',
    '/assets/img/prestiges/p9/ArenaOfTalent/mithril/6.png',
    '/assets/img/prestiges/p9/ArenaOfTalent/mithril/7.png',
    '/assets/img/prestiges/p9/ArenaOfTalent/mithril/8.png',
    '/assets/img/prestiges/p9/ArenaOfTalent/mithril/9.png',
    '/assets/img/prestiges/p9/ArenaOfTalent/mithril/10.png',
    '/assets/img/prestiges/p9/ArenaOfTalent/mithril/11.png',
    '/assets/img/prestiges/p9/ArenaOfTalent/mithril/12.png',
    '/assets/img/prestiges/p9/ArenaOfTalent/mithril/13.png',
    '/assets/img/prestiges/p9/ArenaOfTalent/mithril/14.png',
    '/assets/img/prestiges/p9/ArenaOfTalent/mithril/15.png',
    '/assets/img/prestiges/p9/ArenaOfTalent/mithril/16.png',
    '/assets/img/prestiges/p9/ArenaOfTalent/mithril/17.png',
  ];

  currentIndex = 0;

  toggleGeneralInfo() {
    this.generalInfoVisible = !this.generalInfoVisible;

  }

  toggleHowToRegister() {
    this.howToRegisterVisible = !this.howToRegisterVisible;

  }

  toggleMechanics() {
    this.mechanicsVisible = !this.mechanicsVisible;

  }
  

  prevImage() {
    this.currentIndex = (this.currentIndex === 0) ? this.carouselImages.length - 1 : this.currentIndex - 1;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex === this.carouselImages.length - 1) ? 0 : this.currentIndex + 1;
    
  }

  // Dodaj tę funkcję, aby zapobiec propagacji zdarzenia
  preventTabExpansion(event: Event) {
    event.stopPropagation();
  }
}
