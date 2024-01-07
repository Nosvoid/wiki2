// daily-hub.component.ts

import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Category {
  name: string;
  items: any[];
}

@Component({
  selector: 'app-daily-hub',
  templateUrl: './daily-hub.component.html',
  styleUrls: ['./daily-hub.component.css']
})
export class DailyHubComponent {
  categories: Category[] = [
    {
      name: 'DAILY HUB AREA',
      items: [
        { name: 'ELYSIA', icon: 'elysia.png', description: 'All Quests from Elysia has  <br/><b>6x Amulet Box & 1x Food Box as rewards</b>' },
        { name: 'SLUGG', icon: 'slugg.png', description: 'All Quests from Slugg has <br/><b>6x Amulet Box & 15x Colored Acorn as rewards</b>' },
        { name: 'ERIC', icon: 'eric.png', description: 'All Quests from Eric has <br/><b>6x Amulet Box & 1x Tattoo Box 1 as rewards</b>' },
        { name: 'RAID MANAGER', icon: 'raid_manager.png', description: 'All Quests from Raid Manager has<br/><b>50x Amulet Box as rewards</b>' },
        { name: 'JIN HAMADIN(Accorns Craft)', icon: 'jin.png', description: this.sanitizer.bypassSecurityTrustHtml('<img src="assets/img/daily-hub/jin_craft.png" alt="Accorns">') as SafeHtml },
        // ... inne przyciski z kategorii 'Quests'
      ]
    },
    {
      name: 'OTHER QUESTS',
      items: [
        { name: 'KACHANTROK (P3)', icon: 'kachantrok.png', description: 'All Quests from Kachantrok has <br/><b>14x Tower Boxes and Books of Power(You will obtain all books except a4 books) as rewards</b>' },
        { name: 'GUARD CHILTON (NOSVILLE)', icon: 'lighthouse.png', description: ' <ul><li>Finish Fernon Raid 400x - Reward: <b>King of Fernon Title</b><br/><hr></li><li>Finish Fernon Raid 900x - Reward: <b>Mini Fernon Pet Bead</b><hr></li><li>Finish Fernon Raid 200x - Reward: <b>Fibi Frosty Pet Bead</b><hr></ul>'},
        { name: 'MAYOR CAESAR (P5)', icon: 'cesar.png', description: 'Kill monsters in Asgobas Instant Combat - <b>Reward: Asgobas Lottery Ticket</b>' },
        { name: 'DRACONIAN ALCHEMIST (P5)', icon: 'draconian.png', description: 'Participate in: A4 Raid (0/1), Caligor (0/1), Asgobas IC (0/1) - Reward: <b>5x Ancient Dragon Runestone, 135x Dratanium</b><hr> Participate in Rainbow Battle - Reward: <b>1x Carve Rune Box</b> <hr>Kill 50 players on Act4 - Reward: <b>1x Carve Rune Box</b>' },
        { name: 'FRIGG (A4)', icon: 'frigg.png', description: '- First step : Kill 15x players in Act4. Second step : Kill 10x Frosty Ghost Stag and Yeti - Reward: <b>Frozen Spear x1</b> <hr>- Kill 750x players in A4 - Reward: <b>1x Butchers Soul Spirit</b>' },
        // ... inne przyciski z kategorii 'Managers'
      ]
    },
 
    // ... inne kategorie według potrzeb
  ];

  selectedItem: any;

  constructor(private sanitizer: DomSanitizer) {}

  toggleDescription(item: any) {
    this.selectedItem = this.selectedItem === item ? null : item;
  }
}
