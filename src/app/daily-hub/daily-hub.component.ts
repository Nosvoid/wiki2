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
        { name: 'ELYSIA', icon: 'elysia.png', description: 'All Quests from Elysia has 6x Amulet Box & 1x Food Box as rewards.' },
        { name: 'SLUGG', icon: 'slugg.png', description: 'All Quests from Slugg has 6x Amulet Box & 15x Colored Acorn as rewards.' },
        { name: 'ERIC', icon: 'eric.png', description: 'All Quests from Eric has 6x Amulet Box & 1x Tattoo Box 1 as rewards.' },
        { name: 'RAID MANAGER', icon: 'raid_manager.png', description: 'All Quests from Raid Manager has 50x Amulet Box as rewards.' },
        { name: 'JIN HAMADIN(Accorns Craft)', icon: 'jin.png', description: this.sanitizer.bypassSecurityTrustHtml('<img src="assets/img/daily-hub/jin_craft.png" alt="Accorns">') as SafeHtml },
        // ... inne przyciski z kategorii 'Quests'
      ]
    },
    {
      name: 'OTHER QUESTS',
      items: [
        { name: 'KACHANTROK (P3)', icon: 'kachantrok.png', description: 'All Quests from Raid Manager has 14x Tower Boxes and Books of Power(You will obtain all books except a4 books) as reward' },
        { name: 'GUARD CHILTON (NOSVILLE)', icon: 'lighthouse.png', description: ' <ul><li>Finish Fernon Raid 400x - Reward: King of Fernon TItle</li><li>Finish Fernon Raid 900x - Reward: Mini Fernon Pet Bead</li><li>Finish Fernon Raid 200x - Reward: Fibi Frosty Pet Bead</ul>'},
        { name: 'MAYOR CAESAR (P5)', icon: 'cesar.png', description: 'Kill monsters in Asgobas Instant Combat - Reward: Asgobas Lottery Ticket' },
        { name: 'DRACONIAN ALCHEMIST (P5)', icon: 'draconian.png', description: 'Participate in: A4 Raid (0/1), Caligor (0/1), Asgobas IC (0/1) - Reward: 5x Ancient Dragon Runestone, 135x Dratanium. Participate in Rainbow Battle - Reward: 1x Carve Rune Box. <br/>Kill 50 players on Act4 - Reward: 1x Carve Rune Box.' },
        { name: 'FRIGG (A4)', icon: 'frigg.png', description: '- First step : Kill 15x players in Act4. Second step : Kill 10x Frosty Ghost Stag and Yeti - Reward: Frozen Spear x1 <br/> - Kill 750x players in A4 - Reward: 1x Butchers Soul Spirit' },
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
