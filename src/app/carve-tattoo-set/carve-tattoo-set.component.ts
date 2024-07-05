import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IconModalComponent } from './icon-modal.component';

@Component({
  selector: 'app-carve-tattoo-set',
  templateUrl: './carve-tattoo-set.component.html',
  styleUrls: ['./carve-tattoo-set.component.css']
})
export class CarveTattooSetComponent implements OnInit {
  carveIcons = [
    { icon: 'assets/img/special-sets/carve-tattoo/cuddly_dino.png', image: 'assets/img/special-sets/carve-tattoo/cuddly_dino_hat.png' },
    { icon: 'assets/img/special-sets/carve-tattoo/creepy_monk_icon.png', image: 'assets/img/special-sets/carve-tattoo/creepy_monk.png' },
    { icon: 'assets/img/special-sets/carve-tattoo/amulet_icon.png', image: 'assets/img/special-sets/carve-tattoo/amulet.png' },
    { icon: 'assets/img/special-sets/carve-tattoo/carve_potion.png', image: 'assets/img/special-sets/carve-tattoo/carve_potion_buff.png' },
    { icon: 'assets/img/special-sets/carve-tattoo/carve.png', image: 'assets/img/shop-updates/MiniCarve.png' },
    // dodaj kolejne ikony
  ];

  tattooIcons = [
    { icon: 'assets/img/special-sets/carve-tattoo/creepy_monk_icon.png', image: 'assets/img/special-sets/carve-tattoo/creepy_monk.png' },
    { icon: 'assets/img/special-sets/carve-tattoo/tattoo_potion.png', image: 'assets/img/special-sets/carve-tattoo/tattoo_potion_buff.png' },
    { icon: 'assets/img/special-sets/carve-tattoo/DinoCostumeIcon.png', image: 'assets/img/special-sets/carve-tattoo/DinoCostume.png' },
    { icon: 'assets/img/special-sets/carve-tattoo/tattoo.png', image: 'assets/img/shop-updates/MiniTattoo.png' },
    { icon: 'assets/img/special-sets/carve-tattoo/Dreambox.png', image: 'assets/img/costumes/weapon-skins/sweet_chocolate.png' },
    // dodaj kolejne ikony
  ];

  selectedIcon: { icon: string, image: string } | null = null;

  carveContainerOpen = false;
  tattooContainerOpen = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // ... inicjalizacja
  }

  toggleContainer(container: 'carve' | 'tattoo'): void {
    if (container === 'carve') {
      this.carveContainerOpen = !this.carveContainerOpen;
      this.tattooContainerOpen = false;
    } else if (container === 'tattoo') {
      this.tattooContainerOpen = !this.tattooContainerOpen;
      this.carveContainerOpen = false;
    }
  }

  openModal(icon: { icon: string; image: string } | null): void {
    if (icon) {
      const dialogRef = this.dialog.open(IconModalComponent, {
        data: { icon: icon.image } // Przekazuj tylko image jako ikonę
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('Modal closed');
      });
    }
  }

  showPopup(image: string, container: 'carve' | 'tattoo', index: number): void {
    this.selectedIcon = { icon: '', image }; // Dodaj puste pole icon
    this.openModal(this.selectedIcon);
  }
  
  
  }

