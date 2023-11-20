import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-icon-modal',
  template: `
    <div class="modal-content">
      <h2 class="modal-title">CLICK TO CLOSE</h2>
      <img [src]="data.icon?.toString()" alt="Selected Image" class="modal-icon">
    </div>
  `,
  styles: [`
    .modal-content {
      text-align: center;
      background: rgba(0, 0, 0, 0.8);
      padding: 20px;
      border: 2px solid #2C3E50; /* Dodaj obramowanie */
      border-radius: 8px; /* Zaokrąglony róg */
      
      
    }
    .modal-title {
      color: #ECF0F1; /* Kolor tekstu */
    }
    .modal-icon {
      display: block;
      margin: 0 auto;
      max-width: 100%;
      height: auto;
      border: 2px solid #2C3E50; /* Dodaj obramowanie do ikony */
      border-radius: 8px; /* Zaokrąglony róg */
    }
  `]
})
export class IconModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  closeModal(): void {
    console.log('Closing modal');
  }
}
